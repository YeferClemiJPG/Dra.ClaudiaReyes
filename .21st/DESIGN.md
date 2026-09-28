# CLEMI · Contexto de diseño local

## Identidad y restricciones

Web estática: HTML, CSS y JavaScript con Vite; exportación relativa para Hostinger. Mantener Times New Roman y sus respaldos locales, tokens de `src/tokens.css`, símbolo CLEMI oficial sin texto y retrato auténtico. No añadir perfiles, métricas, retratos generados ni dependencias de componentes.

## Refinamiento propuesto · 28 de septiembre de 2026

El usuario solicita mejorar interacción y gráficos. Se conserva la estructura de perfil, banda de contacto, tres destinos y lema. Se aplica una jerarquía editorial con nombre en mayúscula inicial y apellido en cursiva, retrato sin alteración de píxeles, superficies metálicas discretas, tarjetas compactas en móvil y barra de acciones flotante. La propuesta queda disponible para revisión visual.

Las interacciones incluyen navegación de sección activa, foco visible, respuesta al puntero y teclado, apariciones una sola vez, confirmación visible de copia y diálogo de contacto con descarga y compartir vCard cuando el navegador lo admite. El movimiento reducido desactiva las animaciones y el seguimiento del puntero.

## Referencias consultadas mediante MCP

- [Spotlight Card de preetsuthar17](https://21st.dev/@preetsuthar17/components/spotlight-card): referencia para iluminación localizada de tarjetas.
- [Hover Detail Card de isaiahbjork](https://21st.dev/@isaiahbjork/components/hover-detail-card): referencia para estados de interacción y acciones legibles.

Solo se consultaron metadatos del catálogo. La implementación usa las dependencias existentes; no se descargó ni instaló código de estos componentes y no se utilizó generación de IA.

El ejecutable `21st` no está instalado en este entorno: `21st init --design-context` y `21st review` devolvieron «The term '21st' is not recognized». Este documento se mantiene manualmente; las comprobaciones de código y navegador se realizan con las herramientas del proyecto.

## Segunda iteración: composición y transiciones

Ante la nueva solicitud de un acabado más profesional, se sustituye el borde difuminado del retrato principal por un único marco rectangular fino, conservando el JPEG. El portafolio ocupa la columna principal y las redes se apilan a su lado; en móvil vuelven al flujo vertical. Iconos de contacto, radios y tiempos de controles comparten criterios visuales. Se mantienen los textos, la fotografía y todos los destinos originales.

La entrada de la portada se escalona por líneas completas, roles y acciones (0–340 ms de retraso); duración de 480 ms para texto y 680 ms para fotografía. El diálogo entra en 320 ms, sale en 180 ms y conserva foco y bloqueo de desplazamiento hasta completar el cierre. Al activar movimiento reducido se cancelan y limpian animaciones pendientes. No hay animaciones continuas.

Nuevas consultas reales de MCP 21st:

- [Bento Card de 0xUrvish](https://21st.dev/@0xUrvish/components/bento-card): referencia de composición asimétrica.
- [Stagger Reveal Grid de pulkitxm](https://21st.dev/@pulkitxm/components/stagger-reveal-grid): referencia de entradas coordinadas.

Se consultaron solo metadatos, sin instalar componentes ni utilizar generación con IA.
