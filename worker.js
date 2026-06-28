export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    const url = new URL(request.url);

    if (url.pathname === '/transcribe') {
      try {
        const fd = await request.formData();
        const wfd = new FormData();
        wfd.append('file', fd.get('file'), 'audio.webm');
        wfd.append('model', 'whisper-1');
        const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + env.OPENAI_KEY },
          body: wfd,
        });
        const d = await r.json();
        return new Response(JSON.stringify({ ok: true, transcription: d.text || '' }), {
          headers: Object.assign({ 'Content-Type': 'application/json' }, cors)
        });
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: e.message }), {
          status: 500, headers: Object.assign({ 'Content-Type': 'application/json' }, cors)
        });
      }
    }

    if (url.pathname === '/analyze') {
      try {
        const b = await request.json();
        const prompt = 'Eres un experto en analisis de talento profesional. Analiza esta transcripcion de un video de categoria "' + b.category + '" y extrae TODA la informacion relevante. Transcripcion completa: "' + b.transcription + '". Devuelve SOLO este JSON sin markdown ni texto adicional: {"keywords":["minimo 10 palabras clave profesionales especificas que aparecen en el texto, no genericas"],"habilidades":["lista de habilidades tecnicas y blandas mencionadas"],"experiencia_anos":"anos de experiencia mencionados o vacio","sectores":["sectores profesionales detectados"],"logros":["logros o resultados concretos mencionados"],"personality_traits":[{"name":"rasgo detectado","score":85}],"professional_profiles":["perfiles profesionales que encajan"],"summary_for_seeker":"resumen de 2-3 frases del candidato para que una empresa lo entienda rapidamente"}';
        const r = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + env.OPENAI_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.2, max_tokens: 1500 })
        });
        const d = await r.json();
        const raw = d.choices[0].message.content.replace(/```json/g, '').replace(/```/g, '').trim();
        return new Response(JSON.stringify({ ok: true, analysis: JSON.parse(raw) }), {
          headers: Object.assign({ 'Content-Type': 'application/json' }, cors)
        });
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: e.message }), {
          status: 500, headers: Object.assign({ 'Content-Type': 'application/json' }, cors)
        });
      }
    }

    return new Response('Talpot AI Worker OK', { headers: cors });
  }
};
