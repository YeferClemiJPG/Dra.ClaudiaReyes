# CLEMI · Contexto de diseño local

## Dirección editorial aprobada · depuración en revisión

El usuario aprobó el estilo editorial fotográfico y pidió depurarlo. La implementación mantiene Times New Roman, crema/perla, azul marino y dorado. La portada concentra nombre, cargos, retrato e ilustración; la fotografía queda a la derecha en escritorio y antes del nombre en móvil. Siguen Trayectoria con biografía y galería, Conexiones con tres tarjetas y Contacto al final. Se retiraron especialidad separada, llamadas a la acción de portada, QR de cabecera y fotografía, barra móvil fija y credencial alternativa.

Las cuatro imágenes auténticas de Claudia y la fotografía institucional permanecen intactas. La biografía conserva 48 palabras y la galería respeta textos integrados y transcripción accesible. Se eliminaron credenciales repetidas, reclamos y nombres de usuario redundantes fuera de las imágenes. El pie presenta el lema exacto una vez y reúne fuentes AAOT/SCCOT y créditos en un elemento `details` nativo. El texto semántico de acciones y secciones coincide con su función.

Las dos fotografías de Trayectoria se amplían en un diálogo nativo con fondo difuminado, descripción accesible, cierre por Escape, botón o clic exterior y retorno de foco. No se alteran los archivos originales. En navegador se comprobaron ambas imágenes con proporción correcta, bloqueo del desplazamiento y las tres formas de cierre con retorno de foco.

Las ilustraciones autorizadas tienen funciones distintas: `scienceIllustration`, pie y libro, solo en portada; `researchIllustration`, microscopio, solo en portafolio. `institutionalPhoto` aporta la fotografía de formación a Fundación CLEMI. Ningún retrato o logo se ha generado; el microscopio tampoco representa equipamiento institucional verificado. El antiguo `portfolioArtwork` es histórico. `docs/RECURSOS_ACTIVOS.md` conserva archivos, procedencia, integridad y prompts. Cuatro SVG originales de dos tonos forman la familia de contacto, sin dependencias nuevas.

Contacto concentra guardar, WhatsApp, QR, correo y teléfono, accesibles desde la navegación y el enlace de salto. El diálogo sigue siendo claro, con Escape y retorno de foco. Los títulos entran durante 750 ms de `translateY(100%)` a `0`, con desenfoque de 3 a 0 px; paneles y retrato usan 620 y 900 ms. Contacto y Conexiones elevan la tarjeta seleccionada y atenúan sus hermanas con desenfoque de 1,6 px y opacidad 0,6. Ratón fino y teclado activan el efecto, con prioridad del teclado; toque y movimiento reducido evitan estados persistentes. La reducción de movimiento elimina desplazamientos y desenfoque.

Se realizó una consulta MCP real de [Focus Cards](https://21st.dev/@manuarora700/components/focus-cards), solo de metadatos y sin instalar componentes. El CLI 21st sigue sin estar instalado; el contexto se mantiene manualmente. `npm run verify` y `npm run export:preview` pasaron. El navegador real se revisó a 320, 390, 768 y 1440 px sin desbordamiento ni imágenes con `src` rotas; portada sin acciones, visor, QR, copia y fuentes comprobados. La exportación autónoma carga imagen ampliada, vCard y QR integrados, con apertura/cierre del QR y sin errores ni advertencias de consola. Los veintiséis diagnósticos de arnés siguen correctos. El navegador respeta su preferencia activa de movimiento reducido; el movimiento normal se validó mediante arnés, sin observarlo en navegador. `docs/CONTINUIDAD.md` conserva los límites y separa la versión anterior `afb2f47`. Se mantiene `noindex, nofollow`, con Hostinger y publicación pendientes.

Las tres exploraciones siguientes y el Figma oscuro son antecedentes históricos. No representan la implementación actual ni acreditan una selección del usuario entre aquellas maquetas.

## Exploración histórica · tres propuestas claras

La nueva petición explícita del usuario sustituye el fondo oscuro histórico por una landing clara, elegante, formal y con detalles futuristas discretos. Se conservan Times New Roman, crema/perla institucionales, azul marino, acentos dorados, los datos reales y los recursos originales. El estado de las tres alternativas es **propuesto**: «Editorial luminosa» es la recomendación del asistente y la base implementada para revisión, no una elección ya realizada por el usuario.

Aquella propuesta situaba la fotografía principal a la derecha con aproximadamente el 56 % de la portada; en móvil la fotografía precedía al nombre. Incluía QR flotante sobre el retrato, diálogo claro, entradas de títulos de 700 ms, paneles de 620 ms y retrato de 900 ms, con movimiento reducido. El adjunto de Instagram se incorporó íntegro desde `assets/claudia-reyes-instagram.png`, sin regeneración.

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

En aquella exploración se consultaron metadatos reales del catálogo: no se instaló código, no se añadieron dependencias y no se utilizaron generación de IA ni créditos nuevos. Esta afirmación describe esa etapa anterior; la ilustración decorativa de la composición fotográfica actual sí fue generada con autorización. El contexto se mantiene manualmente.

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
