# CLEMI · Contexto de diseño local

## Dirección vigente en revisión · exploración clara

La nueva petición explícita del usuario sustituye el fondo oscuro histórico por una landing clara, elegante, formal y con detalles futuristas discretos. Se conservan Times New Roman, crema/perla institucionales, azul marino, acentos dorados, los datos reales y los recursos originales. El estado de las tres alternativas es **propuesto**: «Editorial luminosa» es la recomendación del asistente y la base implementada para revisión, no una elección ya realizada por el usuario.

La propuesta actual sitúa la fotografía principal a la derecha con aproximadamente el 56 % de la portada; en móvil la fotografía precede al nombre. Incluye QR flotante sobre el retrato, diálogo claro, entradas de títulos de 700 ms, paneles de 620 ms y retrato de 900 ms, con movimiento reducido. El adjunto de Instagram se usa íntegro desde `assets/claudia-reyes-instagram.png`, sin regeneración.

### Tres direcciones comparables

- **Editorial luminosa:** nombre a la izquierda, fotografía grande a la derecha y banda de contacto independiente; tres accesos gráficos posteriores. Prima equilibrio institucional y lectura. En móvil, fotografía primero. Riesgo a revisar: encuadre y longitud de la portada, manteniendo texto ampliable. **Recomendada por el asistente.**
- **Retrato inmersivo:** fotografía como campo visual principal, nombre superpuesto sobre transición clara, navegación compacta y contacto horizontal sobre azul. Prima presencia personal. Riesgo: contraste del texto sobre imagen y adaptación de la superposición a móvil.
- **Galería modular:** nombre centrado, retrato central, contacto lateral y destinos distribuidos en módulos asimétricos. Prima acceso simultáneo a acciones en escritorio. Riesgo: densidad y orden de lectura; móvil reorganiza los módulos en una columna.

Cambian composición, jerarquía y ubicación de acciones; no son variaciones exclusivamente de color. La comparación autónoma `Claudia_Reyes_Exploracion.html` contiene selector accesible, notas, datos reales, descarga vCard y diálogo QR. No forma parte del código de producción. El Figma histórico oscuro no está sincronizado con estas propuestas.

### Referencias consultadas mediante MCP en esta etapa

- [Editorial Collage Hero](https://21st.dev/@felipemenezes098/components/hero-04): dos columnas, serif y fotografía; referencia de Editorial luminosa.
- [Editorial Image Hero](https://21st.dev/@felipemenezes098/components/hero-07): fotografía ancha como campo principal; referencia de Retrato inmersivo.
- [BentoGrid](https://21st.dev/@kokonutd/components/bento-grid): organización modular y asimétrica; referencia de Galería modular y accesos de Editorial luminosa.
- [TextReveal](https://21st.dev/@cnippet-dev/components/text-reveal): orientación para revelado de títulos.

Se consultaron metadatos reales del catálogo: no se instaló código, no se añadieron dependencias y no se utilizaron generación de IA ni créditos nuevos. La exploración y su contexto se mantienen manualmente. Las secciones siguientes documentan las iteraciones históricas.

## Identidad y restricciones

Web estática: HTML, CSS y JavaScript con Vite; exportación relativa para Hostinger. Mantener Times New Roman y sus respaldos locales, tokens de `src/tokens.css`, símbolo CLEMI oficial sin texto y retrato auténtico. No añadir perfiles, métricas, retratos generados ni dependencias de componentes.

## Refinamiento histórico · 28 de septiembre de 2026

El usuario solicita mejorar interacción y gráficos. Se conserva la estructura de perfil, banda de contacto, tres destinos y lema. Se aplica una jerarquía editorial con nombre en mayúscula inicial y apellido en cursiva, retrato sin alteración de píxeles, superficies metálicas discretas, tarjetas compactas en móvil y barra de acciones flotante. La propuesta queda disponible para revisión visual.

Las interacciones incluyen navegación de sección activa, foco visible, respuesta al puntero y teclado, apariciones una sola vez, confirmación visible de copia y diálogo de contacto con descarga y compartir vCard cuando el navegador lo admite. El movimiento reducido desactiva las animaciones y el seguimiento del puntero.

## Referencias consultadas mediante MCP

- [Spotlight Card de preetsuthar17](https://21st.dev/@preetsuthar17/components/spotlight-card): referencia para iluminación localizada de tarjetas.
- [Hover Detail Card de isaiahbjork](https://21st.dev/@isaiahbjork/components/hover-detail-card): referencia para estados de interacción y acciones legibles.

Solo se consultaron metadatos del catálogo. La implementación usa las dependencias existentes; no se descargó ni instaló código de estos componentes y no se utilizó generación de IA.

El ejecutable `21st` no está instalado en este entorno: `21st init --design-context` y `21st review` devolvieron «The term '21st' is not recognized». Este documento se mantiene manualmente; las comprobaciones de código y navegador se realizan con las herramientas del proyecto.

## Segunda iteración histórica: composición y transiciones

Ante la nueva solicitud de un acabado más profesional, se sustituye el borde difuminado del retrato principal por un único marco rectangular fino, conservando el JPEG. El portafolio ocupa la columna principal y las redes se apilan a su lado; en móvil vuelven al flujo vertical. Iconos de contacto, radios y tiempos de controles comparten criterios visuales. Se mantienen los textos, la fotografía y todos los destinos originales.

La entrada de la portada se escalona por líneas completas, roles y acciones (0–340 ms de retraso); duración de 480 ms para texto y 680 ms para fotografía. El diálogo entra en 320 ms, sale en 180 ms y conserva foco y bloqueo de desplazamiento hasta completar el cierre. Al activar movimiento reducido se cancelan y limpian animaciones pendientes. No hay animaciones continuas.

Nuevas consultas reales de MCP 21st:

- [Bento Card de 0xUrvish](https://21st.dev/@0xUrvish/components/bento-card): referencia de composición asimétrica.
- [Stagger Reveal Grid de pulkitxm](https://21st.dev/@pulkitxm/components/stagger-reveal-grid): referencia de entradas coordinadas.

Se consultaron solo metadatos, sin instalar componentes ni utilizar generación con IA.
