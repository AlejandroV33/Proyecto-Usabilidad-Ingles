# Análisis de Usabilidad y Accesibilidad (Proyecto Shimi)

El proyecto **Shimi** demuestra un compromiso sobresaliente con la experiencia del usuario (UX) y la accesibilidad. La estructura de su código, los estilos CSS y la interactividad en JavaScript están cuidadosamente diseñados no solo para lucir visualmente atractivos, sino para garantizar que cualquier tipo de usuario pueda interactuar con la plataforma sin barreras.

A continuación, se detalla por qué la aplicación tiene una excelente usabilidad y se analiza su cumplimiento respecto a las Pautas de Accesibilidad para el Contenido Web (**WCAG**).

---

## 1. Usabilidad General

La plataforma posee una alta usabilidad debido a la aplicación coherente de heurísticas de diseño:

- **Prevención de errores y retroalimentación:** Cuando un usuario se equivoca, la aplicación no solo indica que falló, sino que ofrece una vista dedicada (`feedback.html`) y un componente visual (`retry.html`) que le explica **por qué** y le muestra la respuesta correcta.
- **Claridad de estado del sistema:** Barras de progreso, un temporizador visual que cambia de color según la urgencia y notificaciones con el estado del reconocimiento de voz mantienen al usuario al tanto de lo que está ocurriendo en todo momento.
- **Flexibilidad y eficiencia:** La opción de "saltar" ejercicios que requieren micrófono y la opción de deshabilitar el límite de tiempo permiten adaptar el flujo a las circunstancias y preferencias individuales del usuario, aliviando la carga cognitiva y de frustración.
- **Diseño estético y minimalista:** La interfaz emplea un espaciado adecuado (tokens CSS como `var(--spacing-md)`), colores agradables que transmiten rápidamente el resultado de la acción (verde para éxito, rojo para error, naranja primario para acciones) y microinteracciones fluidas (botones interactivos, transiciones).

---

## 2. Cumplimiento de WCAG (Los 4 Principios)

Las pautas WCAG se fundamentan en cuatro principios (POUR: Perceptible, Operable, Comprensible y Robusto). El proyecto integra múltiples técnicas A y AA para cumplirlos.

### A. Perceptible
*La información y los componentes de la interfaz de usuario deben presentarse de manera que los usuarios puedan percibirlos.*

* **Contraste de colores (WCAG 1.4.3):** El archivo `style.css` contiene ajustes documentados explícitamente para cumplir la ratio mínima de contraste AA (por ejemplo, oscureciendo colores de bordes y textos sutiles a ratios como 4.6:1 y 3.1:1 sobre blanco).
* **Uso de ARIA-Live y roles de Alerta:** El uso intensivo de `aria-live="polite"` y `role="alert"` asegura que los lectores de pantalla anuncien información dinámica que cambia sin recargar la página (por ejemplo, alertas al validar, progreso de carga, y tiempo del contador regresivo en 60s, 30s y 10s).
* **Independencia del color (WCAG 1.4.1):** Las alertas de los botones y estados no dependen solo del color. Por ejemplo, al seleccionar o errar una respuesta, el botón modifica no solo el color de fondo, sino el contorno, aplica sombra (o la quita), transformaciones (CSS) y en algunos casos íconos acompañantes.
* **Ocultación de elementos decorativos (WCAG 1.1.1):** Todos los íconos visuales secundarios (`<i class="fas fa-*">`) tienen el atributo `aria-hidden="true"` para que los lectores de pantalla no lean caracteres innecesarios.

### B. Operable
*Los componentes de la interfaz de usuario y la navegación deben ser operables por diferentes dispositivos (incluyendo teclado).*

* **Navegación por teclado y Foco visible (WCAG 2.1.1, 2.4.7):** Todos los elementos interactivos (opciones, chips de palabras y acciones) usan etiquetas `<button>`, en vez de `<div>`, lo que los hace navegables y activables con teclado por defecto. Además, la clase `:focus-visible` está estilizada para garantizar que siempre haya un contorno (`outline`) de 3px altamente visible para quien navega con tabulador.
* **Enlace de salto "Skip to main content" (WCAG 2.4.1):** En cada página se incluye un enlace `.skip-link` oculto visualmente que permite a los usuarios de teclado saltar rápidamente el encabezado y barra de progreso, pasando directamente al contenido principal de la lección.
* **Tamaño del objetivo táctil (WCAG 2.5.8):** Los botones, chips, `<input>` y elementos interactivos están diseñados intencionadamente con una altura mínima de `44px` (`min-height: 44px;`), cumpliendo así el estándar de áreas de pulsación en pantallas táctiles y previniendo pulsaciones accidentales.
* **Reducción de movimiento (WCAG 2.3.3):** La regla `@media (prefers-reduced-motion: reduce)` está implementada globalmente, inhabilitando o minimizando animaciones para prevenir problemas a personas con trastornos vestibulares o sensibilidad al movimiento.
* **Temporizador ajustable (WCAG 2.2.1):** El temporizador de la actividad es configurable, respetando el perfil del usuario para desactivarlo si es necesario para tener tiempo de lectura holgado.

### C. Comprensible
*La información y la operación de la interfaz deben ser comprensibles.*

* **Labels e Instrucciones claras (WCAG 3.3.2):** Los botones que carecen de texto tienen atributos `aria-label` descriptivos (ej. `aria-label="Exit exercise and return to lessons"` para el botón "X").
* **Mensajes de Prevención y Corrección (WCAG 3.3.3):** Las interfaces como `feedback.html` se centran en explicar claramente dónde estuvo el fallo proporcionando ejemplos correctos (feedback detallado en pantalla) sin hacer que el usuario adivine qué hizo mal.
* **Consistencia visual (WCAG 3.2.3):** El componente de cabecera que alberga los botones de retroceso/cierre, junto con la disposición del texto en pantalla, mantiene el mismo esquema y orden en páginas como `exercise.html`, `feedback.html` y `retry.html`, evitando sorpresas.

### D. Robusto
*El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de forma fiable por tecnologías de asistencia.*

* **Roles ARIA (WCAG 4.1.2):** Componentes visuales complejos son estructurados como semánticos. Por ejemplo, el indicador de progreso tiene `role="progressbar"`, con las propiedades necesarias como `aria-valuenow`, `aria-valuemin` y `aria-valuemax` inyectadas y actualizadas mediante JavaScript en vivo.
* **Estados y Propiedades Accesibles:** Botones presionados u opciones seleccionadas reciben atributos `aria-pressed="true"`, y elementos deshabilitados aplican tanto `disabled` a nivel de HTML como `aria-disabled="true"`.
* **Semántica HTML5 adecuada:** Todo el contenido agrupa bloques lógicos, tales como el uso de `<header>`, `<main>` y `<section>`, incluyendo el uso de los atributos `aria-labelledby` para identificar el propósito de un `<section>` apoyándose en un encabezado u otro ID.

