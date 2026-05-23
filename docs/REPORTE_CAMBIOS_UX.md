# Reporte de cambios UX

## 1. Problemas detectados después de la revisión estricta

La versión anterior resolvía el flujo general, pero seguía siendo débil como experiencia pedagógica. El feedback explicaba poco y en algunos casos solo traducía la respuesta. La evaluación contaba aciertos, pero no generaba una nivelación clara tipo A1, A2, B1 o B2. `levels.html` seguía mostrando una maqueta de niveles completados sin relación real con el resultado. El resultado no activaba un bloque de ejercicios acorde al diagnóstico. Tampoco había una estructura escalable para agregar preguntas por nivel sin duplicar lógica en varias páginas.

## 2. Cambios aplicados

Se agregó `js/learning-data.js` como fuente de datos del frontend. Ese archivo centraliza `diagnosticQuestions`, `questionsByLevel`, `resultThresholds` y `levelModules`.

Se rehizo `evaluation.html` como evaluación diagnóstica posterior a la práctica guiada, con 8 preguntas progresivas desde A1 hasta B2. Cada pregunta tiene intención pedagógica, habilidad, nivel, opciones y feedback explicativo.

Se rehizo `result.html` para entregar un nivel A1, A2, B1 o B2, explicar el resultado y enviar al módulo correspondiente.

Se rehizo `levels.html` para mostrar estados reales: bloqueado, disponible, en progreso y completado, según `localStorage`.

Se creó `level-practice.html` para ejecutar ejercicios del módulo asignado. Cada nivel tiene al menos un bloque activo con ejercicios acordes.

Se mejoró el feedback de `lesson.html` y `exercise.html` para enseñar regla, aplicación, ejemplo y comparación con el error.

## 3. Cambios por requisito R1-R7

| Requisito | Problema detectado | Cambio aplicado | Archivo(s) modificados | Estado final |
|---|---|---|---|---|
| R1 | El onboarding debía orientar sin agregar fricción. | Se mantiene onboarding de 3 pasos con práctica, feedback y evaluación posterior. | `pages/onboarding.html` | Cumple |
| R2 | El feedback era superficial y no enseñaba suficiente. | Se agregaron explicaciones con regla, aplicación, ejemplo y comparación con errores. | `pages/lesson.html`, `pages/exercise.html`, `pages/evaluation.html`, `pages/level-practice.html`, `js/learning-data.js` | Cumple |
| R3 | El progreso existía, pero los niveles no tenían sentido real. | Progreso de práctica, evaluación y módulos ahora se basa en estado local y avance real. | `pages/evaluation.html`, `pages/levels.html`, `pages/level-practice.html`, `pages/dashboard.html` | Cumple |
| R4 | Había controles visuales sin semántica suficiente. | Se mantienen botones/enlaces semánticos, foco visible, estados disabled y sin enlaces `#` en el flujo revisado. | `css/style.css`, `pages/dashboard.html`, `pages/levels.html`, `pages/level-practice.html` | Cumple en el flujo principal |
| R5 | Faltaba intención pedagógica clara en preguntas y apoyo visual. | Las actividades iniciales y los módulos usan habilidad, imagen contextual, texto corto, ejemplo o regla. | `pages/lesson.html`, `pages/exercise.html`, `js/learning-data.js` | Cumple |
| R6 | La evaluación no nivelaba ni activaba módulos. | Se implementó diagnóstico A1/A2/B1/B2, resultado interpretable y activación de módulo correspondiente. | `pages/evaluation.html`, `pages/result.html`, `pages/levels.html`, `pages/level-practice.html`, `js/learning-data.js` | Cumple |
| R7 | Había fricción por interrupciones y pantallas sueltas. | No se usa `alert()`. La ruta principal está conectada y sin anuncios. | `pages/lesson.html`, `pages/exercise.html`, `pages/evaluation.html`, `pages/result.html`, `pages/levels.html` | Cumple |

## 4. Nueva lógica de niveles A1/A2/B1/B2

La app ahora usa niveles inspirados en nivelación tipo CEFR:

| Nivel | Propósito pedagógico | Módulo activado |
|---|---|---|
| A1 | Vocabulario básico, saludos y frases simples con apoyo visual. | Bloque A1 |
| A2 | Rutinas, presente simple, preguntas comunes y frases cortas. | Bloque A2 |
| B1 | Gramática contextual, conectores y comprensión de lectura corta. | Bloque B1 |
| B2 | Inferencia, matices de significado y comprensión más exigente. | Bloque B2 |

Los módulos viven en `levelModules` dentro de `js/learning-data.js`. `levels.html` lee `shimiAssignedLevel`, `shimiActiveModule` y `shimiCompletedModules` desde `localStorage` para decidir qué mostrar como bloqueado, disponible, en progreso o completado.

## 5. Cómo se calcula el resultado

La evaluación usa 8 preguntas progresivas:

- 2 preguntas A1.
- 2 preguntas A2.
- 2 preguntas B1.
- 2 preguntas B2.

Cada respuesta correcta suma 1 punto. Los umbrales están en `resultThresholds`:

| Puntaje | Nivel asignado |
|---|---|
| 0-2 | A1 |
| 3-4 | A2 |
| 5-6 | B1 |
| 7-8 | B2 |

La lógica está en `pages/evaluation.html` y `pages/result.html`. El resultado se guarda como `shimiAssignedLevel`.

## 6. Cómo se activa el módulo correspondiente

Después del diagnóstico, `result.html` asigna el nivel y el botón principal envía a:

`level-practice.html?level=A1`, `level-practice.html?level=A2`, `level-practice.html?level=B1` o `level-practice.html?level=B2`.

`level-practice.html` valida que el módulo corresponda al nivel asignado o a un módulo ya completado. Si el usuario intenta abrir un nivel no habilitado, la pantalla le indica que debe volver al mapa o completar diagnóstico.

Cuando el usuario completa el módulo, se guarda en `shimiCompletedModules` y `levels.html` lo muestra como completado.

## 7. Ejemplos de feedback mejorado

Ejemplo A2:

Incorrecto. Con he / she / it se agrega -s o -es en presente simple. “Go” cambia a “goes” porque termina en -o. No decimos “She go”; decimos “She goes to school.”

Ejemplo B1:

Incorrecto. La segunda parte contrasta con la primera: estar cansado normalmente dificulta terminar. Por eso usamos “but”. “So” marcaría consecuencia: “I was tired, so I rested.”

Ejemplo B2:

Incorrecto. “Postponed” no significa cancelar para siempre; significa mover algo a un momento posterior. Comparación: cancelled = cancelado; postponed = aplazado.

## 8. Cómo escalar el banco de preguntas

Para agregar preguntas diagnósticas, se agregan objetos a `diagnosticQuestions` con:

`id`, `level`, `skill`, `prompt`, `visual`, `options`, `correctIndex` y `feedback`.

Para agregar ejercicios por nivel, se agregan elementos dentro de `levelModules.A1.exercises`, `levelModules.A2.exercises`, `levelModules.B1.exercises` o `levelModules.B2.exercises`.

Para cambiar la nivelación, se modifican los rangos de `resultThresholds` sin tocar las pantallas.

Para conectar backend en el futuro, `localStorage` puede reemplazarse por respuestas de API manteniendo la misma estructura: resultado diagnóstico, nivel asignado, módulo activo y módulos completados.

## 9. Limitaciones restantes

La solución sigue siendo only front con datos estáticos y `localStorage`. No hay historial persistente entre dispositivos ni analítica real de desempeño.

Las páginas antiguas `feedback.html` y `completion.html` permanecen como legado del prototipo, pero ya no sostienen la ruta principal. Quedan como deuda si el proyecto se limpia para entrega final.

No se hicieron pruebas automatizadas ni auditoría completa con lector de pantalla. La accesibilidad se reforzó en el flujo principal, pero no está certificada.

El cálculo por puntaje es funcional para prototipo, pero una nivelación real podría ponderar habilidades por separado y no solo total de aciertos.

## 10. Checklist final

- [x] R1 corregido
- [x] R2 corregido con feedback pedagógico
- [x] R3 corregido con progreso y estado de módulos
- [x] R4 corregido en el flujo principal
- [x] R5 corregido con texto, imagen, ejemplo e intención pedagógica
- [x] R6 corregido con diagnóstico A1/A2/B1/B2 y activación de módulo
- [x] R7 corregido sin `alert()` ni interrupciones innecesarias

## 11. Corrección de control del usuario y diagnóstico opcional

### Problema detectado

El diagnóstico estaba funcionando como paso casi obligatorio para activar la ruta de aprendizaje. Eso reducía el control del usuario: quien quería empezar desde cero no tenía una opción clara. Además, varias pantallas usaban una `X` como salida, lo que era ambiguo en web porque la misma señal podía significar cancelar, volver, cerrar, salir o perder avance.

### Cambio aplicado

Se agregaron dos caminos explícitos en `pages/onboarding.html` y `pages/dashboard.html`:

- `HACER DIAGNÓSTICO DE NIVEL`
- `EMPEZAR DESDE A1`

Si el usuario elige empezar desde A1, el frontend guarda `shimiAssignedLevel = A1` en `localStorage`, limpia `shimiActiveModule` y envía a `pages/levels.html`. Desde ahí A1 queda disponible sin necesidad de evaluación.

### Diagnóstico disponible después

`pages/levels.html` mantiene visible la acción `HACER DIAGNÓSTICO DE NIVEL`. Si ya existe un resultado previo, el texto cambia a `RECALCULAR MI NIVEL`. Esto permite empezar desde A1 y evaluar el nivel más adelante sin bloquear el aprendizaje inicial.

### Corrección del botón X

Se reemplazó la `X` por acciones textuales en el flujo principal:

- `Salir de la práctica` en `pages/lesson.html`.
- `Volver a niveles` en `pages/exercise.html`, `pages/retry.html` y `pages/feedback.html`.
- `Cancelar diagnóstico` en `pages/evaluation.html`.
- `Guardar y salir` en `pages/level-practice.html`.
- `Volver al inicio` en `pages/settings.html` y `pages/levels.html`.

La intención es que el usuario entienda qué ocurrirá antes de pulsar la acción.

### Mejora según heurísticas de Nielsen

**Control y libertad del usuario:** ahora puede elegir diagnóstico o empezar desde A1.

**Correspondencia con el mundo real:** los botones dicen exactamente qué hacen, por ejemplo `Empezar desde A1` o `Cancelar diagnóstico`.

**Consistencia y estándares:** se evita usar la misma `X` para acciones distintas.

**Prevención de errores:** al cancelar diagnóstico o salir de práctica, el texto anticipa la consecuencia.

**Reconocimiento antes que memoria:** el usuario no necesita recordar qué significa un icono; la acción está escrita.

### Archivos modificados

- `pages/onboarding.html`
- `pages/dashboard.html`
- `pages/levels.html`
- `pages/evaluation.html`
- `pages/lesson.html`
- `pages/exercise.html`
- `pages/level-practice.html`
- `pages/retry.html`
- `pages/feedback.html`
- `pages/settings.html`

## 12. Corrección de idioma, apoyo bilingüe y accesibilidad

### Problema detectado

La interfaz principal seguía en español, aunque el producto es una app para aprender inglés. Eso reducía la exposición natural al idioma y podía hacer que las actividades evaluaran más la traducción de la interfaz que el uso real del inglés. También faltaba una forma visible de cambiar idioma o pedir apoyo cuando el usuario principiante no entendiera una instrucción.

### Cambio aplicado

Se cambió el idioma principal del flujo a inglés simple. Los textos principales de inicio, onboarding, dashboard, práctica, evaluación, resultado, niveles, módulo asignado y configuración ahora usan microcopy directo como:

- `Take placement test`
- `Start from A1`
- `Choose one answer`
- `Back to levels`
- `Cancel placement test`
- `Your level result`

El inglés se mantiene simple para usuarios A1/A2: frases cortas, verbos comunes e instrucciones accionables.

### Selector de idioma

Se agregó `js/i18n.js` como capa i18n estática. El selector visible permite cambiar entre:

- `English`
- `Español`

La preferencia se guarda en:

`shimiLanguage = "en" | "es"`

El selector se monta automáticamente en las páginas principales y aplica textos mediante atributos como `data-i18n`, `data-i18n-html`, `data-i18n-aria` y `data-i18n-placeholder`.

### Apoyo en español

El idioma principal es inglés, pero las actividades iniciales y el feedback pueden mostrar apoyo breve en español. El apoyo no reemplaza el aprendizaje en inglés; solo reduce confusión en reglas clave.

Ejemplo:

English feedback:

`With he / she / it, we add -s or -es in the present simple. “Go” changes to “goes”.`

Spanish support:

`Apoyo: con he / she / it se agrega -s o -es.`

El apoyo está en `supportEs`, `data-support-es` o `data-explanation-es`, según el tipo de pantalla.

### Heurísticas mejoradas

**Match between system and real world:** la app enseña inglés usando inglés real y simple desde la interfaz.

**User control and freedom:** el usuario puede cambiar entre English y Español sin perder progreso.

**Recognition rather than recall:** los botones siguen siendo explícitos; no se depende de iconos ambiguos.

**Help and documentation:** las reglas y apoyos breves en español ayudan cuando una instrucción puede bloquear a principiantes.

**Error prevention:** el usuario falla por el contenido de inglés, no por no entender la interfaz.

**Aesthetic and minimalist design:** el apoyo en español es breve y contextual; no se duplican párrafos largos en pantalla.

### Archivos modificados

- `js/i18n.js`
- `js/learning-data.js`
- `css/style.css`
- `index.html`
- `pages/onboarding.html`
- `pages/dashboard.html`
- `pages/lesson.html`
- `pages/exercise.html`
- `pages/evaluation.html`
- `pages/result.html`
- `pages/levels.html`
- `pages/level-practice.html`
- `pages/settings.html`

### Limitaciones restantes

La traducción cubre el flujo principal. Las páginas antiguas o secundarias que no sostienen el flujo actual, como `completion.html`, `feedback.html`, `login.html` y `register.html`, pueden conservar texto legado si se abren fuera de la ruta principal.

El soporte bilingüe es estático y depende de `localStorage`. No hay detección automática del idioma del navegador ni contenido remoto.

Algunos feedbacks muestran la regla principal en inglés y un apoyo breve en español; no se duplicó todo el contenido pedagógico en español para evitar saturación visual.
