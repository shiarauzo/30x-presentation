# Temario — De diseño AI slop a diseño humano

**Charla:** 35 min + 5 de preguntas · Equipo Colubsidio · Audiencia mixta (dev/diseño/PM)
**Idea madre:** Construir nunca fue tan fácil y nunca los productos se parecieron tanto. La IA te da la primera respuesta buena y genérica. El trabajo humano es *elegir*: para quién, qué promete y cómo se siente cada paso.
**Columna vertebral:** Persona · Postura · Precisión.
**Backbone visual:** UNA pantalla slop (un Crédito genérico) que humanizamos en vivo, capa por capa.

> Regla de oro para toda la charla: cada slide da **una idea + un antes/después + algo que se llevan** (una regla, un prompt o un snippet).

---

## Mapa de tiempos

| Bloque | Min | Qué pasa |
|---|---|---|
| 0. Abrir | 0:00–2:30 | El gancho: todo se parece. La IA promedia. |
| 1. Persona | 2:30–6:30 | Para quién y en qué momento decide. |
| 2. Postura | 6:30–10:00 | De capacidad técnica a promesa. Test del logo. |
| 3. Precisión (ARTESANÍA) | 10:00–30:00 | Humanizamos la pantalla slop capa por capa. |
| 4. Cierre + prompt de equipo | 30:00–35:00 | Checklist de 15 min. "Que se note que alguien eligió." |
| 5. Preguntas | 35:00–40:00 | Respondes con Persona/Postura/Precisión. |

---

## 0 · Abrir (0:00–2:30)

**Mensaje:** construir es barato; elegir es el trabajo.
**En pantalla:** escena `Abrir` actual → "Construir nunca fue tan fácil / Elegir importa más / Decide para quién".
**Cómo lo dices:**
- "Levanten la mano quienes ya generaron una UI con IA esta semana." (casi todos)
- "Todas se parecen. Gris, bordes redondeados, 'Encuentra el X ideal para ti'. Eso es *slop*: correcto y sin nadie adentro."
- Muestra la **pantalla slop** por 3 segundos (la que arreglaremos al final). "Guarden esta imagen. Al minuto 30 va a estar irreconocible — y no vamos a tocar el color de marca."

**Se llevan:** el slop no es fealdad, es ausencia de decisiones.

---

## 1 · Persona (2:30–6:30)

**Mensaje:** la IA parte de un promedio; tú partes de un momento.
**En pantalla:** escena `Persona` + `Miro` (los 4 retos como 4 momentos).
**El giro:** no diseñas para "usuarios de crédito", diseñas para alguien que **está a punto de decidir una compra y no sabe si la cuota le cabe**.
**Ejercicio de 60s con la sala:** "Cambien su segmento abstracto por una frase que empiece con 'Está a punto de…'".

**Los 4 momentos (de `challengeData`):**
- Crédito → *antes de decidir una compra*.
- Seguros → *antes de elegir una cobertura*.
- Vivienda → *antes de dejar sus datos*.
- Inventario → *mientras cuenta en bodega*.

**Prompt que se llevan (copy-paste):**
```
No escribas la pantalla todavía. Primero descríbeme a la persona
en un momento concreto: ¿qué está a punto de hacer, qué teme y qué
necesita decidir HOY? Una sola frase que empiece con "Está a punto de…".
```

**Se llevan:** una pantalla, una pregunta. Si no sabes qué decide la persona aquí, no pidas más pantallas.

---

## 2 · Postura (6:30–10:00)

**Mensaje:** no vendas el sistema, vende el cambio.
**En pantalla:** escena `Postura` + demo `Landing` (comparador slop vs. tuneado por reto).
**La fórmula:** `persona + momento + promesa + acción`.
**Test del logo intercambiable:** si le tapas el logo y sirve para cualquier banco, es slop. La promesa tiene que ser tan tuya que el logo sobre.

**Antes/después (ya en el demo):**
- Slop: "Encuentra el crédito ideal para ti".
- Humano: "Mira si esta cuota cabe en tu próximo paso".

**Prompt que se llevan:**
```
Reescribe este titular. Prohibido: "ideal", "inteligente", "fácil",
"para ti", "lo que más quieres". Di el CAMBIO concreto que la persona
gana en su momento. Máx 8 palabras. Dame 3 opciones.
```

**Se llevan:** 10 segundos para entender la promesa, o la perdiste.

---

## 3 · Precisión — La artesanía (10:00–30:00)  ← el corazón de la charla

> Aquí tomamos la pantalla slop del inicio y la humanizamos EN VIVO, capa por capa.
> Cada capa = un principio + un antes/después + un snippet copy-paste (etiquetado "para quien codea").

### 3.1 · Contenido antes que estética (10:00–13:00)
**Idea:** la IA maqueta el *happy path*. Un producto real vive en sus estados.
**Antes/después:** la card slop no dice qué pasa si no hay datos, si carga, si falla.
**Regla:** pixel-perfect del happy path = 20% del trabajo real.

**Checklist que se llevan:**
```
□ Empty state      □ Loading (skeleton, no spinner)
□ Error + salida   □ Success
□ Disabled         □ Responsive 320px → desktop
```

**Prompt:**
```
Para esta pantalla, genera los 5 estados: vacío, cargando, error,
éxito y deshabilitado. En error, escribe qué pasó Y qué hacer,
con un botón de salida. No un "Algo salió mal".
```

### 3.2 · Jerarquía y tamaños: guiar el ojo (13:00–17:00)
**Idea:** si todo grita, nada se escucha. El tamaño es una decisión, no un default.
**Antes/después:** en la card slop todo es `text-base`. La humanizamos: el dato que importa (la cuota, $240.000) manda; lo demás baja de tono.
**Reglas concretas:**
- Escala tipográfica, no números al azar: un tamaño para el dato, uno para leer (16px), uno para apoyo.
- Contraste = jerarquía: lo importante resalta solo, sin negritas por todos lados.
- `text-wrap: balance` en títulos; ancho de línea cómodo (no 900px de texto).

**Snippet (para quien codea):**
```html
<article class="space-y-1">
  <span class="text-xs uppercase tracking-wide text-neutral-500">Cuota posible</span>
  <h3 class="text-3xl font-semibold tabular-nums">$ 240.000</h3>
  <p class="text-sm text-neutral-500">al mes durante 24 meses</p>
</article>
```
> Demo vivo: usa el control de la escena `Tipografía` (rango de ancho) para mostrar cómo `max-width` + `balance` cambian la lectura.

### 3.3 · Espacio: el ritmo que agrupa (17:00–21:00)
**Idea:** el espacio dice qué va con qué. Sin sistema, la IA reparte aire al azar.
**Antes/después:** usa la escena `Espacio` (sliders de radio y padding) para mostrar cómo agrupar sube la legibilidad sin cambiar contenido.
**Reglas:**
- Sistema de espaciado, no números mágicos: `gap-2 / gap-4 / gap-8` (múltiplos, no 13px, 17px, 21px).
- Más espacio *entre* grupos que *dentro* del grupo. La proximidad crea significado.
- Un padding generoso vende calidad más que cualquier sombra.

**Snippet:**
```html
<!-- Proximidad: junto lo relacionado, separo los grupos -->
<div class="space-y-8">           <!-- entre grupos -->
  <section class="space-y-2">…</section>  <!-- dentro del grupo -->
  <section class="space-y-2">…</section>
</div>
```

### 3.4 · Estados y affordances: que se entienda qué hacer (21:00–25:00)
**Idea:** si parece botón, debe *actuar* como botón. Sin feedback, el usuario duda y no hace click.
**Antes/después:** el botón slop es plano. Le damos hover, active, focus-visible, disabled.
**Test:** ¿mi abuela sabría qué hacer aquí?

**Snippet (para quien codea):**
```css
.button {
  cursor: pointer;
  transition: transform 150ms ease, background 150ms ease;
}
.button:hover         { background: var(--accent-hover); }
.button:active        { transform: scale(0.98); }
.button:focus-visible { outline: 2px solid var(--ring); }
.button:disabled      { opacity: .5; cursor: not-allowed; }
```

**Defensive UI — errores útiles:**
```
❌  Something went wrong
✅  Ese correo ya está registrado. ¿Quieres iniciar sesión?
```
> Cada mensaje de error es una conversación con alguien frustrado. Di qué pasó **y** qué hacer.

**Bonus a11y (30s):** si funciona sin mouse, funciona para todos.
```tsx
<button aria-label="Cerrar" onClick={close} className="focus-visible:ring-2">
  <XIcon aria-hidden />
</button>
```

### 3.5 · Movimiento: mueve solo lo que cambia algo (25:00–28:00)
**Idea:** las microinteracciones existen para **orientar, confirmar o llamar atención**. Nada más.
**Antes/después:** usa la escena `Movimiento` (registrar conteo de inventario → "✓ Registrado. Siguiente producto.").
**Reglas:**
- < 200 ms para que se sienta instantáneo.
- Optimistic UI: muestra el resultado ya, confirma después.
- Anima `transform`/`opacity`, no `width`/`top` (performance = UX).

**Snippet:**
```tsx
function registrar(id) {
  setConfirmado(true);              // 1. muestra ya
  api.registrar(id).catch(() => setConfirmado(false)); // 2. rollback si falla
}
```

### 3.6 · Clímax: antes/después lado a lado (28:00–30:00)
**En pantalla:** la pantalla slop original a la izquierda, la humanizada a la derecha.
**El punto:** mismo color de marca, mismo contenido base. La diferencia es **decisiones** — momento, promesa, jerarquía, espacio, estado, movimiento.
**Frase:** "No agregamos features. Elegimos."

---

## 4 · Cierre + prompt de equipo (30:00–35:00)

**Menos es más — el corte que duele:**
> Quita elementos hasta que duela. Luego quita uno más.

**Checklist de 15 min que se llevan (escena `Auditar`):**
```
1. Escribe el MOMENTO (persona a punto de…).
2. Reescribe la PROMESA (sin palabras prohibidas).
3. Corrige UNA jerarquía, UN estado y UNA interacción.
```

**Prompt de auditoría de taste (copy-paste, el que más van a usar):**
```
Audita esta pantalla en 6 ejes: momento, promesa, jerarquía, copy,
espacio y movimiento. NO agregues features. Devuélveme exactamente
3 cambios, cada uno con las clases de Tailwind concretas para aplicarlo.
```

**Cierre (escena `Cerrar`):** "Que se note que alguien eligió. Para quién. Qué promete. Cómo se siente."
La IA los lleva más rápido. La decisión sigue siendo suya.

---

## 5 · Preguntas (35:00–40:00)
Responde cada caso concreto pasándolo por el filtro: **¿de quién es el momento? ¿cuál es la promesa? ¿qué detalle traiciona el cuidado?**

---

## Anexo — lo que se llevan (una hoja)

**3 prompts:**
1. Persona: "descríbeme a la persona en un momento concreto…".
2. Postura: "reescribe el titular, prohibido ideal/fácil/para ti…".
3. Auditoría: "audita en 6 ejes, 3 cambios con clases de Tailwind…".

**Reglas rápidas:**
- 16px para leer · 44px para tocar · <200ms para responder.
- Espaciado en sistema (gap-2/4/8), no números mágicos.
- Más espacio entre grupos que dentro.
- Los 5 estados no son extra, son el producto.
- Mueve solo lo que orienta, confirma o llama atención.
- Test del logo: si sirve para cualquier banco, es slop.
