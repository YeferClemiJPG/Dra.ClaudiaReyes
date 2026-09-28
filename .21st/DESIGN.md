# CLEMI · Contexto de diseño local

## Etapa vigente · Trayectoria completa y encuadre ampliado

La corrección solicitada recupera dentro de Trayectoria «Dra. Claudia Reyes», «Cirujana de pie y tobillo» y «@draclaudiajreyes» como texto HTML. El nombre tiene acabado dorado y el usuario de Instagram conserva su enlace. Se mantienen el título de sección y la biografía profesional; la cita «La cirugía es ciencia, arte y responsabilidad…» continúa retirada.

El activo vigente es `biographyBanner` → `assets/claudia-trayectoria-banner-v2.png` (1774 × 887), editado mediante relleno generativo desde el adjunto editorial original. La nueva composición reserva margen sobre la cabeza y alrededor de los hombros; el retrato ocupa aproximadamente el 8–44 % izquierdo. El original y `claudia-trayectoria-banner.png` permanecen intactos como históricos. La edición conserva la identidad visual, sin afirmar igualdad de píxeles. Prompt y procedencia en `docs/RECURSOS_ACTIVOS.md`.

En escritorio la imagen se muestra con anchura completa y altura automática dentro de la cuadrícula; no se amplía para cubrir la altura del texto. Hasta 900 px, una ventana cuadrada alineada arriba a la izquierda muestra la mitad izquierda del lienzo, con un máximo de 440 px, seguida del texto dentro del mismo banner redondeado. El fondo morado y las máscaras con `mask-composite: intersect` suavizan también los bordes laterales y unen retrato y contenido sin un corte anatómico abrupto. No reintroducir las alturas fijas ni los desplazamientos de recorte de la versión anterior.

`npm run verify` y `npm run export:preview` pasaron tras esta corrección. Desarrollo revisado a 1280, 1440, 320 y 768 px: identidad accesible correcta, retrato con cabello, mano y hombros completos; sin desbordamiento en 1280/320/768 px ni imágenes rotas en 1280/320 px. A 768 px, unión lateral sin línea visible y consola sin errores ni advertencias. El HTML autónomo se regeneró y se comprobó por contenido: copia de entrega exacta, PNG integrado idéntico y tres textos recuperados presentes. No hubo revisión visual del archivo autónomo porque el navegador bloqueó `file:`. Las pruebas de diálogo y descargas de la etapa siguiente son históricas y no se repitieron; no cambia el JavaScript de interacción. Portafolio, Contacto y lema se conservan.

También se revisó 1000 px: sin desbordamiento y con ratio real 2:1 de la imagen aunque el bloque de texto sea más alto, sin ampliación ni recorte adicional.

## Etapa anterior · Banner de Trayectoria, portafolio y contacto simplificado

La petición actual incorpora un banner morado ancho de Trayectoria, una carpeta de portafolio y una sola burbuja de WhatsApp con el SVG oficial superpuesto. Título y biografía son HTML a la derecha; en móvil, imagen arriba y texto abajo dentro del mismo panel. Se retiran la galería y su visor. Guardar contacto abre el diálogo QR con descarga y compartir dentro; Contacto conserva cuatro acciones. El pie muestra únicamente el lema exacto centrado, dorado y con animación finita, sin fuentes, créditos, botón de movimiento ni volver arriba.

La autorización explícita sustituye la restricción anterior de no editar generativamente retratos para este banner concreto. Se conserva visualmente la apariencia y pose de Claudia, pero no se afirma identidad de píxeles: es una edición generativa, no la fotografía original sin editar. El adjunto editorial original permanece intacto como histórico. El logo oficial, el retrato principal y el adjunto de Instagram no se modifican.

Activos nuevos: biographyBanner → assets/claudia-trayectoria-banner.png (1774 × 887), portfolioIllustration → assets/clemi-portfolio-sculpture.png (1254 × 1254) y assets/contact-whatsapp-sculpture-v2.png (1254 × 1254). La carpeta sustituye al microscopio y la burbuja única sustituye al soporte doble. Prompts y procedencia en docs/RECURSOS_ACTIVOS.md; entrega en CLEMI_Banner_Portafolio_WhatsApp.md.

src/editorial-banner.css se carga después de src/liquid-glass.css. Las fuentes y licencias permanecen en docs/THIRD_PARTY_NOTICES.md.

motion-preference.js permanece activo sin botón visible: aplica la preferencia local guardada en clemi-motion o, por defecto, la del sistema. No se cambian ajustes del sistema. Todas las animaciones son finitas y se conserva movimiento reducido.

Consulta MCP real: portrait biography editorial banner. Referencias: [Hero 07](https://21st.dev/@felipemenezes098/components/hero-07), [Hero 04](https://21st.dev/@felipemenezes098/components/hero-04) y [Hero 05](https://21st.dev/@felipemenezes098/components/hero-05), solo metadatos y sin instalar componentes.

Validación de esta etapa completada: npm run verify y export:preview pasaron tras los refinamientos finales, al igual que las 14 pruebas de dialog-transition-check.mjs sobre el main actual. Navegador administrado a 1440/320 px y HTML autónomo a 768 px sin desbordamiento ni imágenes rotas. Guardar contacto abre el QR; Escape cierra y devuelve el foco al botón en desarrollo y exportación. Las descargas VCF de ambos entornos coinciden por SHA-256 y texto con public/contacto.vcf. Los tres activos nuevos están integrados en el HTML autónomo; pie centrado y controles retirados comprobados. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes; no se publica.

## Etapa anterior · protagonismo metalizado y teléfono corregido

La petición actual da mayor presencia al nombre y los cargos, refina los encabezados y secciones con resplandor elegante y corrige el teléfono. `h1.hero-name` aumenta de tamaño, los cargos usan 18–25 px con filo dorado y los textos combinan gradientes legibles azul marino/oro. `title-metalwork.svg` aporta cintas satinadas originales sin IA y sustituye la hoja histórica. El smartphone transparente `contact-phone-sculpture-v2.png` reemplaza al auricular, que se conserva como antecedente.

El resplandor finito de secciones y encabezados dura 850 ms al entrar o llegar mediante ancla; el brillo de texto mantiene 1150 ms. Se elimina el conflicto de `text-arrival` con `transform` y `filter` de Motion, conservando navegación y preferencia local. Verificación y exportación pasaron: desarrollo a 1440/320 px y archivo autónomo a 768 px sin desbordamiento ni imágenes rotas; consola exportada limpia, teléfono v2 y cintas integrados como datos. El relleno inferior de 0,14 em corrige descendentes. Pausa móvil sin animaciones y resplandor real de Contacto con foco en su título comprobados; quedó `full` reactivado. JavaScript no cambió y los catorce diagnósticos anteriores no se repitieron. Fotografías, logo, datos y ausencia de flechas se conservan.

Consulta MCP real: `metallic text shimmer glow elegant heading`. Referencias: [Shimmering Text](https://21st.dev/@ElevenLabs-crawled/components/shimmering-text), [Animated Shiny Text](https://21st.dev/@dillionverma/components/animated-shiny-text) y [Shimmer Text](https://21st.dev/@tom_ui/components/shimmer-text), solo metadatos, sin instalar componentes.

## Etapa anterior · Contacto con cristal y ondas doradas

El usuario pidió un acabado de cristal líquido para Contacto, ondas doradas de fondo, recursos generados que sustituyan los pictogramas, texto más cuidado y eliminación de todas las flechas. El fondo y las cinco esculturas están terminados, revisados e integrados, con copias intactas. La autorización explícita amplía el alcance anterior de IA a estos seis recursos decorativos, sin retratos ni marcas generados.

`src/liquid-glass.css` aporta desenfoque de fondo de 19 px, saturación 1,35, reflejo de puntero, bisel y barrido de brillo de 950 ms. Los títulos combinan entrada de 950 ms, máscara, rotación sutil y brillo de 1150 ms, con limpieza de estilos al terminar. Las ondas se muestran mediante una imagen decorativa `contact-waves` con `alt=""` y carga diferida, integrada en el HTML exportado. `npm run verify` y catorce diagnósticos JavaScript pasaron; Contacto se comprobó a 1440/320 px en desarrollo y 768 px en exportación sin desbordamiento ni imágenes con `src` rotas. QR, copia, cero flechas y consola sin errores ni advertencias verificados. La captura de la exportación regenerada confirma ondas y cristal; los entregables están actualizados.

Las tarjetas mantienen etiquetas y acciones legibles. El QR escaneable real y el símbolo oficial de WhatsApp se superponen sobre sus soportes; las imágenes generadas no los sustituyen. Fotografías, datos, logo, tipografía y preferencia local de animación se conservan. No se instalan componentes ni dependencias y no se publica. Procedencia en `docs/RECURSOS_ACTIVOS.md`; las comprobaciones siguientes son de etapas anteriores.

## Etapa anterior · navegación y decoración editorial

El usuario pidió desplazamiento animado entre secciones, títulos decorados y un fondo moderno y elegante; confirmó activar animaciones solo en esta landing. La etapa está implementada y validada. Conserva Times, contenido depurado, fotografías y logo. Añade gradientes perla/marfil/azul marino, contornos SVG originales, paneles translúcidos en Trayectoria y Contacto e inicial dorada cursiva con detalle botánico lineal en títulos y portada, sin texto adicional.

Los enlaces internos recorren la página con RAF y curva cúbica de 460–1100 ms, conservando historial, cancelación y foco. La rueda sigue siendo nativa. La llegada anima la floritura durante 850 ms y la cabecera muestra el progreso. El botón «Activar/Pausar animaciones» guarda `clemi-motion` en el origen y controla `html[data-motion]`; respeta el sistema por defecto, admite la activación explícitamente autorizada y permite pausar sin modificar otras aplicaciones o sitios.

Consulta MCP real: `scroll reveal elegant heading background lines`. Referencias de metadatos: [Rectangular Text Reveal](https://21st.dev/@hyperiux/components/rectangular-text-reveal), [TextReveal](https://21st.dev/@cnippet-dev/components/text-reveal) y [DualWipeReveal](https://21st.dev/@soralabs/components/dual-wipe-reveal). No se instalaron componentes ni dependencias ni se generaron imágenes con IA en esta etapa. `editorial-contours.svg` y `title-flourish.svg` son vectores originales; su procedencia está en `docs/RECURSOS_ACTIVOS.md`.

`npm run verify` y `npm run export:preview` pasaron; navegador a 320/872/1440 px y exportación a 768 px sin desbordamiento. Ambos SVG están integrados en el CSS autónomo. Se activaron animaciones con el control autorizado: persistencia al recargar, pausa efectiva y reactivación comprobadas; queda modo activo. Se observó movimiento real entre secciones con foco y posición finales correctos, y selección por teclado con desenfoque de tarjetas hermanas. QR autónomo, Escape y retorno de foco comprobados, sin advertencias ni errores de consola. Pasaron quince diagnósticos nuevos, doce del diálogo y uno de reanudación de apariciones. El detalle está en `docs/CONTINUIDAD.md`; la limitación anterior de movimiento normal solo por arnés es histórica.

## Etapa anterior · depuración editorial anterior

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
