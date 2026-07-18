// TALPOT AI WORKER v3 — Whisper + extracció intel·ligent
export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') return json({ ok: false, error: 'POST only' }, 405, cors);

    const url = new URL(request.url);

    try {
      // ═══ /transcribe — àudio → text (Whisper) ═══
      if (url.pathname === '/transcribe') {
        const formData = await request.formData();
        const audio = formData.get('audio') || formData.get('file');
        if (!audio) return json({ ok: false, error: 'No audio' }, 400, cors);

        const whisperForm = new FormData();
        whisperForm.append('file', audio, 'audio.webm');
        whisperForm.append('model', 'whisper-1');

        const wRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}` },
          body: whisperForm,
        });
        if (!wRes.ok) return json({ ok: false, error: 'Whisper error ' + wRes.status }, 500, cors);
        const wData = await wRes.json();
        return json({ ok: true, transcription: wData.text }, 200, cors);
      }

      // ═══ /extract — transcripció → intel·ligència estructurada ═══
      if (url.pathname === '/extract') {
        const { transcription, category } = await request.json();
        if (!transcription) return json({ ok: false, error: 'No transcription' }, 400, cors);

        // Avaluació de NIVELL D'IDIOMA (qualsevol idioma) — CEFR real
        if (category === 'idioma') {
          const gRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              temperature: 0.1,
              response_format: { type: 'json_object' },
              messages: [
                { role: 'system', content: `Ets examinador oficial de nivells d'idioma (marc CEFR). Avalues transcripcions de parla espontània de candidats en QUALSEVOL idioma.

AVALUA amb rigor segons: riquesa de vocabulari, correcció gramatical, complexitat de les estructures, fluïdesa aparent i naturalitat. Una transcripció curta amb frases simples i errors = A2/B1. Estructures complexes, connectors variats i lèxic precís = B2/C1. Sigues realista, no generós.

Respon NOMÉS JSON:
{"idioma_detectat":"nom de l'idioma en català (ex: Anglès, Francès, Alemany)","nivell":"A1|A2|B1|B2|C1|C2","justificacio":"1-2 frases concretes del perquè","keywords":["2-4 fortaleses lingüístiques detectades"]}` },
                { role: 'user', content: transcription },
              ],
            }),
          });
          if (!gRes.ok) { const eb = await gRes.text(); return json({ ok: false, error: 'GPT ' + gRes.status + ': ' + eb.substring(0, 300) }, 500, cors); }
          const gData = await gRes.json();
          let extracted = {};
          try { extracted = JSON.parse(gData.choices[0].message.content); } catch(e) {
            return json({ ok: false, error: 'Parse error' }, 500, cors);
          }
          return json({ ok: true, extracted }, 200, cors);
        }

        const currentYear = new Date().getFullYear();
        const system = `Ets l'analista de talent de Talpot. Analitzes transcripcions de vídeos de candidats i n'extreus informació estructurada i PRECISA.

REGLES:
- Respon NOMÉS amb JSON vàlid, sense markdown ni text extra.
- keywords: competències i coneixements REALS mencionats (màx 8, en l'idioma del candidat, capitalitzades).
- CRÍTIC: només extreu una keyword si hi ha EVIDÈNCIA CONTEXTUAL real (el candidat en parla de debò, explica experiència o coneixement). IGNORA coincidències fonètiques, mencions trivials o de passada. Ex: "ai, quina calor" NO és "AI"; "vaig passar per Madrid" NO és coneixement de Madrid. En cas de dubte, NO l'incloguis.
- Si mencionen anys o dates (ex: "del 2006 al 2010", "durant 3 anys", "des del 2020"), CALCULA els anys d'experiència. Any actual: ${currentYear}. "Des de 2020" = ${currentYear - 2020} anys.
- experiencies: només si el vídeo parla de feina/experiència. Cada una amb sector, rol (si es pot inferir) i anys (número, null si no es pot calcular).
- perfils_laborals: 1-3 rols laborals CONCRETS on aquest candidat encaixaria (ex: "Tècnic/a de medi ambient", "Responsable de logística", NO genèrics com "medi ambient").
- idiomes: només si es mencionen o es detecten.
- Si la categoria és "idioma": AVALUA el nivell CEFR real del text transcrit (A1, A2, B1, B2, C1 o C2) segons vocabulari, gramàtica, complexitat de frases i fluïdesa. Sigues rigorós: errors bàsics = A2/B1; frases complexes correctes i connectors = B2+; matisos i precisió = C1+. Afegeix camp "nivell_idioma".

FORMAT:
{"keywords":["..."],"experiencies":[{"sector":"...","rol":"...","anys":N}],"perfils_laborals":["..."],"idiomes":["..."],"anys_experiencia_total":N,"nivell_idioma":{"idioma":"anglès","nivell":"B2","justificacio":"1 frase breu"}}`;

        const gRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            temperature: 0.2,
            response_format: { type: 'json_object' },
            messages: [
              { role: 'system', content: system },
              { role: 'user', content: `Categoria del vídeo: ${category || 'general'}\n\nTranscripció:\n${transcription}` },
            ],
          }),
        });
        if (!gRes.ok) { const eb = await gRes.text(); return json({ ok: false, error: 'GPT ' + gRes.status + ': ' + eb.substring(0, 300) }, 500, cors); }
        const gData = await gRes.json();
        let extracted = {};
        try { extracted = JSON.parse(gData.choices[0].message.content); } catch(e) {
          return json({ ok: false, error: 'Parse error' }, 500, cors);
        }
        return json({ ok: true, extracted }, 200, cors);
      }

      // ═══ /analyze — anàlisi per al Seeker (existent, mantingut) ═══
      if (url.pathname === '/analyze') {
        const { transcription, category } = await request.json();
        if (!transcription) return json({ ok: false, error: 'No transcription' }, 400, cors);

        const gRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            temperature: 0.3,
            response_format: { type: 'json_object' },
            messages: [
              { role: 'system', content: `Ets l'analista de RRHH de Talpot. Analitza el contingut del candidat i respon NOMÉS JSON:
{"keywords":["màx 6 competències"],"summary_for_seeker":"2-4 frases professionals descrivint el candidat per a un reclutador","titular":"la frase TEXTUAL més potent dita pel candidat (còpia literal, màx 15 paraules)"}` },
              { role: 'user', content: `Categoria: ${category || 'general'}\n\n${transcription}` },
            ],
          }),
        });
        if (!gRes.ok) { const eb = await gRes.text(); return json({ ok: false, error: 'GPT ' + gRes.status + ': ' + eb.substring(0, 300) }, 500, cors); }
        const gData = await gRes.json();
        let analysis = {};
        try { analysis = JSON.parse(gData.choices[0].message.content); } catch(e) {}
        return json({ ok: true, analysis }, 200, cors);
      }

      // ═══ /oferta — genera requisits per a QUALSEVOL tipologia d'oferta ═══
      if (url.pathname === '/oferta') {
        const { tipologia } = await request.json();
        if (!tipologia) return json({ ok: false, error: 'No tipologia' }, 400, cors);

        const gRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            temperature: 0.2,
            response_format: { type: 'json_object' },
            messages: [
              { role: 'system', content: `Ets expert en el mercat laboral espanyol. Donada una tipologia d'oferta de feina, defineix els requisits REALS habituals. Respon NOMÉS JSON:
{"titol":"nom professional de l'oferta","kw":["6-10 keywords tècniques en minúscula, arrels de paraula per matching (ex: 'logíst' cobreix logística/logístic)"],"soft":["4-6 competències soft"],"expMin":anys mínims habituals (número)}` },
              { role: 'user', content: tipologia },
            ],
          }),
        });
        if (!gRes.ok) { const eb = await gRes.text(); return json({ ok: false, error: 'GPT ' + gRes.status + ': ' + eb.substring(0, 300) }, 500, cors); }
        const gData = await gRes.json();
        let oferta = {};
        try { oferta = JSON.parse(gData.choices[0].message.content); } catch(e) {
          return json({ ok: false, error: 'Parse error' }, 500, cors);
        }
        return json({ ok: true, oferta }, 200, cors);
      }

      return json({ ok: false, error: 'Not found' }, 404, cors);
    } catch (err) {
      return json({ ok: false, error: err.message }, 500, cors);
    }
  },
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
