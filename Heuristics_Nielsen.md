# Análisis de Heurísticas de Nielsen - Proyecto Shimi

Este documento detalla cómo la aplicación de aprendizaje de inglés **Shimi** cumple con las 10 heurísticas de usabilidad de Jakob Nielsen.

## 1. Visibilidad del estado del sistema
**Ejemplo:** En la pantalla de ejercicios, la **barra de progreso** superior se llena dinámicamente (ej. "1/3 completed") y cambia su ancho en tiempo real. Esto permite que el usuario sepa exactamente cuánto le falta para terminar la lección.

## 2. Relación entre el sistema y el mundo real
**Ejemplo:** El uso de iconos familiares como el **rayo (bolt)** para la experiencia (XP) y el **trofeo** para la finalización del nivel. El lenguaje utilizado ("Start lesson", "Try again") es natural y directo, evitando tecnicismos.

## 3. Control y libertad del usuario
**Ejemplo:** El botón de la **"X"** en la esquina superior izquierda en los ejercicios y ajustes. Permite al usuario abandonar una tarea o salir de una pantalla en cualquier momento sin procesos complicados, devolviéndolo a la pantalla de niveles.

## 4. Consistencia y estándares
**Ejemplo:** Todos los botones principales siguen el mismo estilo (naranja con sombra 3D) y los botones secundarios tienen el mismo borde gris. La navegación siempre se encuentra en la parte superior o inferior de forma predecible.

## 5. Prevención de errores
**Ejemplo:** En el formulario de registro, el campo de contraseña tiene un `minlength="8"`, y el botón de "REGISTER" se deshabilita mientras se procesa la solicitud, evitando múltiples clics accidentales o registros incompletos.

## 6. Reconocimiento antes que recuerdo
**Ejemplo:** En la pantalla de niveles, los niveles completados muestran un **check verde**. El usuario no tiene que recordar qué niveles hizo; el sistema le muestra visualmente su progreso y resalta el nivel actual con el texto "Start".

## 7. Flexibilidad y eficiencia de uso
**Ejemplo:** El sistema de "chips" en los ejercicios de gramática. Permite a los usuarios avanzados armar la frase rápidamente haciendo clic en las palabras, y permite corregir fácilmente haciendo clic en la palabra seleccionada para devolverla al grupo inicial.

## 8. Estética y diseño minimalista
**Ejemplo:** La interfaz utiliza mucho espacio en blanco, tipografía clara y evita elementos innecesarios. Las pantallas de Onboarding y Feedback solo muestran la información crítica necesaria para esa tarea específica.

## 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores
**Ejemplo:** Si un usuario falla un ejercicio, aparece un **alert o mensaje** que no solo dice "Error", sino que muestra la respuesta correcta (ej: "The correct answer was: put off") para que el usuario aprenda y pueda continuar.

## 10. Ayuda y documentación
**Ejemplo:** En el ejercicio de gramática, se incluyó un pequeño **"Tip"** de ayuda: "(Tip: Use 'Hardly had...' inversion for B1/B2 level)". Esto proporciona ayuda contextual justo cuando el usuario la necesita para resolver un reto avanzado.
