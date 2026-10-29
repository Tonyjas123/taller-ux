# Auditoría y Rediseño UX/UI - Proyecto Formulario Taller UX

## 1. Tabla de Auditoría Heurística de Jakob Nielsen

| Heurística de Nielsen                            | Problema en la Pantalla Original                                                                                    | Solución Aplicada en el Rediseño                                                                                                                |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Visibilidad del estado del sistema**        | Al enviar el formulario, la interfaz no indicaba qué estaba pasando, generando dudas sobre si la acción se realizó. | Se deshabilita el botón, se cambia el texto a "Enviando..." y se muestra una alerta visual dinámica ("Enviando tu inscripción...", "¡Listo!").  |
| **2. Relación entre el sistema y el mundo real** | Uso de términos técnicos y etiquetas ambiguas o ausentes en los campos de entrada.                                  | Se usó un lenguaje claro y cercano con instrucciones legibles, iconos y etiquetas descriptivas (`<label>`) asociadas directamente a cada campo. |
| **3. Control y libertad del usuario**            | El usuario no tenía forma rápida de deshacer o reiniciar sus datos en caso de cometer un error en el formulario.    | Se implementó un botón funcional de reinicio (`type="reset"`) para limpiar campos de forma controlada sin perder la estructura.                 |
| **4. Consistencia y estándares**                 | Botones de tamaño irregular, contraste deficiente e inconsistencia en márgenes y tipografías.                       | Se definieron variables CSS globalizadas en `:root`, espaciados consistentes y un solo título principal `<h1>`.                                 |
| **5. Prevención de errores**                     | Se permitía intentar enviar el formulario vacío, mostrando mensajes de error solo después de fallar.                | Se añadió validación en tiempo real (`checkValidity()`), deshabilitado proactivo, atributos `required` y reglas CSS con la clase `.validado`.   |

---

## 2. Justificación por Leyes de UX

- **Ley de Fitts:** Se aumentó el tamaño del botón principal a más de 44px de altura con un área de clic extendida al 100% en pantallas móviles para facilitar el toque dinámico con los dedos.
- **Ley de Hick:** Se redujo la cantidad de campos obligatorios y se simplificaron las opciones del menú desplegable (`<select>`) para acelerar la toma de decisiones del usuario.
- **Ley de Miller:** Se agrupó la información del formulario en 2 secciones lógicas mediante delimitadores visuales (`1. Tus datos` y `2. Tu taller`), evitando saturar la memoria a corto plazo del usuario.

---

## 3. Accesibilidad y Rendimiento (Lighthouse)

### Puntajes Obtenidos

- **Antes del Rediseño:** ~72 / 100 en Accesibilidad (Falta de contraste, etiquetas desaparecidas, sin indicador visual de foco).
- **Después del Rediseño:** **100 / 100** en Accesibilidad (Campos con `<label>` explícito, imágenes con `alt`, contraste $\ge 4.5:1$ y `:focus-visible` definido).

_(Insertar aquí las capturas de pantalla de Lighthouse pre y post-rediseño)_
