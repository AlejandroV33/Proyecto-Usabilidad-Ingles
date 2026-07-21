# Análisis de Heurísticas de Nielsen - Proyecto Shimi

Este documento detalla cómo la aplicación de aprendizaje de inglés **Shimi** cumple con las 10 heurísticas de usabilidad de Jakob Nielsen en su versión actual.

## 1. Visibilidad del estado del sistema
**Ejemplo:** En la pantalla de ejercicios, la **barra de progreso** superior se llena dinámicamente ("1/3 completed"). Además, existe un **temporizador visual** interactivo que disminuye e informa el tiempo restante, cambiando de color (verde a rojo) a medida que el tiempo se acaba, de modo que el usuario sepa siempre cuánto le queda.

## 2. Relación entre el sistema y el mundo real
**Ejemplo:** El uso de iconos familiares como el **rayo (bolt)** para la experiencia (XP) y el **micrófono** o **auriculares** para ejercicios auditivos y orales. El lenguaje utilizado ("Start lesson", "Try again", "Oops, almost there!") es natural, conversacional y evita tecnicismos de programación.

## 3. Control y libertad del usuario
**Ejemplo:** El botón de la **"X"** en la esquina superior izquierda permite abandonar la tarea. Para evitar salidas accidentales, despliega un **modal de confirmación** ("Are you sure you want to leave?"). También destaca la opción de **"Skip this exercise"** en las pruebas orales, otorgando libertad de avanzar en caso de que el usuario no pueda o no desee grabar audio.

## 4. Consistencia y estándares
**Ejemplo:** Todos los botones principales de llamada a la acción siguen el mismo estilo (naranja con sombra inferior y animaciones de "hundirse" al presionarse), los inputs mantienen formas coherentes, y la navegación y botones de cierre mantienen siempre el mismo color, tamaño de 44px (touch-friendly) e iconografía estándar de FontAwesome.

## 5. Prevención de errores
**Ejemplo:** Durante un ejercicio, el botón **"CHECK"** (revisar) permanece deshabilitado hasta que el usuario efectivamente seleccione una opción, ordene las palabras o grabe audio. Esto previene completamente que los usuarios envíen una respuesta vacía o incompleta por accidente. El modal de salida previene también pérdidas involuntarias del progreso.

## 6. Reconocimiento antes que recuerdo
**Ejemplo:** En los ejercicios de gramática, las palabras elegidas quedan en el área de respuesta y simultáneamente se marcan visualmente como "usadas" (opacas y no clickeables) en el panel inferior, por lo que el usuario no tiene que recordar qué palabra usó ya. En la pantalla de niveles, los ya superados lucen un "check".

## 7. Flexibilidad y eficiencia de uso
**Ejemplo:** El sistema de "chips" en los ejercicios de gramática permite armar la frase de manera rápida e intuitiva, a diferencia de tener que tipear el texto completo en teclado de móvil. Existe también un botón **"Reset"** que permite borrar de un solo toque toda la frase armada, acelerando así el flujo si se desea reiniciar.

## 8. Estética y diseño minimalista
**Ejemplo:** La interfaz se enfoca solo en la actividad a resolver (una pregunta y sus opciones) y hace uso amplio del espacio en blanco (`padding` y `gap` generosos). Se evitan elementos superfluos, y pantallas enteras (`feedback.html`) se dedican solo a una pieza de información a la vez para no abrumar al usuario.

## 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores
**Ejemplo:** Si un usuario se equivoca, la aplicación lo redirige a una pantalla de retroalimentación constructiva (`feedback.html`). Allí se le indica que falló ("Oops, almost there!"), se le muestra de manera clara cuál era la respuesta correcta y se le ofrece una justificación del porqué en la sección **"Why?"** (explicación). Seguidamente, se le da la oportunidad de intentarlo de nuevo en `retry.html`.

## 10. Ayuda y documentación
**Ejemplo:** La ayuda es contextual, proveída en el momento de fallo mediante el bloque de explicaciones. Además, al inicio de diferentes tipos de ejercicios (como el Speaking), instrucciones breves orientan de inmediato sobre qué hacer de forma proactiva: "Tap 🎧 to listen, then 🎤 to speak", eliminando la necesidad de leer largos manuales para entender el sistema.
