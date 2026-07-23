const challengeData = {
  credito: {
    name: "Crédito",
    generic: "Encuentra el crédito ideal para ti",
    tuned: "Mira si esta cuota cabe en tu próximo paso",
    moment: "Está considerando una compra y necesita saber si tiene sentido seguir.",
    action: "Ver una cuota posible",
  },
  seguros: {
    name: "Seguros",
    generic: "Protege lo que más quieres",
    tuned: "Entiende qué cambia si eliges esta cobertura",
    moment: "Tiene una duda concreta, pero aún no conoce el nombre del seguro.",
    action: "Comparar coberturas",
  },
  vivienda: {
    name: "Vivienda",
    generic: "Encuentra el hogar de tus sueños",
    tuned: "Descubre si este proyecto conversa con tu momento",
    moment: "Está explorando en silencio y necesita señales antes de dejar sus datos.",
    action: "Ver si encaja",
  },
  inventario: {
    name: "Inventario",
    generic: "Gestiona tu inventario de forma inteligente",
    tuned: "Cuenta, confirma y sigue con el siguiente producto",
    moment: "Está en bodega, en movimiento, y no puede perder el hilo del conteo.",
    action: "Registrar conteo",
  },
};

const scenes = [
  {
    label: "Abrir",
    beats: 3,
    content: () => `<div class="content narrow opening"><p class="kicker reveal" data-reveal="0">DES IA IZAR</p><h1 class="reveal" data-reveal="0">Construir nunca fue tan fácil.</h1><h1 class="second reveal" data-reveal="1">Por eso elegir importa más.</h1><p class="third reveal" data-reveal="2">El producto memorable empieza cuando alguien decide <span class="display-serif">para quién</span>.</p><p class="lead fourth reveal" data-reveal="3">No vamos a decorar pantallas. Vamos a encontrar las decisiones que la IA suele borrar.</p></div>`,
  },
  {
    label: "Miro",
    beats: 4,
    content: () => `<div class="content"><p class="kicker">MAPA DE OPORTUNIDADES</p><h2>Resolver rápido no es diseñar mejor.</h2><p class="lead">Este es el tablero para abrir la charla en Miro. Cada rama es una oportunidad de diseño, no una solución cerrada.</p><div class="miro"><div class="branch-line line-one"></div><div class="branch-line line-two"></div><div class="branch-line line-three"></div><div class="branch-line line-four"></div><div class="core reveal" data-reveal="0">Resolver rápido<br/>no es diseñar mejor</div><article class="branch credit reveal" data-reveal="1"><strong>Crédito</strong><span>Momento, aspiración y lenguaje de la decisión.</span></article><article class="branch insurance reveal" data-reveal="2"><strong>Seguros</strong><span>Claridad, comparación y una elección que se siente propia.</span></article><article class="branch housing reveal" data-reveal="3"><strong>Vivienda</strong><span>Señales de intención antes de pedir esfuerzo.</span></article><article class="branch inventory reveal" data-reveal="4"><strong>Inventario</strong><span>Ritmo, entorno y feedback al registrar.</span></article></div></div>`,
  },
  {
    label: "Persona",
    beats: 2,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">PERSONA</p><h2 class="reveal" data-reveal="0">La IA empieza con un usuario promedio.</h2><h2 class="display-serif accent reveal" data-reveal="1">Tu producto empieza con un momento.</h2><p class="reveal" data-reveal="2">Antes de hablar de funcionalidades, nombra qué acaba de pasar y qué necesita decidir la persona ahora.</p></div><aside class="rule reveal" data-reveal="2"><span class="number">1</span><h3>pregunta por pantalla</h3><p>Si una pantalla no responde una pregunta real, probablemente solo está moviendo información.</p></aside></div>`,
  },
  {
    label: "Landing",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 01 · UNA LANDING</p><h2>Una promesa genérica no crea una razón para seguir.</h2><p class="lead">Cambia de reto y compara lo que suele producir la IA con una versión que parte de un momento real.</p><div class="challenge-demo demo-shell" id="landingDemo"></div></div>`,
  },
  {
    label: "Postura",
    beats: 3,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">POSTURA</p><h2 class="reveal" data-reveal="0">No vendas el sistema.</h2><h2 class="display-serif accent reveal" data-reveal="1">Vende el cambio que habilita.</h2><p class="reveal" data-reveal="2">Una primera pantalla necesita una persona, un momento, una promesa, una evidencia y un siguiente paso.</p><p class="mono accent reveal" data-reveal="3">persona + momento + promesa + evidencia + acción</p></div><aside class="rule reveal" data-reveal="3"><span class="number">10</span><h3>segundos</h3><p>El tiempo que alguien necesita para entender por qué le debería importar tu producto.</p></aside></div>`,
  },
  {
    label: "Tipografía",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 02 · TEXTO</p><h2>La tipografía no es un acabado. Es cómo una decisión se vuelve fácil de leer.</h2><div class="lab"><article class="lab-card"><span class="lab-label">SALIDA RÁPIDA</span><h3>Una cobertura diseñada para quienes quieren proteger lo más importante de su vida.</h3><p>El título cae de forma accidental. Nada te dice dónde mirar primero.</p></article><article class="lab-card after reveal" data-reveal="1"><span class="lab-label">TUNEADO</span><h3>Protege el viaje que ya estás a punto de hacer.</h3><p>Una promesa, una lectura corta y una decisión visible.</p><div class="range-row"><span>Ancho</span><input id="typeRange" aria-label="Cambiar ancho del título" type="range" min="200" max="430" value="310" /><output id="typeValue">310 px</output></div></article></div><p class="mono accent reveal" data-reveal="2">text-base leading-6 · text-sm leading-5 · text-wrap: balance</p></div>`,
  },
  {
    label: "Espacio",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 03 · RITMO</p><h2>El espacio explica qué pertenece junto.</h2><p class="lead">Mueve los controles. No estás decorando una tarjeta. Estás definiendo qué se siente como una sola idea.</p><div class="token-lab" id="tokenLab"><article class="token-card"><span class="demo-kicker">CUOTA POSIBLE</span><h3>$ 240.000</h3><p>al mes durante 24 meses</p><button class="demo-action quiet" type="button">Ver el detalle</button></article><div class="control-block"><label class="control-row">Radio <input id="radiusRange" aria-label="Cambiar radio" type="range" min="8" max="28" value="18" /><output id="radiusValue">18 px</output></label><label class="control-row">Padding <input id="paddingRange" aria-label="Cambiar espacio interior" type="range" min="14" max="38" value="26" /><output id="paddingValue">26 px</output></label><p class="mono accent">gap-2 dentro · gap-4 relacionado · gap-8 separado</p></div></div></div>`,
  },
  {
    label: "Movimiento",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 04 · MICROINTERACCIÓN</p><h2>El movimiento entra cuando explica una consecuencia.</h2><p class="lead">No animes cada elemento al aparecer. Usa movimiento para orientar, confirmar o llamar atención.</p><div class="inventory-demo"><article class="count-card"><span class="demo-kicker">BODEGA 03 · JUGOS</span><div class="count">12</div><button class="demo-action" id="countButton" type="button">Registrar 12 unidades</button><div class="confirmation" id="confirmation">✓ 12 unidades registradas. Siguiente producto listo.</div></article><div class="micro-list"><div class="micro-item"><strong>Orientar</strong><span>Un panel llega de donde viene la acción.</span></div><div class="micro-item"><strong>Confirmar</strong><span>El número queda quieto y el estado responde.</span></div><div class="micro-item"><strong>Llamar atención</strong><span>Solo si algo necesita revisión.</span></div><p class="mono accent reveal" data-reveal="2">duration-150 ease-out · motion-safe:transition-transform</p></div></div></div>`,
  },
  {
    label: "Precisión",
    beats: 3,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">PRECISIÓN</p><h2 class="reveal" data-reveal="0">El carácter aparece en detalles pequeños.</h2><p class="reveal" data-reveal="1">16 px para lectura. 14 px para apoyo. 12 px solo para una etiqueta breve y no crítica.</p><p class="reveal" data-reveal="2">44 px es un punto de partida para una acción importante. Menos de 200 ms para feedback local.</p><h2 class="display-serif accent reveal" data-reveal="3">Menos efectos. Más intención.</h2></div><aside class="rule reveal" data-reveal="2"><span class="number">4</span><h3>familias</h3><p>Tipografía, espacio, forma y movimiento. Si cada una toma una decisión distinta, el producto se diluye.</p></aside></div>`,
  },
  {
    label: "Auditar",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">UN PROMPT PARA EL EQUIPO</p><div class="prompt"><span class="mono">AUDITORÍA DE TASTE</span><h2>Haz que la IA revise, no que decida por ti.</h2><p>“Revisa esta solución para el reto de Colsubsidio. Identifica el momento humano que atiende. Evalúa si la promesa de la primera pantalla es concreta y vendible. Revisa jerarquía, copy, espacios, objetivos de acción y movimiento. No agregues features. Devuelve los tres cambios con mayor impacto y las clases de Tailwind para implementarlos.”</p></div><div class="checklist"><article class="check reveal" data-reveal="0"><span>PERSONA</span><p>Escribe el momento exacto que estás resolviendo.</p></article><article class="check reveal" data-reveal="1"><span>POSTURA</span><p>Reescribe la promesa sin nombrar la tecnología.</p></article><article class="check reveal" data-reveal="2"><span>PRECISIÓN</span><p>Corrige una jerarquía, un estado y una interacción.</p></article></div></div>`,
  },
  {
    label: "Cerrar",
    beats: 2,
    content: () => `<div class="content narrow opening"><p class="kicker reveal" data-reveal="0">PARA VOLVER AL EQUIPO</p><h1 class="reveal" data-reveal="0">Que se note que alguien eligió.</h1><h1 class="second display-serif reveal" data-reveal="1">Para quién.</h1><h1 class="second display-serif reveal" data-reveal="2">Qué promete.</h1><h1 class="second display-serif reveal" data-reveal="3">Cómo se siente.</h1></div>`,
  },
  {
    label: "Preguntas",
    beats: 0,
    content: () => `<div class="content narrow"><p class="kicker">PREGUNTAS</p><h1>¿Qué decisión de tu producto todavía se siente genérica?</h1><p class="lead">Persona. Postura. Precisión.</p></div>`,
  },
];

const params = new URLSearchParams(window.location.search);
const requestedScene = Number(params.get("scene"));
const requestedBeat = Number(params.get("beat"));
let sceneIndex = Number.isInteger(requestedScene) && requestedScene >= 0 && requestedScene < scenes.length ? requestedScene : 0;
let beat = Number.isInteger(requestedBeat) && requestedBeat >= 0 && requestedBeat <= scenes[sceneIndex].beats ? requestedBeat : 0;
const deck = document.querySelector("#deck");
const help = document.querySelector("#helpDialog");

function controls() {
  const rows = [["Espacio o →", "Siguiente idea"], ["←", "Volver"], ["R", "Reiniciar escena"], ["F", "Pantalla completa"]];
  help.innerHTML = `<button class="close" id="closeHelp" aria-label="Cerrar controles">×</button><p class="kicker">CONTROLES</p><h3>Presenta con pequeños pasos</h3><div class="keys">${rows.map(([key, text]) => `<strong>${key}</strong><span>${text}</span>`).join("")}</div>`;
  help.showModal();
  help.querySelector("#closeHelp").addEventListener("click", () => help.close());
}

function renderLandingDemo(element) {
  let active = "credito";
  const paint = () => {
    const data = challengeData[active];
    element.innerHTML = `<div class="demo-top"><div class="dots"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div><span>Comparador de promesa</span></div><div class="demo-body"><div class="demo-controls">${Object.entries(challengeData).map(([key, item]) => `<button class="chip" data-challenge="${key}" aria-pressed="${key === active}">${item.name}</button>`).join("")}</div><div class="compare"><div><p class="compare-label">SALIDA RÁPIDA DE IA</p><article class="demo-shell"><div class="demo-body"><span class="demo-kicker">${data.name.toUpperCase()}</span><h3 class="demo-title">${data.generic}</h3><p class="demo-copy">Tecnología inteligente para una experiencia simple, rápida y personalizada.</p><button class="demo-action quiet" type="button">Conocer más</button></div></article></div><div class="after-version"><p class="compare-label after">TUNEADO PARA EL MOMENTO</p><article class="demo-shell"><div class="demo-body"><span class="demo-kicker">${data.name.toUpperCase()}</span><h3 class="demo-title">${data.tuned}</h3><p class="demo-copy">${data.moment}</p><button class="demo-action" type="button">${data.action}</button></div></article></div></div><div class="challenge-meta after-version"><span>El cambio no es visual primero.</span><span>Es una decisión de producto.</span></div></div>`;
    element.querySelectorAll("[data-challenge]").forEach((button) => button.addEventListener("click", () => { active = button.dataset.challenge; paint(); }));
  };
  paint();
}

function wireInteractions() {
  const landingDemo = document.querySelector("#landingDemo");
  if (landingDemo) renderLandingDemo(landingDemo);

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
    countButton.textContent = "Registrado";
    countButton.disabled = true;
    document.querySelector("#confirmation").classList.add("visible");
  });
}

function render() {
  const scene = scenes[sceneIndex];
  deck.innerHTML = `<section class="scene" data-beat="${beat}" aria-roledescription="escena" aria-label="${scene.label}"><header class="chrome"><span>Des IA izar</span><span class="stage">${String(sceneIndex + 1).padStart(2, "0")} · ${String(beat + 1).padStart(2, "0")}</span></header>${scene.content()}<footer class="footer"><span><strong>Persona</strong> · <strong>Postura</strong> · <strong>Precisión</strong></span><span>${scene.label}</span></footer></section>`;
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
