// Deck combinado: Piensa en producto · Craft · Shippea rápido
// Motor reusado del deck de Colubsidio (escenas + beats).

// --- Card que se humaniza por capas (demo anti-slop) ---
function appCard(level) {
  const kicker = `<span class="demo-kicker">ROOMIEMATCH</span>`;
  let stack;
  if (level === 0) {
    stack = `${kicker}<h3 class="demo-title">Encuentra tu roommate ideal</h3><p class="demo-copy">La mejor plataforma para conectar con personas increíbles y vivir la experiencia perfecta.</p>`;
  } else if (level === 1) {
    stack = `${kicker}<h3 class="demo-title">Encuentra con quién vivir este semestre</h3><p class="moment" style="margin-top:10px">Te mudas en tres semanas y no conoces a nadie.</p>`;
  } else {
    stack = `${kicker}<p class="num">92% <small>compatibilidad</small></p><p style="color:var(--ink);font-size:16px;margin:2px 0 0;line-height:1.3">Ana comparte tus horarios y tu presupuesto</p><p class="moment" style="margin-top:6px">A 1.2 km de tu campus.</p>`;
  }
  let action;
  if (level === 0) action = `<span style="color:#6f6f76;font-size:14px">Registrarse ›</span>`;
  else if (level < 4) action = `<span style="color:var(--muted);font-size:14px">Ver su perfil ›</span>`;
  else action = `<div style="display:flex;gap:10px;align-items:center"><button class="demo-action" type="button">Ver su perfil</button><button class="demo-action quiet" type="button">Saltar</button></div>`;
  const pad = level >= 3 ? 34 : 22;
  const gap = level >= 3 ? 16 : 6;
  return `<article class="demo-shell tcard-hero${level === 0 ? " slop" : ""}"><div class="demo-top"><div class="dots"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div><span>roomiematch</span></div><div class="demo-body" style="padding:${pad}px"><div class="group" style="gap:${gap}px">${stack}</div><div style="margin-top:${level >= 3 ? 24 : 16}px">${action}</div></div></article>`;
}

const transformMoves = [
  { step: "Paso 0 · salida de IA", move: "Correcta. Y sin nadie adentro.", sub: "Todo del mismo tamaño. Una promesa que sirve para cualquier app.", cls: "" },
  { step: "Paso 1 · contenido", move: "Primero, el momento.", sub: "De “roommate ideal” a “con quién vivir este semestre”. Sin agregar features.", cls: "// solo copy" },
  { step: "Paso 2 · jerarquía", move: "El dato manda.", sub: "La compatibilidad es lo que importa; el resto baja de tono.", cls: "text-3xl · tabular-nums · text-sm" },
  { step: "Paso 3 · espacio", move: "El aire agrupa.", sub: "Más espacio entre grupos que dentro. La proximidad crea significado.", cls: "p-8 · space-y-2 · gap-6" },
  { step: "Paso 4 · estados", move: "Un botón que se siente botón.", sub: "hover, active y focus-visible. Que se entienda qué hacer sin pensarlo.", cls: "hover · active:scale-98 · focus-visible" },
];

const sprintSteps = [
  { n: "1", h: "Map — Entiende el reto", p: "Mapea el problema y elige un objetivo. ¿Dónde arriesgas? Una meta, no diez." },
  { n: "2", h: "Sketch — Genera soluciones", p: "Cada quien dibuja su idea en papel. Cantidad primero, sin juzgar todavía." },
  { n: "3", h: "Decide — Elige y storyboard", p: "Vota. Elige una. Arma el guion pantalla por pantalla antes de tocar código." },
  { n: "4", h: "Prototype — Construye una fachada", p: "No el producto: la ilusión del producto. Lo justo para que se pueda probar." },
  { n: "5", h: "Test — Valida con reales", p: "5 usuarios bastan para ver los problemas. Observa; no defiendas tu demo." },
];

const scenes = [
  // ===== COLD OPEN =====
  {
    label: "Portada",
    beats: 1,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">Charla · Hackathon</p><h1 class="reveal" data-reveal="0"><span style="color:var(--faint)">des-</span>IA<span style="color:var(--faint)">-izar</span></h1><h1 class="reveal" data-reveal="1">productos digitales</h1></div>`,
  },
  {
    label: "El test",
    beats: 1,
    content: () => `<div class="content media left"><div class="copy"><p class="part">El test más honesto</p><h2 class="reveal" data-reveal="0">Si tienes que explicarlo, <span style="color:var(--faint)">no funciona</span>.</h2><p class="reveal" data-reveal="1" style="margin-top:14px">La mejor tecnología del mundo no sirve si quien la ve no la entiende.</p></div><figure class="reveal" data-reveal="0"><img src="img/sv-focusgroup.png" width="1231" height="698" alt="Persona sin entender un producto durante una demo" /></figure></div>`,
  },
  {
    label: "Quién soy",
    beats: 1,
    content: () => `<div class="content media portrait left"><div class="copy"><p class="part">Quién soy</p><h2>Shiara Arauzo</h2><p class="role">Design engineer &amp; builder</p><p class="reveal" data-reveal="0">Soy design engineer: <span class="accent">diseño y programo el mismo producto</span>. Uso IA para ir rápido —pero el criterio (para quién, qué promete, cómo se siente) lo pongo a mano. De eso va esta charla.</p><p class="stat reveal" data-reveal="1"><b>93</b><span>productos shippeados · <span class="accent">@shiarauzo</span></span></p></div><figure><img src="img/shiara.jpg" width="400" height="400" alt="Foto de Shiara Arauzo" /></figure></div>`,
  },
  // ===== TESIS PUENTE =====
  {
    label: "Tesis",
    beats: 1,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">La tesis</p><h1 class="reveal" data-reveal="0">Con IA, construir productos toma pocas horas.</h1><h1 class="reveal" data-reveal="1" style="color:var(--faint)">Pero casi todos salen iguales.</h1></div>`,
  },
  {
    label: "Campana",
    beats: 1,
    content: () => `<div class="content"><p class="part">La IA aprende de todo internet</p><h2>Y te devuelve el promedio.</h2><div class="bell"><svg viewBox="0 0 760 300" role="img" aria-label="Campana de Gauss: la mayoría de diseños generados por IA caen en el promedio genérico; el buen diseño es raro, en los extremos"><line x1="40" y1="248" x2="720" y2="248" stroke="#232329" stroke-width="1" /><path d="M40,248 C210,248 300,80 380,80 C460,80 550,248 720,248 Z" fill="#ffffff" fill-opacity="0.05" /><path d="M40,248 C210,248 300,80 380,80 C460,80 550,248 720,248" fill="none" stroke="#9a9aa3" stroke-width="2" /><line x1="380" y1="92" x2="380" y2="248" stroke="#6f6f79" stroke-width="1" stroke-dasharray="3 4" /><text x="380" y="124" text-anchor="middle" fill="#f4f4f5" font-size="16" font-family="Geist, sans-serif">la mayoría de diseños de IA</text><text x="380" y="272" text-anchor="middle" fill="#9a9aa3" font-size="12" letter-spacing="1.5" font-family="Geist Mono, monospace">EL PROMEDIO · LO QUE YA ESTÁ EN INTERNET</text><circle cx="666" cy="232" r="5" fill="#f4f4f5" /><text x="666" y="214" text-anchor="middle" fill="#f4f4f5" font-size="14" font-family="Geist, sans-serif">criterio</text></svg></div><p class="reveal" data-reveal="1" style="margin-top:8px;max-width:60ch">La mayoría de lo que genera es lo que ya viste mil veces. El promedio no es buen diseño.</p></div>`,
  },
  {
    label: "Toque humano",
    beats: 1,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">Por eso</p><h1 class="reveal" data-reveal="0">El toque humano lo pones tú.</h1><p class="reveal" data-reveal="1" style="margin-top:16px">Y no se improvisa: <span class="accent">investiga a tu usuario</span> y <span class="accent">diseña con intención</span>.</p></div>`,
  },
  {
    label: "Shippear",
    beats: 0,
    content: () => `<div class="content"><div class="wiki"><div><h2>Shippear</h2><p class="from">De Wikipedia, la enciclopedia libre</p><p><strong>Shippear</strong> (del inglés <em>to ship</em>, «enviar») es el <span class="link">arte</span> de construir algo y <span class="link">mostrárselo al mundo</span>. No basta con crearlo: hay que <span class="link">lanzarlo</span> para que exista.</p><p>Lo contrario es dejar tu proyecto en el laptop, donde nadie lo ve.</p></div><aside><div class="head">Shippear</div><div class="body"><div><strong>Tipo</strong> · arte de construir</div><div><strong>Sinónimos</strong> · lanzar, publicar</div><div><strong>Opuesto</strong> · quedarse en el laptop</div><div><strong>En hackathon</strong> · obligatorio</div></div></aside></div></div>`,
  },
  // ===== PARTE 01 · PIENSA EN PRODUCTO =====
  {
    label: "Parte 01",
    beats: 0,
    content: () => `<div class="content"><p class="part">Parte 01</p><h1 class="section-title">Piensa en producto</h1><div class="rule-line"></div><p class="section-sub">Antes de tocar el teclado.</p></div>`,
  },
  {
    label: "4 preguntas",
    beats: 1,
    content: () => `<div class="content"><p class="part">Antes de tocar el teclado</p><h2>Pensar en producto es responder cuatro preguntas.</h2><div class="list num" style="margin-top:22px"><p><span class="em">Para quién</span> construyes — una persona concreta, no «todos».</p><p><span class="em">Qué problema</span> le resuelves — el dolor real, no tu solución.</p><p><span class="em">Por qué tú</span> — mejor que lo que ya usa hoy.</p><p><span class="em">Qué es lo mínimo</span> para probar que funciona.</p></div></div>`,
  },
  {
    label: "Problema real",
    beats: 1,
    content: () => `<div class="content narrow" style="text-align:center"><p class="quote" style="margin:0 auto;color:var(--faint)">No estás construyendo features.</p><div class="rule-line" style="margin:24px auto"></div><p class="quote reveal" data-reveal="1" style="margin:0 auto">Estás resolviendo <span class="accent">un problema</span>.</p></div>`,
  },
  {
    label: "Usuario",
    beats: 1,
    content: () => `<div class="content"><p class="part">1 oración</p><h1 class="section-title" style="font-size:clamp(2.4rem,6.5vw,5rem)">¿Quién es tu usuario?</h1><p class="reveal" data-reveal="1" style="margin-top:26px;color:var(--muted)">Ej: «un estudiante de primer año que se muda y no conoce a nadie».</p></div>`,
  },
  {
    label: "Redactar usuario",
    beats: 1,
    content: () => `<div class="content"><p class="part">Sé específico</p><h2>Cómo redactar a tu usuario</h2><p class="mono soft" style="margin:16px 0 0;font-size:15px">«Un [persona concreta] que quiere [objetivo] pero [obstáculo].»</p><div class="dodont reveal" data-reveal="1"><div class="bad"><p class="h">Don’t</p><p>«Todos los que usan apps» · «la gente joven» · «usuarios»</p></div><div class="good"><p class="h">Do</p><p>Un <strong>estudiante de primer año</strong> que se muda y no conoce a nadie.</p><p>Una <strong>diseñadora freelance</strong> que pierde horas cotizando a mano.</p><p>Un <strong>dueño de cafetería</strong> que pierde pedidos anotados en papel.</p></div></div><p class="soft" style="margin-top:18px;font-size:15px">Si tu usuario es «todos», no es nadie. Ponle nombre, contexto y un mal día.</p></div>`,
  },
  {
    label: "Heavy vs light",
    beats: 1,
    content: () => `<div class="content"><p class="part">No todos pesan igual</p><h2>Heavy user y light user</h2><div class="two"><div style="border-top:2px solid var(--ink);padding-top:14px"><h3>Heavy user</h3><p style="margin-top:8px">Vive el problema a diario, lo usaría siempre y te perdona que esté feo con tal de que funcione. Te da el feedback más honesto.</p><p class="soft" style="margin-top:12px;font-size:15px">Es <span class="accent">Ana</span>: se muda este semestre y necesita roommate ya.</p></div><div style="border-top:2px solid var(--line);padding-top:14px"><h3 style="color:var(--muted)">Light user</h3><p style="margin-top:8px">Le incomoda pero no le arde. Entra de vez en cuando y valora la simplicidad. Si no se entiende al instante, se va.</p><p class="soft" style="margin-top:12px;font-size:15px">Es <span class="accent">Leo</span>: ya tiene depa y solo curiosea.</p></div></div><p class="reveal" data-reveal="1" style="margin-top:22px;color:var(--ink)">Diseña tu demo para <span class="accent">Ana</span>. Si resuelves su dolor, Leo llega solo.</p></div>`,
  },
  {
    label: "Competencia",
    beats: 1,
    content: () => `<div class="content"><p class="part">El miedo más común</p><h2>¿Y si ya hay competencia?</h2><p style="margin-top:14px;max-width:60ch">Que exista prueba que el problema es real. No tienes que ser el primero: <span class="accent">el distinto en algo concreto</span>.</p><div class="list reveal" data-reveal="1" style="margin-top:18px"><p><span class="em">Apunta a un nicho</span> — una universidad, un rol específico.</p><p><span class="em">Haz una cosa 10× mejor</span>, no diez cosas un poco mejores.</p><p><span class="em">Menos fricción</span> que las alternativas.</p><p><span class="em">Un ángulo</span> que los grandes ignoran.</p></div></div>`,
  },
  {
    label: "Jueces",
    beats: 1,
    content: () => `<div class="content"><p class="part">Haz tu tarea</p><h2>Tus jueces son tus usuarios.</h2><div class="list" style="margin-top:18px"><p>Lee <span class="em">las bases y el landing</span>: ahí dice qué se premia de verdad.</p><p>Estudia al <span class="em">jurado y los mentores</span>: sus perfiles dicen qué los impresiona.</p><p>Mira los <span class="em">tracks y sponsors</span>: ahí están los problemas que quieren ver resueltos.</p></div><p class="reveal" data-reveal="1" style="margin-top:20px;color:var(--ink)">El juez tiene un contexto y un mal día, igual que tu usuario. Diséñale la demo a él.</p></div>`,
  },
  // ===== PARTE 02 · EL DESIGN SPRINT =====
  {
    label: "Parte 02",
    beats: 0,
    content: () => `<div class="content"><p class="part">Parte 02</p><h1 class="section-title">El Design Sprint</h1><div class="rule-line"></div><p class="section-sub">Nació en Google Ventures para construir y validar en días, no meses.</p></div>`,
  },
  {
    label: "Seguir o pivotear",
    beats: 1,
    content: () => `<div class="content"><p class="part">Para qué sirve un sprint</p><h2>Te dice si seguir o pivotear — antes de gastar semanas.</h2><div class="two"><div style="border-top:2px solid var(--ink);padding-top:14px"><h3>Savioke</h3><p style="margin-top:8px">Probó un robot de hotel en un sprint. Funcionó, la gente lo amó. <span class="accent">Siguió.</span></p></div><div style="border-top:2px solid var(--line);padding-top:14px"><h3>Slack</h3><p style="margin-top:8px">Un sprint reveló que nuevos usuarios no entendían el producto. <span class="accent">Cambió el onboarding.</span></p></div></div><p class="reveal" data-reveal="1" style="margin-top:22px;color:var(--ink)">Barato equivocarte en papel. Caro equivocarte en producción.</p></div>`,
  },
  {
    label: "RoomieMatch",
    beats: 0,
    content: () => `<div class="content"><p class="part">El ejemplo que seguimos</p><h1 class="section-title" style="font-size:clamp(2.4rem,6vw,4.6rem)">RoomieMatch</h1><p class="section-sub" style="max-width:52ch">Una app para que estudiantes encuentren roommate por compatibilidad real —no solo precio y ubicación— dentro de su universidad. Usuaria: <span class="accent">Ana</span>.</p></div>`,
  },
  {
    label: "El sprint en 5",
    beats: 5,
    content: (beat) => {
      const rows = sprintSteps.map((s, i) => `<div class="step${i <= beat ? " on" : ""}"><span class="n">${s.n}</span><div><h3>${s.h}</h3><p>${s.p}</p></div></div>`).join("");
      return `<div class="content"><p class="part">48 horas</p><h2>El sprint, paso a paso.</h2><div class="stepper">${rows}</div></div>`;
    },
  },
  {
    label: "Fachada",
    beats: 1,
    content: () => `<div class="content media"><div class="copy"><p class="part">Prototype · paso 4</p><h2 class="reveal" data-reveal="0">Construye una fachada, no el edificio.</h2><p class="reveal" data-reveal="1" style="margin-top:14px">Lo mínimo para que Ana sienta que es real y te diga la verdad. Nadie prueba tu backend; prueban lo que ven.</p></div><figure class="reveal" data-reveal="0"><img src="img/estados-app.jpg" width="1024" height="682" alt="Pantalla de una app móvil usada como prototipo" loading="lazy" /></figure></div>`,
  },
  {
    label: "Pirámide",
    beats: 1,
    content: () => `<div class="content"><p class="part">Qué construir primero</p><h2>La pirámide de features.</h2><div class="pyramid"><div class="tier core"><span class="lbl"><strong>Core</strong> · sin esto no hay demo</span></div><div class="tier"><span class="lbl">Debería tener · suma pero no es vital</span></div><div class="tier"><span class="lbl">Nice to have · si sobra tiempo</span></div><div class="tier" style="opacity:.5"><span class="lbl">El sueño · para después del hackathon</span></div></div><p class="reveal" data-reveal="1" style="margin-top:20px;color:var(--ink)">Shippea el <span class="accent">core</span>. El sueño no cabe en 48 horas.</p></div>`,
  },
  // ===== PARTE 03 · QUE SE ENTIENDA SOLA (craft) =====
  {
    label: "Parte 03",
    beats: 0,
    content: () => `<div class="content"><p class="part">Parte 03</p><h1 class="section-title">Que se entienda sola</h1><div class="rule-line"></div><p class="section-sub">Ya construiste algo. Ahora el detalle es lo que convence al juez.</p></div>`,
  },
  {
    label: "Precisión",
    beats: 3,
    content: () => `<div class="content split"><div class="copy-stack"><p class="part reveal" data-reveal="0">La IA parte de un promedio</p><h2 class="reveal" data-reveal="0">El carácter está en el detalle.</h2><p class="reveal" data-reveal="1">16&nbsp;px para leer. 44&nbsp;px para tocar.</p><p class="reveal" data-reveal="2">Menos de 200&nbsp;ms para responder.</p><h2 class="reveal" data-reveal="3" style="font-weight:500">Menos. Mejor.</h2></div><aside class="rule reveal" data-reveal="2"><span class="number">4</span><h3>contenido · jerarquía · espacio · movimiento</h3></aside></div>`,
  },
  {
    label: "Transformar",
    beats: 5,
    content: (beat) => {
      if (beat === 5) {
        return `<div class="content"><p class="part">Slop → humano</p><h2>No agregamos features. Elegimos.</h2><div class="compare" style="margin-top:26px"><div><p class="compare-label">Salida de IA</p>${appCard(0)}</div><div><p class="compare-label after">Humano</p>${appCard(4)}</div></div></div>`;
      }
      const m = transformMoves[beat];
      return `<div class="content"><p class="part">Slop → humano · en vivo</p><div class="transform">${appCard(beat)}<div class="tcaption"><span class="tstep">${m.step}</span><h2 class="tmove">${m.move}</h2><p class="tsub">${m.sub}</p>${m.cls ? `<code class="tclasses">${m.cls}</code>` : ""}</div></div></div>`;
    },
  },
  {
    label: "Estados",
    beats: 1,
    content: () => `<div class="content"><p class="part">Contenido antes que estética</p><h2>La IA maqueta el happy path. El producto vive en sus estados.</h2><div class="states-grid"><article class="state-card"><span class="tag">Vacío</span><p>Aún no hay matches. Da el primer paso.</p></article><article class="state-card"><span class="tag">Cargando</span><div class="skel"></div><div class="skel" style="width:70%"></div><div class="skel" style="width:45%"></div></article><article class="state-card warn"><span class="tag">Error</span><p>No pudimos cargar perfiles. Reintenta.</p></article><article class="state-card"><span class="tag">Éxito</span><p class="ok">✓ 3 roommates compatibles.</p></article><article class="state-card"><span class="tag">Deshabilitado</span><p style="opacity:.5">Completa tu perfil para continuar.</p></article></div><p class="mono soft reveal" data-reveal="1" style="margin-top:24px;font-size:14px">Pixel-perfect del happy path = 20% del trabajo real.</p></div>`,
  },
  {
    label: "Affordances",
    beats: 0,
    content: () => `<div class="content"><p class="part">Affordances + errores útiles</p><h2>Si parece botón, debe actuar como botón.</h2><div class="two"><div class="snippet">.button {
  cursor: pointer;
  transition: transform 150ms ease;
}
.button<span class="k">:hover</span>         { opacity: .9; }
.button<span class="k">:active</span>        { transform: scale(.98); }
.button<span class="k">:focus-visible</span> { outline: 2px solid; }
.button<span class="k">:disabled</span>      { opacity: .5; cursor: not-allowed; }</div><div><div class="err-row bad"><span class="tag">✕ Genérico</span><h3>Something went wrong</h3></div><div class="err-row after" style="margin-top:14px"><span class="tag">✓ Defensive UI</span><h3>Ese correo ya está registrado. ¿Quieres iniciar sesión?</h3></div><p class="soft" style="margin-top:16px;font-size:15px">Cada error es una conversación con alguien frustrado. Di qué pasó <strong style="color:var(--ink);font-weight:600">y</strong> qué hacer.</p></div></div></div>`,
  },
  {
    label: "Tipografía",
    beats: 2,
    content: () => `<div class="content"><p class="part">Jerarquía</p><h2>El texto decide.</h2><div class="lab"><article class="lab-card"><span class="lab-label">Salida rápida</span><h3>Una plataforma diseñada para quienes buscan la mejor experiencia de convivencia universitaria.</h3></article><article class="lab-card after reveal" data-reveal="1"><span class="lab-label">Tuneado</span><h3>Vive con alguien que ya comparte tus horarios.</h3><div class="range-row"><span>Ancho</span><input id="typeRange" aria-label="Cambiar ancho del título" type="range" min="200" max="430" value="310" /><output id="typeValue">310 px</output></div></article></div><p class="mono soft reveal" data-reveal="2" style="margin-top:22px;font-size:14px">text-base · leading-6 · text-wrap: balance</p></div>`,
  },
  {
    label: "Espacio",
    beats: 0,
    content: () => `<div class="content"><p class="part">Ritmo</p><h2>El espacio agrupa.</h2><div class="token-lab" id="tokenLab"><article class="token-card"><span class="demo-kicker">COMPATIBILIDAD</span><h3>92%</h3><p>Ana · a 1.2 km de tu campus</p><button class="demo-action quiet" type="button">Ver perfil</button></article><div class="control-block"><label class="control-row">Radio <input id="radiusRange" aria-label="Cambiar radio" type="range" min="8" max="28" value="18" /><output id="radiusValue">18 px</output></label><label class="control-row">Padding <input id="paddingRange" aria-label="Cambiar espacio interior" type="range" min="14" max="38" value="26" /><output id="paddingValue">26 px</output></label><p class="mono soft" style="font-size:14px">gap-2 · gap-4 · gap-8 · más aire entre grupos que dentro</p></div></div></div>`,
  },
  {
    label: "Movimiento",
    beats: 2,
    content: () => `<div class="content"><p class="part">Movimiento · performance = UX</p><h2>Mueve solo lo que cambia algo.</h2><div class="inventory-demo"><article class="count-card"><span class="demo-kicker">NUEVO MATCH</span><div class="count">✓</div><button class="demo-action" id="countButton" type="button">Enviar solicitud</button><div class="confirmation" id="confirmation">✓ Enviada. Te avisamos cuando responda.</div></article><div class="micro-list"><div class="micro-item"><strong>Orientar</strong><span>hacia dónde va la atención</span></div><div class="micro-item"><strong>Confirmar</strong><span>que algo pasó, al instante</span></div><div class="micro-item"><strong>Optimistic UI</strong><span>muestra el resultado, confirma después</span></div><p class="mono soft reveal" data-reveal="2" style="font-size:14px">duration-150 · transition-transform</p></div></div></div>`,
  },
  {
    label: "Menos es más",
    beats: 1,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">El corte que duele</p><h1 class="reveal" data-reveal="0">Quita hasta que duela.</h1><h1 class="reveal" data-reveal="1" style="color:var(--faint)">Luego quita uno más.</h1><p class="reveal" data-reveal="1" style="margin-top:8px">Si todo grita, nada se escucha.</p></div>`,
  },
  {
    label: "Auditar",
    beats: 2,
    content: () => `<div class="content"><p class="part">Un prompt para el equipo</p><div class="prompt"><span class="mono">AUDITORÍA DE TASTE</span><h2>Haz que la IA revise.</h2><p>“Audita momento, promesa, jerarquía, copy, espacio y movimiento. No agregues features. Devuelve tres cambios con clases de Tailwind.”</p></div><div class="checklist"><article class="check reveal" data-reveal="0"><span>MOMENTO</span><p>¿Para quién y cuándo?</p></article><article class="check reveal" data-reveal="1"><span>PROMESA</span><p>¿Se entiende sola?</p></article><article class="check reveal" data-reveal="2"><span>DETALLE</span><p>Corrige uno.</p></article></div></div>`,
  },
  // ===== PARTE 04 · LANZA RÁPIDO =====
  {
    label: "Parte 04",
    beats: 0,
    content: () => `<div class="content"><p class="part">Parte 04</p><h1 class="section-title">Lanza rápido</h1><div class="rule-line"></div><p class="section-sub">Hecho, mostrado y entendido — hoy.</p></div>`,
  },
  {
    label: "Hecho > perfecto",
    beats: 1,
    content: () => `<div class="content narrow" style="text-align:center"><p class="quote" style="margin:0 auto"><span class="dim" style="color:var(--faint)">Hecho</span> es mejor</p><p class="quote reveal" data-reveal="1" style="margin:6px auto 0">que <span class="accent">perfecto</span>.</p><p class="reveal" data-reveal="1" style="margin-top:24px;color:var(--muted)">Un demo real le gana a una idea perfecta que nadie vio.</p></div>`,
  },
  {
    label: "Priorizar 24h",
    beats: 1,
    content: () => `<div class="content"><p class="part">Shippea el core, no el sueño</p><h2>Priorizar cuando quedan 24 horas.</h2><div class="list reveal" data-reveal="1" style="margin-top:18px"><p><span class="em">Corta el alcance</span>, no la calidad de lo que queda.</p><p><span class="em">Una cosa que funcione</span> &gt; tres a medias.</p><p><span class="em">Fake it</span> lo que no da tiempo (datos quemados están bien).</p><p><span class="em">Deja tiempo</span> para la demo y el pitch: es la mitad del juego.</p></div></div>`,
  },
  {
    label: "Errores reales",
    beats: 1,
    content: () => `<div class="content"><p class="part">Aprende de los caros</p><h2>Errores reales de hackathon.</h2><div class="list reveal" data-reveal="1" style="margin-top:18px"><p>Construir <span class="em">3 días sin mostrarle a nadie</span> — y descubrir tarde que no se entendía.</p><p>Enamorarse del <span class="em">feature difícil</span> y no terminar el core.</p><p>Pulir el <span class="em">logo</span> antes de que la demo funcione.</p><p>Llegar al pitch <span class="em">sin haber ensayado</span> la demo en vivo.</p></div></div>`,
  },
  {
    label: "Herramientas",
    beats: 0,
    content: () => `<div class="content"><p class="part">Para tu sprint</p><h2>Herramientas para shippear rápido.</h2><div class="tools"><article class="tool"><span class="cat">Diseño</span><p>Figma · v0 · Excalidraw para el storyboard.</p></article><article class="tool"><span class="cat">Build</span><p>Next.js · Vite · Tailwind · shadcn/ui.</p></article><article class="tool"><span class="cat">Backend</span><p>Supabase · Clerk (auth) · Neon.</p></article><article class="tool"><span class="cat">IA</span><p>Claude Code · Cursor para acelerar sin perder criterio.</p></article><article class="tool"><span class="cat">Deploy</span><p>Vercel · un push y está en vivo.</p></article><article class="tool"><span class="cat">Demo</span><p>Loom para grabar el respaldo por si el wifi falla.</p></article></div></div>`,
  },
  // ===== CIERRE =====
  {
    label: "Cierre",
    beats: 2,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">Para volver al equipo</p><h1 class="reveal" data-reveal="0">Que se note que alguien eligió.</h1><h1 class="reveal" data-reveal="1" style="color:var(--faint)">Y si tienes que explicarlo,</h1><h1 class="reveal" data-reveal="2">no funciona.</h1></div>`,
  },
  {
    label: "CTA",
    beats: 1,
    content: () => `<div class="content narrow opening"><p class="part reveal" data-reveal="0">Ahora tú</p><h1 class="reveal" data-reveal="0">¿Qué vas a construir?</h1><p class="reveal" data-reveal="1" style="margin-top:8px">Piensa en producto. Constrúyelo con criterio. Shippéalo hoy.</p><p class="stat reveal" data-reveal="1" style="margin-top:22px"><span class="accent">@shiarauzo</span><span>· gracias</span></p></div>`,
  },
];

const params = new URLSearchParams(window.location.search);
const requestedScene = Number(params.get("scene"));
const requestedBeat = Number(params.get("beat"));
let sceneIndex = Number.isInteger(requestedScene) && requestedScene >= 0 && requestedScene < scenes.length ? requestedScene : 0;
let beat = Number.isInteger(requestedBeat) && requestedBeat >= 0 && requestedBeat <= scenes[sceneIndex].beats ? requestedBeat : 0;
const deck = document.querySelector("#deck");
const help = document.querySelector("#helpDialog");
const totalSteps = scenes.reduce((n, s) => n + s.beats + 1, 0);
const progressFill = document.querySelector("#progressFill");
let lastScene = -1;

function controls() {
  const rows = [["Espacio o →", "Siguiente idea"], ["←", "Volver"], ["R", "Reiniciar escena"], ["F", "Pantalla completa"]];
  help.innerHTML = `<button class="close" id="closeHelp" aria-label="Cerrar controles">×</button><p class="kicker">CONTROLES</p><h3>Presenta con pequeños pasos</h3><div class="keys">${rows.map(([key, text]) => `<strong>${key}</strong><span>${text}</span>`).join("")}</div>`;
  help.showModal();
  help.querySelector("#closeHelp").addEventListener("click", () => help.close());
}

function wireInteractions() {
  const typeRange = document.querySelector("#typeRange");
  if (typeRange) typeRange.addEventListener("input", () => {
    document.querySelector(".lab-card.after h3").style.maxWidth = `${typeRange.value}px`;
    document.querySelector("#typeValue").textContent = `${typeRange.value} px`;
  });

  const tokenLab = document.querySelector("#tokenLab");
  const radius = document.querySelector("#radiusRange");
  const padding = document.querySelector("#paddingRange");
  const updateTokens = () => {
    if (!tokenLab) return;
    tokenLab.style.setProperty("--card-radius", `${radius.value}px`);
    tokenLab.style.setProperty("--card-pad", `${padding.value}px`);
    document.querySelector("#radiusValue").textContent = `${radius.value} px`;
    document.querySelector("#paddingValue").textContent = `${padding.value} px`;
  };
  if (radius) radius.addEventListener("input", updateTokens);
  if (padding) padding.addEventListener("input", updateTokens);

  const countButton = document.querySelector("#countButton");
  if (countButton) countButton.addEventListener("click", () => {
    countButton.textContent = "Enviada";
    countButton.disabled = true;
    document.querySelector("#confirmation").classList.add("visible");
  });
}

function render() {
  const scene = scenes[sceneIndex];
  const enter = sceneIndex !== lastScene ? " enter" : "";
  lastScene = sceneIndex;
  deck.innerHTML = `<section class="scene${enter}" data-beat="${beat}" aria-roledescription="escena" aria-label="${scene.label}"><header class="chrome"><span class="brand"></span><span class="stage">${String(sceneIndex + 1).padStart(2, "0")} · ${String(beat + 1).padStart(2, "0")}</span></header>${scene.content(beat)}</section>`;
  const stepsBefore = scenes.slice(0, sceneIndex).reduce((n, s) => n + s.beats + 1, 0);
  const progress = totalSteps > 1 ? (stepsBefore + beat) / (totalSteps - 1) : 1;
  progressFill.style.transform = `scaleX(${progress})`;
  wireInteractions();
}

function next() {
  const scene = scenes[sceneIndex];
  if (beat < scene.beats) { beat += 1; } else if (sceneIndex < scenes.length - 1) { sceneIndex += 1; beat = 0; }
  render();
}

function previous() {
  if (beat > 0) { beat -= 1; } else if (sceneIndex > 0) { sceneIndex -= 1; beat = scenes[sceneIndex].beats; }
  render();
}

document.addEventListener("keydown", (event) => {
  if (help.open && event.key !== "Escape") return;
  if (["ArrowRight", " ", "PageDown"].includes(event.key)) { event.preventDefault(); next(); }
  if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); previous(); }
  if (event.key.toLowerCase() === "r") { beat = 0; render(); }
  if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});

document.querySelector("#helpButton").addEventListener("click", controls);
render();
