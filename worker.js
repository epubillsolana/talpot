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
        const prompt = 'Analiza este video de categoria ' + b.category + '. Transcripcion: ' + b.transcription + '. Devuelve SOLO este JSON sin markdown: {"keywords":["k1","k2","k3","k4","k5"],"personality_traits":[{"name":"rasgo1","score":80},{"name":"rasgo2","score":70}],"professional_profiles":["Perfil1","Perfil2"],"summary_for_seeker":"Resumen breve."}';
        const r = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + env.OPENAI_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.3, max_tokens: 500 })
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
