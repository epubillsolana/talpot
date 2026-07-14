// TALPOT — Dataset d'ofertes laborals reals per tipologia
// Basat en el mercat laboral espanyol/català: requisits i competències habituals per rol.
// kw = requisits tècnics (matching fort) · soft = competències (matching mitjà) · expMin = anys mínims
window.TALPOT_OFERTES = [
  // ═══ COMERCIAL I VENDES ═══
  { id:'c01', fam:'Comercial i Vendes', icon:'💼', titol:'Comercial B2B sector industrial', sector:'Indústria', ubicacio:'Barcelona', expMin:2, kw:['comercial','vend','venta','b2b','client','cartera','negocia'], soft:['comunicació','persuasió','orientació resultats','autonomia'] },
  { id:'c02', fam:'Comercial i Vendes', icon:'💼', titol:'Account Manager grans comptes', sector:'Serveis', ubicacio:'Barcelona', expMin:3, kw:['client','cartera','compte','account','fideli','comercial','crm'], soft:['relació','comunicació','planificació','empatia'] },
  { id:'c03', fam:'Comercial i Vendes', icon:'📈', titol:'Business Developer mercats internacionals', sector:'Tech', ubicacio:'Remot', expMin:2, kw:['negoci','business','captació','prospec','internacional','angl','export'], soft:['iniciativa','resiliència','idiomes','autonomia'] },
  { id:'c04', fam:'Comercial i Vendes', icon:'🏪', titol:'Dependent/a — responsable de botiga', sector:'Retail', ubicacio:'Girona', expMin:1, kw:['botiga','tienda','retail','vend','caixa','client','estoc'], soft:['atenció client','proactivitat','treball equip'] },
  { id:'c05', fam:'Comercial i Vendes', icon:'📞', titol:'Teleoperador/a comercial', sector:'Contact center', ubicacio:'Remot', expMin:0, kw:['telèfon','telefon','trucad','llamad','comercial','vend'], soft:['comunicació','resiliència','escolta activa'] },
  { id:'c06', fam:'Comercial i Vendes', icon:'🏠', titol:'Agent immobiliari', sector:'Immobiliària', ubicacio:'Barcelona', expMin:1, kw:['immobili','inmobili','pis','vivend','lloguer','vend','visita'], soft:['negociació','relació','autonomia','orientació resultats'] },

  // ═══ GESTIÓ I DIRECCIÓ ═══
  { id:'g01', fam:'Gestió', icon:'📊', titol:'Project Manager obres i serveis', sector:'Construcció', ubicacio:'Tarragona', expMin:3, kw:['project','projecte','obra','planific','coordin','terminis','pressupost'], soft:['lideratge','organització','resolució problemes','pressió'] },
  { id:'g02', fam:'Gestió', icon:'👔', titol:'Cap d\'equip producció torn tarda', sector:'Indústria', ubicacio:'Lleida', expMin:2, kw:['equip','producció','produccion','torn','supervis','planta','fabrica'], soft:['lideratge','comunicació','gestió conflictes'] },
  { id:'g03', fam:'Gestió', icon:'🏢', titol:'Office Manager', sector:'Serveis', ubicacio:'Barcelona', expMin:2, kw:['oficina','office','gestió','gestion','coordin','proveïdors','proveedores','agenda'], soft:['organització','multitasca','proactivitat'] },
  { id:'g04', fam:'Gestió', icon:'📋', titol:'Responsable d\'operacions', sector:'Logística', ubicacio:'Vallès', expMin:4, kw:['operacions','operaciones','processos','procesos','millora','optimitz','kpi'], soft:['lideratge','anàlisi','presa decisions'] },

  // ═══ TÈCNIC I INDÚSTRIA ═══
  { id:'t01', fam:'Tècnic i Indústria', icon:'🌱', titol:'Tècnic/a de medi ambient — gestió de residus', sector:'Gestió ambiental', ubicacio:'Catalunya', expMin:1, kw:['residu','mediambient','ambiental','contenidor','recollida','recicl','abocador'], soft:['rigor','planificació','treball camp'] },
  { id:'t02', fam:'Tècnic i Indústria', icon:'♻️', titol:'Tècnic/a de sostenibilitat i economia circular', sector:'Consultoria', ubicacio:'Barcelona', expMin:2, kw:['sosteni','circular','ambiental','petjada','huella','iso','auditoria'], soft:['anàlisi','comunicació','rigor'] },
  { id:'t03', fam:'Tècnic i Indústria', icon:'🛠️', titol:'Tècnic/a de manteniment industrial', sector:'Indústria', ubicacio:'Vallès', expMin:2, kw:['manteniment','mantenimiento','màquin','maquin','avaria','averia','preventiu','elèctric','mecànic'], soft:['resolució problemes','autonomia','rigor'] },
  { id:'t04', fam:'Tècnic i Indústria', icon:'⚡', titol:'Electricista instal·lador', sector:'Instal·lacions', ubicacio:'Girona', expMin:2, kw:['electric','elèctric','instal','quadre','cablejat','baixa tensió'], soft:['precisió','seguretat','autonomia'] },
  { id:'t05', fam:'Tècnic i Indústria', icon:'🔧', titol:'Operari/ària de producció', sector:'Indústria alimentària', ubicacio:'Osona', expMin:0, kw:['producció','produccion','línia','linea','operari','envasat','màquin'], soft:['treball equip','constància','atenció detall'] },
  { id:'t06', fam:'Tècnic i Indústria', icon:'🏗️', titol:'Encarregat/da d\'obra', sector:'Construcció', ubicacio:'Barcelona', expMin:4, kw:['obra','construcció','construccion','encarregat','planols','plànols','seguretat'], soft:['lideratge','planificació','resolució problemes'] },

  // ═══ LOGÍSTICA I TRANSPORT ═══
  { id:'l01', fam:'Logística', icon:'🚚', titol:'Responsable de logística i rutes', sector:'Distribució', ubicacio:'Baix Llobregat', expMin:3, kw:['logíst','logist','rutes','rutas','transport','flota','distribu'], soft:['organització','presa decisions','pressió'] },
  { id:'l02', fam:'Logística', icon:'📦', titol:'Gestor/a de magatzem', sector:'Retail', ubicacio:'Girona', expMin:1, kw:['magatzem','almacen','estoc','stock','inventari','carretó','carretill','sga'], soft:['organització','rigor','treball equip'] },
  { id:'l03', fam:'Logística', icon:'🚛', titol:'Conductor/a repartidor C+E', sector:'Transport', ubicacio:'Catalunya', expMin:1, kw:['conductor','carnet','repartiment','reparto','camió','camion','ruta'], soft:['puntualitat','autonomia','atenció client'] },
  { id:'l04', fam:'Logística', icon:'📊', titol:'Tècnic/a de planificació logística', sector:'E-commerce', ubicacio:'Barcelona', expMin:2, kw:['planific','logíst','previsió','prevision','excel','dades','estoc'], soft:['anàlisi','anticipació','rigor'] },

  // ═══ ATENCIÓ AL CLIENT ═══
  { id:'a01', fam:'Atenció al Client', icon:'🤝', titol:'Agent d\'atenció al client', sector:'Serveis', ubicacio:'Remot', expMin:0, kw:['atenció','atencion','client','suport','soporte','incidèn','inciden','consulta'], soft:['empatia','paciència','comunicació','resolució'] },
  { id:'a02', fam:'Atenció al Client', icon:'💬', titol:'Customer Success Manager', sector:'SaaS', ubicacio:'Barcelona', expMin:2, kw:['customer','client','èxit','onboarding','retenció','saas','crm'], soft:['empatia','proactivitat','comunicació','anàlisi'] },
  { id:'a03', fam:'Atenció al Client', icon:'🏨', titol:'Recepcionista d\'hotel', sector:'Hostaleria', ubicacio:'Costa Brava', expMin:1, kw:['recepció','recepcion','hotel','reserv','check','client','angl'], soft:['tracte','idiomes','multitasca','somriure'] },

  // ═══ ADMINISTRACIÓ I FINANCES ═══
  { id:'ad1', fam:'Administració i Finances', icon:'📋', titol:'Administratiu/va comptable', sector:'Gestoria', ubicacio:'Barcelona', expMin:1, kw:['factur','comptab','contab','assentament','asientos','impostos','impuestos','a3'], soft:['rigor','organització','confidencialitat'] },
  { id:'ad2', fam:'Administració i Finances', icon:'💰', titol:'Tècnic/a de nòmines', sector:'Assessoria', ubicacio:'Girona', expMin:2, kw:['nòmin','nomin','seguretat social','contractes','contratos','laboral'], soft:['rigor','actualització normativa','discreció'] },
  { id:'ad3', fam:'Administració i Finances', icon:'📊', titol:'Controller financer júnior', sector:'Indústria', ubicacio:'Vallès', expMin:2, kw:['controller','financ','pressupost','presupuesto','excel','tancament','cierre','anàlisi'], soft:['anàlisi','rigor','comunicació'] },
  { id:'ad4', fam:'Administració i Finances', icon:'📄', titol:'Auxiliar administratiu/va', sector:'Serveis', ubicacio:'Barcelona', expMin:0, kw:['admin','arxiu','archivo','documents','documentos','atenció','excel','oficina'], soft:['organització','polivalència','actitud'] },

  // ═══ MÀRQUETING I COMUNICACIÓ ═══
  { id:'m01', fam:'Màrqueting', icon:'📣', titol:'Tècnic/a de màrqueting digital', sector:'Agència', ubicacio:'Barcelona', expMin:2, kw:['màrqueting','marketing','digital','campanyes','campañas','seo','sem','ads','analytics'], soft:['creativitat','anàlisi','actualització'] },
  { id:'m02', fam:'Màrqueting', icon:'📱', titol:'Community Manager', sector:'Moda', ubicacio:'Remot', expMin:1, kw:['xarxes','redes','social','instagram','tiktok','contingut','contenido','comunitat'], soft:['creativitat','comunicació','tendències'] },
  { id:'m03', fam:'Màrqueting', icon:'✍️', titol:'Copywriter / Redactor/a de continguts', sector:'Agència', ubicacio:'Remot', expMin:1, kw:['redacc','copy','contingut','contenido','escriure','escribir','blog','seo'], soft:['creativitat','rigor lingüístic','adaptabilitat'] },
  { id:'m04', fam:'Màrqueting', icon:'🎨', titol:'Dissenyador/a gràfic', sector:'Estudi', ubicacio:'Barcelona', expMin:2, kw:['disseny','diseño','photoshop','illustrator','figma','branding','gràfic'], soft:['creativitat','detall','gestió temps'] },

  // ═══ DIGITAL / IT ═══
  { id:'d01', fam:'Digital i IT', icon:'💻', titol:'Desenvolupador/a web front-end', sector:'Startup', ubicacio:'Remot', expMin:2, kw:['web','javascript','html','css','react','front','desenvolup','desarroll'], soft:['resolució problemes','aprenentatge','treball equip'] },
  { id:'d02', fam:'Digital i IT', icon:'⚙️', titol:'Desenvolupador/a back-end', sector:'Tech', ubicacio:'Barcelona', expMin:3, kw:['backend','api','python','java','node','sql','base de dades','bases de datos'], soft:['anàlisi','rigor','autonomia'] },
  { id:'d03', fam:'Digital i IT', icon:'📊', titol:'Analista de dades júnior', sector:'Consultoria', ubicacio:'Barcelona', expMin:1, kw:['dades','datos','anàlisi','analisis','sql','excel','power bi','tableau','python'], soft:['anàlisi','curiositat','comunicació resultats'] },
  { id:'d04', fam:'Digital i IT', icon:'🖥️', titol:'Tècnic/a de suport IT (Helpdesk)', sector:'Serveis IT', ubicacio:'Girona', expMin:1, kw:['suport','soporte','helpdesk','incidèn','windows','xarxa','red','hardware'], soft:['paciència','comunicació','resolució'] },
  { id:'d05', fam:'Digital i IT', icon:'🔐', titol:'Administrador/a de sistemes', sector:'Empresa', ubicacio:'Barcelona', expMin:3, kw:['sistemes','sistemas','servidor','linux','xarxa','red','backup','cloud'], soft:['rigor','anticipació','autonomia'] },

  // ═══ RRHH ═══
  { id:'r01', fam:'RRHH', icon:'👥', titol:'Tècnic/a de selecció de personal', sector:'Consultoria RRHH', ubicacio:'Barcelona', expMin:1, kw:['selecció','seleccion','talent','entrevist','reclutament','reclutamiento','cv','linkedin'], soft:['empatia','criteri','comunicació','organització'] },
  { id:'r02', fam:'RRHH', icon:'🎓', titol:'Tècnic/a de formació i desenvolupament', sector:'Corporatiu', ubicacio:'Barcelona', expMin:2, kw:['formació','formacion','desenvolupament','desarrollo','pla','talent','onboarding'], soft:['comunicació','planificació','empatia'] },

  // ═══ HOSTALERIA I RESTAURACIÓ ═══
  { id:'h01', fam:'Hostaleria', icon:'👨‍🍳', titol:'Cuiner/a', sector:'Restauració', ubicacio:'Barcelona', expMin:2, kw:['cuina','cocina','cuiner','cocinero','partida','menú','servei'], soft:['pressió','treball equip','rigor'] },
  { id:'h02', fam:'Hostaleria', icon:'🍽️', titol:'Cambrer/a de sala', sector:'Restauració', ubicacio:'Costa Brava', expMin:1, kw:['cambrer','camarero','sala','servei','servicio','client','safata','bandeja'], soft:['tracte','agilitat','memòria','idiomes'] },
  { id:'h03', fam:'Hostaleria', icon:'🏨', titol:'Governant/a d\'hotel', sector:'Hostaleria', ubicacio:'Girona', expMin:3, kw:['pisos','habitacions','habitaciones','neteja','limpieza','hotel','equip'], soft:['organització','lideratge','detall'] },

  // ═══ SANITAT I CURES ═══
  { id:'s01', fam:'Sanitat i Cures', icon:'⚕️', titol:'Auxiliar d\'infermeria (TCAI)', sector:'Residència', ubicacio:'Barcelona', expMin:0, kw:['auxiliar','infermeria','enfermeria','pacient','cures','curas','higiene','residència','geriàtric'], soft:['empatia','paciència','vocació','treball equip'] },
  { id:'s02', fam:'Sanitat i Cures', icon:'🏥', titol:'Cuidador/a de gent gran a domicili', sector:'Serveis socials', ubicacio:'Catalunya', expMin:0, kw:['cuidador','gent gran','mayores','domicili','domicilio','acompanyament','higiene'], soft:['empatia','paciència','responsabilitat'] },

  // ═══ EDUCACIÓ ═══
  { id:'e01', fam:'Educació', icon:'📚', titol:'Monitor/a de lleure infantil', sector:'Educació lleure', ubicacio:'Barcelona', expMin:0, kw:['monitor','lleure','nens','niños','activitats','actividades','casal','colònies'], soft:['energia','creativitat','responsabilitat','empatia'] },
  { id:'e02', fam:'Educació', icon:'🗣️', titol:'Professor/a d\'anglès', sector:'Acadèmia', ubicacio:'Girona', expMin:1, kw:['professor','profesor','anglès','ingles','english','classes','clases','nivell'], soft:['comunicació','paciència','dinamisme'] },
];
// ═══ AMPLIACIÓ — més cobertura de l'univers laboral ═══
window.TALPOT_OFERTES.push(
  { id:'c07', fam:'Comercial i Vendes', icon:'🚗', titol:'Assessor/a comercial automoció', sector:'Automoció', ubicacio:'Barcelona', expMin:1, kw:['cotxe','coche','vehicle','automoc','vend','finança','prova'], soft:['tracte','persuasió','coneixement producte'] },
  { id:'c08', fam:'Comercial i Vendes', icon:'💊', titol:'Visitador/a mèdic', sector:'Farma', ubicacio:'Catalunya', expMin:2, kw:['farmà','farmac','mèdic','medico','visita','laboratori','producte'], soft:['comunicació','rigor científic','relació'] },
  { id:'c09', fam:'Comercial i Vendes', icon:'📱', titol:'Sales Development Representative (SDR)', sector:'SaaS', ubicacio:'Remot', expMin:0, kw:['sdr','prospec','leads','outbound','crm','trucad','demo'], soft:['resiliència','energia','organització'] },
  { id:'g05', fam:'Gestió', icon:'🏭', titol:'Director/a de planta', sector:'Indústria', ubicacio:'Tarragona', expMin:6, kw:['planta','producció','direcció','direccion','industrial','equips','kpi','lean'], soft:['lideratge','visió estratègica','presa decisions'] },
  { id:'g06', fam:'Gestió', icon:'🛒', titol:'Store Manager retail', sector:'Retail', ubicacio:'Barcelona', expMin:3, kw:['botiga','tienda','retail','equip','vendes','objectius','estoc'], soft:['lideratge','orientació client','anàlisi vendes'] },
  { id:'g07', fam:'Gestió', icon:'📦', titol:'Responsable de compres', sector:'Indústria', ubicacio:'Vallès', expMin:3, kw:['compres','compras','proveïdors','proveedores','negocia','costos','costes','aprovisiona'], soft:['negociació','anàlisi','rigor'] },
  { id:'t07', fam:'Tècnic i Indústria', icon:'❄️', titol:'Tècnic/a de climatització (HVAC)', sector:'Instal·lacions', ubicacio:'Barcelona', expMin:2, kw:['clima','hvac','aire','fred','frio','calefacc','instal','gas'], soft:['autonomia','tracte client','resolució'] },
  { id:'t08', fam:'Tècnic i Indústria', icon:'🔬', titol:'Tècnic/a de laboratori', sector:'Química', ubicacio:'Tarragona', expMin:1, kw:['laboratori','laboratorio','anàlisi','mostres','muestras','qualitat','assaig'], soft:['rigor','precisió','mètode'] },
  { id:'t09', fam:'Tècnic i Indústria', icon:'✅', titol:'Tècnic/a de qualitat', sector:'Alimentació', ubicacio:'Girona', expMin:2, kw:['qualitat','calidad','iso','auditoria','appcc','haccp','no conformitat'], soft:['rigor','anàlisi','comunicació'] },
  { id:'t10', fam:'Tècnic i Indústria', icon:'🛡️', titol:'Tècnic/a de prevenció de riscos (PRL)', sector:'Serveis', ubicacio:'Barcelona', expMin:2, kw:['prevenció','prevencion','riscos','riesgos','prl','seguretat','seguridad','formació'], soft:['rigor','comunicació','fermesa'] },
  { id:'t11', fam:'Tècnic i Indústria', icon:'🚜', titol:'Tècnic/a agrícola', sector:'Agroalimentari', ubicacio:'Lleida', expMin:1, kw:['agrícola','agricola','camp','campo','cultiu','cultivo','reg','fitosanitari'], soft:['treball camp','planificació','autonomia'] },
  { id:'t12', fam:'Tècnic i Indústria', icon:'☀️', titol:'Instal·lador/a de plaques solars', sector:'Energia', ubicacio:'Catalunya', expMin:1, kw:['solar','fotovolta','plaques','placas','instal','coberta','elèctric'], soft:['treball altura','equip','seguretat'] },
  { id:'l05', fam:'Logística', icon:'⚓', titol:'Tècnic/a de comerç internacional', sector:'Import/Export', ubicacio:'Barcelona', expMin:2, kw:['export','import','duana','aduana','incoterm','internacional','angl'], soft:['idiomes','rigor documental','gestió'] },
  { id:'l06', fam:'Logística', icon:'🏗️', titol:'Carretiller/a', sector:'Magatzem', ubicacio:'Baix Llobregat', expMin:1, kw:['carretó','carretill','toro','magatzem','almacen','càrrega','carga','palet'], soft:['seguretat','agilitat','equip'] },
  { id:'a04', fam:'Atenció al Client', icon:'✈️', titol:'Agent de viatges', sector:'Turisme', ubicacio:'Barcelona', expMin:1, kw:['viatge','viaje','reserv','turisme','turismo','amadeus','client'], soft:['tracte','organització','idiomes'] },
  { id:'a05', fam:'Atenció al Client', icon:'🏦', titol:'Gestor/a d\'oficina bancària', sector:'Banca', ubicacio:'Girona', expMin:2, kw:['banc','banco','caixa','client','producte financer','préstec','prestamo'], soft:['confiança','rigor','comercial'] },
  { id:'ad5', fam:'Administració i Finances', icon:'📈', titol:'Comptable sènior', sector:'Empresa', ubicacio:'Barcelona', expMin:4, kw:['comptab','contab','tancament','cierre','sage','impostos','impuestos','balanç'], soft:['rigor','autonomia','anàlisi'] },
  { id:'ad6', fam:'Administració i Finances', icon:'⚖️', titol:'Paralegal / Assistent jurídic', sector:'Despatx', ubicacio:'Barcelona', expMin:1, kw:['jurídic','juridico','legal','contractes','contratos','despatx','despacho','documenta'], soft:['rigor','confidencialitat','redacció'] },
  { id:'m05', fam:'Màrqueting', icon:'🎬', titol:'Editor/a de vídeo', sector:'Productora', ubicacio:'Remot', expMin:1, kw:['vídeo','video','edició','edicion','premiere','davinci','youtube','muntatge'], soft:['creativitat','ritme','detall'] },
  { id:'m06', fam:'Màrqueting', icon:'📊', titol:'Especialista en Paid Media', sector:'Agència', ubicacio:'Barcelona', expMin:2, kw:['ads','google ads','meta','ppc','campanyes','campañas','roas','pressupost'], soft:['anàlisi','optimització','actualització'] },
  { id:'d06', fam:'Digital i IT', icon:'📱', titol:'Desenvolupador/a d\'apps mòbils', sector:'Tech', ubicacio:'Remot', expMin:2, kw:['app','mòbil','movil','android','ios','flutter','react native'], soft:['resolució','aprenentatge','detall'] },
  { id:'d07', fam:'Digital i IT', icon:'🎮', titol:'QA Tester', sector:'Software', ubicacio:'Barcelona', expMin:1, kw:['qa','test','proves','pruebas','bug','regressió','automatitza'], soft:['detall','paciència','mètode'] },
  { id:'d08', fam:'Digital i IT', icon:'🧠', titol:'Especialista en IA / Prompt Engineer', sector:'Tech', ubicacio:'Remot', expMin:1, kw:['ia','ai','intel·ligència','inteligencia','prompt','llm','gpt','model'], soft:['curiositat','anàlisi','experimentació'] },
  { id:'d09', fam:'Digital i IT', icon:'📐', titol:'Dissenyador/a UX/UI', sector:'Producte', ubicacio:'Barcelona', expMin:2, kw:['ux','ui','figma','prototip','usuari','usuario','wireframe','usabilitat'], soft:['empatia usuari','detall','iteració'] },
  { id:'r03', fam:'RRHH', icon:'🧾', titol:'HR Generalist', sector:'Pime', ubicacio:'Vallès', expMin:3, kw:['rrhh','laboral','nòmin','selecció','clima','onboarding','conveni'], soft:['polivalència','empatia','discreció'] },
  { id:'h04', fam:'Hostaleria', icon:'☕', titol:'Barista / Encarregat/da de cafeteria', sector:'Restauració', ubicacio:'Barcelona', expMin:1, kw:['cafè','cafe','barista','cafeteria','client','caixa','torn'], soft:['agilitat','tracte','constància'] },
  { id:'h05', fam:'Hostaleria', icon:'🎉', titol:'Coordinador/a d\'esdeveniments', sector:'Events', ubicacio:'Barcelona', expMin:2, kw:['esdeveniment','evento','event','coordin','proveïdors','muntatge','client'], soft:['organització','pressió','improvisació'] },
  { id:'s03', fam:'Sanitat i Cures', icon:'💉', titol:'Infermer/a', sector:'Clínica', ubicacio:'Barcelona', expMin:1, kw:['infermer','enfermer','pacient','cures','medicació','medicacion','clínic'], soft:['empatia','rigor','pressió'] },
  { id:'s04', fam:'Sanitat i Cures', icon:'🦷', titol:'Higienista dental', sector:'Clínica dental', ubicacio:'Girona', expMin:1, kw:['dental','higien','pacient','clínica','profilaxi','radiograf'], soft:['tracte','precisió','ordre'] },
  { id:'s05', fam:'Sanitat i Cures', icon:'🧠', titol:'Psicòleg/òloga', sector:'Salut', ubicacio:'Barcelona', expMin:2, kw:['psicolog','pacient','teràpia','terapia','sessions','avaluació','col·legiat'], soft:['escolta','empatia','ètica'] },
  { id:'e03', fam:'Educació', icon:'👶', titol:'Educador/a infantil', sector:'Escola bressol', ubicacio:'Barcelona', expMin:1, kw:['infantil','bressol','guarderia','nens','niños','educació','desenvolupament'], soft:['paciència','vocació','creativitat'] },
  { id:'e04', fam:'Educació', icon:'💪', titol:'Entrenador/a personal', sector:'Fitness', ubicacio:'Barcelona', expMin:1, kw:['entrena','fitness','gimnàs','gimnasio','esport','deporte','rutines','client'], soft:['motivació','energia','constància'] },
  { id:'f01', fam:'Finances i Assegurances', icon:'🛡️', titol:'Agent d\'assegurances', sector:'Assegurances', ubicacio:'Catalunya', expMin:1, kw:['asseguran','seguro','pòlissa','poliza','client','sinistre','cartera'], soft:['confiança','comercial','constància'] },
  { id:'f02', fam:'Finances i Assegurances', icon:'📊', titol:'Analista financer', sector:'Corporate', ubicacio:'Barcelona', expMin:2, kw:['financ','anàlisi','analisis','excel','model','valoració','inversió'], soft:['anàlisi','rigor','síntesi'] },
  { id:'n01', fam:'Neteja i Serveis', icon:'🧹', titol:'Personal de neteja', sector:'Serveis', ubicacio:'Barcelona', expMin:0, kw:['neteja','limpieza','oficines','manteniment','higiene'], soft:['constància','autonomia','discreció'] },
  { id:'n02', fam:'Neteja i Serveis', icon:'🔒', titol:'Vigilant de seguretat', sector:'Seguretat', ubicacio:'Catalunya', expMin:0, kw:['vigilant','seguretat','seguridad','control','accés','acceso','rondes','tip'], soft:['serenitat','observació','responsabilitat'] }
);
