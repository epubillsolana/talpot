// TALPOT — Jerarquia geogràfica: ciutat -> província -> comunitat
window.TALPOT_GEO = [
  // Catalunya
  { ciutat: 'Barcelona', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Reus', provincia: 'Tarragona', comunitat: 'Catalunya' },
  { ciutat: 'Tarragona', provincia: 'Tarragona', comunitat: 'Catalunya' },
  { ciutat: 'Girona', provincia: 'Girona', comunitat: 'Catalunya' },
  { ciutat: 'Lleida', provincia: 'Lleida', comunitat: 'Catalunya' },
  { ciutat: 'Badalona', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Sabadell', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Terrassa', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Mataró', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Manresa', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Vic', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Igualada', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Vilafranca del Penedès', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Sant Cugat del Vallès', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Granollers', provincia: 'Barcelona', comunitat: 'Catalunya' },
  { ciutat: 'Figueres', provincia: 'Girona', comunitat: 'Catalunya' },
  { ciutat: 'Blanes', provincia: 'Girona', comunitat: 'Catalunya' },
  { ciutat: 'Salou', provincia: 'Tarragona', comunitat: 'Catalunya' },
  { ciutat: 'Tortosa', provincia: 'Tarragona', comunitat: 'Catalunya' },
  { ciutat: 'Vilanova i la Geltrú', provincia: 'Barcelona', comunitat: 'Catalunya' },
  // Madrid
  { ciutat: 'Madrid', provincia: 'Madrid', comunitat: 'Comunidad de Madrid' },
  { ciutat: 'Alcalá de Henares', provincia: 'Madrid', comunitat: 'Comunidad de Madrid' },
  { ciutat: 'Móstoles', provincia: 'Madrid', comunitat: 'Comunidad de Madrid' },
  // País Valencià
  { ciutat: 'València', provincia: 'València', comunitat: 'Comunitat Valenciana' },
  { ciutat: 'Alacant', provincia: 'Alacant', comunitat: 'Comunitat Valenciana' },
  { ciutat: 'Castelló de la Plana', provincia: 'Castelló', comunitat: 'Comunitat Valenciana' },
  // Andalusia
  { ciutat: 'Sevilla', provincia: 'Sevilla', comunitat: 'Andalucía' },
  { ciutat: 'Màlaga', provincia: 'Málaga', comunitat: 'Andalucía' },
  { ciutat: 'Granada', provincia: 'Granada', comunitat: 'Andalucía' },
  // País Basc
  { ciutat: 'Bilbao', provincia: 'Bizkaia', comunitat: 'País Vasco' },
  { ciutat: 'Sant Sebastià', provincia: 'Gipuzkoa', comunitat: 'País Vasco' },
  // Altres capitals
  { ciutat: 'Saragossa', provincia: 'Zaragoza', comunitat: 'Aragón' },
  { ciutat: 'Palma', provincia: 'Illes Balears', comunitat: 'Illes Balears' },
  { ciutat: 'Las Palmas de Gran Canaria', provincia: 'Las Palmas', comunitat: 'Canarias' },
  { ciutat: 'Múrcia', provincia: 'Murcia', comunitat: 'Región de Murcia' },
  { ciutat: 'Vigo', provincia: 'Pontevedra', comunitat: 'Galicia' },
  { ciutat: 'A Coruña', provincia: 'A Coruña', comunitat: 'Galicia' },
  { ciutat: 'Remot', provincia: 'Remot', comunitat: 'Remot' },
];

// Cerca jeràrquica: retorna suggeriments {label, nivell, valor} a partir d'un text
window.geoSuggest = function(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const geo = window.TALPOT_GEO;
  const ciutats = geo.filter(g => g.ciutat.toLowerCase().includes(q)).map(g => ({ label: g.ciutat + ' (ciudad)', nivell: 'ciutat', valor: g.ciutat }));
  const provincies = [...new Set(geo.filter(g => g.provincia.toLowerCase().includes(q)).map(g => g.provincia))].map(p => ({ label: p + ' (provincia)', nivell: 'provincia', valor: p }));
  const comunitats = [...new Set(geo.filter(g => g.comunitat.toLowerCase().includes(q)).map(g => g.comunitat))].map(c => ({ label: c + ' (comunidad)', nivell: 'comunitat', valor: c }));
  // Elimina duplicats i limita
  const tots = [...ciutats, ...provincies, ...comunitats];
  const vist = new Set();
  return tots.filter(t => { const k = t.nivell+t.valor; if (vist.has(k)) return false; vist.add(k); return true; }).slice(0, 8);
};

// Comprova si la ubicació d'un candidat (text lliure "Reus" o "Reus, Tarragona, Catalunya") coincideix amb un filtre {nivell, valor}
window.geoMatch = function(ubicacioCandidat, filtre) {
  if (!filtre || !ubicacioCandidat) return !filtre;
  const uc = ubicacioCandidat.toLowerCase();
  if (uc.includes(filtre.valor.toLowerCase())) return true;
  // Busca també per jerarquia: si el candidat ha posat una ciutat, comprova si pertany a la província/comunitat filtrada
  const geo = window.TALPOT_GEO;
  const match = geo.find(g => uc.includes(g.ciutat.toLowerCase()));
  if (!match) return false;
  if (filtre.nivell === 'provincia') return match.provincia.toLowerCase() === filtre.valor.toLowerCase();
  if (filtre.nivell === 'comunitat') return match.comunitat.toLowerCase() === filtre.valor.toLowerCase();
  return false;
};
