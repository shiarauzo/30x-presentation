const challengeData = {
  credito: {
    name: "Crédito",
    generic: "Encuentra el crédito ideal para ti",
    tuned: "Mira si esta cuota cabe en tu próximo paso",
    moment: "Antes de decidir una compra.",
    action: "Ver una cuota posible",
  },
  seguros: {
    name: "Seguros",
    generic: "Protege lo que más quieres",
    tuned: "Entiende qué cambia si eliges esta cobertura",
    moment: "Antes de elegir una cobertura.",
    action: "Comparar coberturas",
  },
  vivienda: {
    name: "Vivienda",
    generic: "Encuentra el hogar de tus sueños",
    tuned: "Descubre si este proyecto conversa con tu momento",
    moment: "Antes de dejar sus datos.",
    action: "Ver si encaja",
  },
  inventario: {
    name: "Inventario",
    generic: "Gestiona tu inventario de forma inteligente",
    tuned: "Cuenta, confirma y sigue con el siguiente producto",
    moment: "Mientras cuenta en bodega.",
    action: "Registrar conteo",
  },
};

const scenes = [
  {
    label: "Abrir",
    beats: 2,
    content: () => `<div class="content narrow opening"><p class="kicker reveal" data-reveal="0">DES IA IZAR</p><h1 class="reveal" data-reveal="0">Construir nunca fue tan fácil.</h1><h1 class="second reveal" data-reveal="1">Elegir importa más.</h1><p class="third reveal" data-reveal="2">Decide <span class="display-serif">para quién</span>.</p></div>`,
  },
  {
    label: "Miro",
    beats: 3,
    content: () => `<div class="content"><p class="kicker">MAPA DE OPORTUNIDADES</p><h2>Resolver rápido no es diseñar mejor.</h2><p class="lead">Cuatro retos. Cuatro momentos.</p><div class="opportunity-grid"><article class="opportunity-card reveal" data-reveal="0"><span>01</span><h3>Crédito</h3><p>La decisión.</p></article><article class="opportunity-card reveal" data-reveal="1"><span>02</span><h3>Seguros</h3><p>La claridad.</p></article><article class="opportunity-card reveal" data-reveal="2"><span>03</span><h3>Vivienda</h3><p>La intención.</p></article><article class="opportunity-card reveal" data-reveal="3"><span>04</span><h3>Inventario</h3><p>El ritmo.</p></article></div></div>`,
  },
  {
    label: "Persona",
    beats: 2,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">PERSONA</p><h2 class="reveal" data-reveal="0">La IA parte de un promedio.</h2><h2 class="display-serif accent reveal" data-reveal="1">Parte de un momento.</h2><p class="reveal" data-reveal="2">¿Qué necesita decidir ahora?</p></div><aside class="rule reveal" data-reveal="2"><span class="number">1</span><h3>pregunta por pantalla</h3></aside></div>`,
  },
  {
    label: "Landing",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 01 · LANDING</p><h2>Una promesa genérica no basta.</h2><div class="challenge-demo demo-shell" id="landingDemo"></div></div>`,
  },
  {
    label: "Postura",
    beats: 3,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">POSTURA</p><h2 class="reveal" data-reveal="0">No vendas el sistema.</h2><h2 class="display-serif accent reveal" data-reveal="1">Vende el cambio.</h2><p class="mono accent reveal" data-reveal="2">persona + momento + promesa + acción</p></div><aside class="rule reveal" data-reveal="3"><span class="number">10</span><h3>segundos para entenderlo</h3></aside></div>`,
  },
  {
    label: "Tipografía",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 02 · TEXTO</p><h2>El texto decide.</h2><div class="lab"><article class="lab-card"><span class="lab-label">SALIDA RÁPIDA</span><h3>Una cobertura diseñada para quienes quieren proteger lo más importante de su vida.</h3></article><article class="lab-card after reveal" data-reveal="1"><span class="lab-label">TUNEADO</span><h3>Protege el viaje que ya estás a punto de hacer.</h3><div class="range-row"><span>Ancho</span><input id="typeRange" aria-label="Cambiar ancho del título" type="range" min="200" max="430" value="310" /><output id="typeValue">310 px</output></div></article></div><p class="mono accent reveal" data-reveal="2">text-base · leading-6 · text-wrap: balance</p></div>`,
  },
  {
    label: "Espacio",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 03 · RITMO</p><h2>El espacio agrupa.</h2><div class="token-lab" id="tokenLab"><article class="token-card"><span class="demo-kicker">CUOTA POSIBLE</span><h3>$ 240.000</h3><p>al mes durante 24 meses</p><button class="demo-action quiet" type="button">Ver detalle</button></article><div class="control-block"><label class="control-row">Radio <input id="radiusRange" aria-label="Cambiar radio" type="range" min="8" max="28" value="18" /><output id="radiusValue">18 px</output></label><label class="control-row">Padding <input id="paddingRange" aria-label="Cambiar espacio interior" type="range" min="14" max="38" value="26" /><output id="paddingValue">26 px</output></label><p class="mono accent">gap-2 · gap-4 · gap-8</p></div></div></div>`,
  },
  {
    label: "Movimiento",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">EJEMPLO 04 · MOVIMIENTO</p><h2>Mueve lo que cambia algo.</h2><div class="inventory-demo"><article class="count-card"><span class="demo-kicker">BODEGA 03 · JUGOS</span><div class="count">12</div><button class="demo-action" id="countButton" type="button">Registrar 12</button><div class="confirmation" id="confirmation">✓ Registrado. Siguiente producto.</div></article><div class="micro-list"><div class="micro-item"><strong>Orientar</strong></div><div class="micro-item"><strong>Confirmar</strong></div><div class="micro-item"><strong>Revisar</strong></div><p class="mono accent reveal" data-reveal="2">duration-150 · transition-transform</p></div></div></div>`,
  },
  {
    label: "Precisión",
    beats: 3,
    content: () => `<div class="content split"><div class="copy-stack"><p class="kicker reveal" data-reveal="0">PRECISIÓN</p><h2 class="reveal" data-reveal="0">El carácter está en el detalle.</h2><p class="reveal" data-reveal="1">16 px para leer. 44 px para tocar.</p><p class="reveal" data-reveal="2">Menos de 200 ms para responder.</p><h2 class="display-serif accent reveal" data-reveal="3">Menos. Mejor.</h2></div><aside class="rule reveal" data-reveal="2"><span class="number">4</span><h3>tipografía · espacio · forma · movimiento</h3></aside></div>`,
  },
  {
    label: "Auditar",
    beats: 2,
    content: () => `<div class="content"><p class="kicker">UN PROMPT PARA EL EQUIPO</p><div class="prompt"><span class="mono">AUDITORÍA DE TASTE</span><h2>Haz que la IA revise.</h2><p>“Audita momento, promesa, jerarquía, copy, espacio y movimiento. No agregues features. Devuelve tres cambios con clases de Tailwind.”</p></div><div class="checklist"><article class="check reveal" data-reveal="0"><span>PERSONA</span><p>Define el momento.</p></article><article class="check reveal" data-reveal="1"><span>POSTURA</span><p>Reescribe la promesa.</p></article><article class="check reveal" data-reveal="2"><span>PRECISIÓN</span><p>Corrige un detalle.</p></article></div></div>`,
  },
  {
    label: "Cerrar",
    beats: 2,
    content: () => `<div class="content narrow opening"><p class="kicker reveal" data-reveal="0">PARA VOLVER AL EQUIPO</p><h1 class="reveal" data-reveal="0">Que se note que alguien eligió.</h1><h1 class="second display-serif reveal" data-reveal="1">Para quién.</h1><h1 class="second display-serif reveal" data-reveal="2">Qué promete.</h1><h1 class="second display-serif reveal" data-reveal="3">Cómo se siente.</h1></div>`,
  },
  {
    label: "Preguntas",
    beats: 0,
    content: () => `<div class="content narrow"><p class="kicker">PREGUNTAS</p><h1>¿Qué sigue siendo genérico?</h1></div>`,
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
    element.innerHTML = `<div class="demo-top"><div class="dots"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div></div><div class="demo-body"><div class="demo-controls">${Object.entries(challengeData).map(([key, item]) => `<button class="chip" data-challenge="${key}" aria-pressed="${key === active}">${item.name}</button>`).join("")}</div><div class="compare"><div><p class="compare-label">SALIDA RÁPIDA DE IA</p><article class="demo-shell"><div class="demo-body"><span class="demo-kicker">${data.name.toUpperCase()}</span><h3 class="demo-title">${data.generic}</h3></div></article></div><div class="after-version"><p class="compare-label after">TUNEADO PARA EL MOMENTO</p><article class="demo-shell"><div class="demo-body"><span class="demo-kicker">${data.name.toUpperCase()}</span><h3 class="demo-title">${data.tuned}</h3><p class="demo-copy">${data.moment}</p><button class="demo-action" type="button">${data.action}</button></div></article></div></div></div>`;
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
  deck.innerHTML = `<section class="scene" data-beat="${beat}" aria-roledescription="escena" aria-label="${scene.label}"><header class="chrome"><span>Des IA izar</span><span class="stage">${String(sceneIndex + 1).padStart(2, "0")} · ${String(beat + 1).padStart(2, "0")}</span></header>${scene.content()}</section>`;
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
