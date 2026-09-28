# Dirección visual CLEMI

## Etapa vigente · Trayectoria completa y encuadre ampliado

Trayectoria recupera «Dra. Claudia Reyes», «Cirujana de pie y tobillo» y «@draclaudiajreyes» como HTML, además del título y la biografía profesional. El nombre usa el acabado dorado y el identificador enlaza al perfil real. La cita anterior sigue ausente. No se regeneran letras dentro de la imagen: identidad, especialidad y texto permanecen accesibles y adaptables.

`assets/claudia-trayectoria-banner-v2.png` (1774 × 887) es la versión activa, con relleno generativo desde el adjunto editorial original. Añade espacio alrededor de cabeza y hombros, con el sujeto aproximadamente en el 8–44 % izquierdo. Se conservan el original y el banner v1; el recurso nuevo es una edición generativa, no una fotografía sin cambios de píxeles. Procedencia y prompt en `docs/RECURSOS_ACTIVOS.md`.

La cuadrícula de escritorio presenta la imagen a su proporción natural, con altura automática, sin forzar `cover` según la altura del texto. Desde 900 px hacia abajo, una ventana 1:1 alineada arriba a la izquierda y limitada a 440 px muestra la mitad izquierda completa del lienzo. El retrato precede a los textos dentro del mismo panel morado de bordes redondeados. Las máscaras con `mask-composite: intersect` suavizan también los laterales y sustituyen el corte abrupto; deben permanecer visibles los márgenes anatómicos de la nueva composición.

`npm run verify` y `npm run export:preview` pasaron. Desarrollo revisado a 1280/1440/320/768 px, con nombre, especialidad e Instagram accesibles. Cabello, mano y hombros completos y unión lateral suave a 768 px; sin desbordamiento en 1280/320/768 px ni imágenes rotas en 1280/320 px, y consola de 768 px limpia. La exportación se validó por contenido: copia exacta, PNG integrado idéntico y tres textos recuperados. Su apertura visual mediante `file:` fue bloqueada por el navegador; no se atribuye una revisión visual del archivo. No se repitieron las pruebas de interacción históricas porque su JavaScript no cambia. El resto de la landing conserva su composición, recursos y movimiento.

La comprobación adicional a 1000 px confirmó ratio real 2:1 de la imagen aunque el texto sea más alto, sin ampliación, recorte adicional ni desbordamiento.

## Etapa anterior · Banner de Trayectoria, portafolio y contacto simplificado

La petición actual incorpora un banner morado ancho de Trayectoria, una carpeta de portafolio y una sola burbuja de WhatsApp con el SVG oficial superpuesto. Título y biografía son HTML a la derecha; en móvil, imagen arriba y texto abajo dentro del mismo panel. Se retiran la galería y su visor. Guardar contacto abre el diálogo QR con descarga y compartir dentro; Contacto conserva cuatro acciones. El pie muestra únicamente el lema exacto centrado, dorado y con animación finita, sin fuentes, créditos, botón de movimiento ni volver arriba.

La autorización explícita sustituye la restricción anterior de no editar generativamente retratos para este banner concreto. Se conserva visualmente la apariencia y pose de Claudia, pero no se afirma identidad de píxeles: es una edición generativa, no la fotografía original sin editar. El adjunto editorial original permanece intacto como histórico. El logo oficial, el retrato principal y el adjunto de Instagram no se modifican.

Activos nuevos: biographyBanner → assets/claudia-trayectoria-banner.png (1774 × 887), portfolioIllustration → assets/clemi-portfolio-sculpture.png (1254 × 1254) y assets/contact-whatsapp-sculpture-v2.png (1254 × 1254). La carpeta sustituye al microscopio y la burbuja única sustituye al soporte doble. Prompts y procedencia en docs/RECURSOS_ACTIVOS.md; entrega en CLEMI_Banner_Portafolio_WhatsApp.md.

src/editorial-banner.css se carga después de src/liquid-glass.css. Las fuentes y licencias permanecen en docs/THIRD_PARTY_NOTICES.md.

motion-preference.js permanece activo sin botón visible: aplica la preferencia local guardada en clemi-motion o, por defecto, la del sistema. No se cambian ajustes del sistema. Todas las animaciones son finitas y se conserva movimiento reducido.

Consulta MCP real: portrait biography editorial banner. Referencias: [Hero 07](https://21st.dev/@felipemenezes098/components/hero-07), [Hero 04](https://21st.dev/@felipemenezes098/components/hero-04) y [Hero 05](https://21st.dev/@felipemenezes098/components/hero-05), solo metadatos y sin instalar componentes.

Validación de esta etapa completada: npm run verify y export:preview pasaron tras los refinamientos finales, al igual que las 14 pruebas de dialog-transition-check.mjs sobre el main actual. Navegador administrado a 1440/320 px y HTML autónomo a 768 px sin desbordamiento ni imágenes rotas. Guardar contacto abre el QR; Escape cierra y devuelve el foco al botón en desarrollo y exportación. Las descargas VCF de ambos entornos coinciden por SHA-256 y texto con public/contacto.vcf. Los tres activos nuevos están integrados en el HTML autónomo; pie centrado y controles retirados comprobados. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes; no se publica.

Los controles de pie, galería, visor y cinco tarjetas descritos en etapas anteriores no corresponden a la interfaz vigente.

## Etapa anterior · nombre y encabezados metalizados

El nombre aumenta su presencia con `h1.hero-name`; cargos de 18–25 px y filo dorado acompañan gradientes legibles azul marino/oro. Las cintas satinadas de `title-metalwork.svg`, vector original sin IA, sustituyen la hoja histórica de `title-flourish.svg`. Secciones y encabezados reciben resplandor finito de 850 ms al entrar o llegar por ancla; el brillo de texto dura 1150 ms. `text-arrival` deja de competir con Motion por transformaciones y filtro, manteniendo navegación y preferencia local.

El smartphone transparente `contact-phone-sculpture-v2.png` corrige la forma del teléfono anterior, que queda archivado como histórico. Verificación y exportación pasaron; desarrollo a 1440/320 px y archivo autónomo a 768 px sin desbordamiento ni imágenes rotas. La auditoría de las combinaciones evaluadas calculó mínimos de 3,69:1 para el apellido grande y 6,74:1 para cargos, legibles a 24,48/17,92 px. El relleno inferior de 0,14 em corrige descendentes en «Reyes» móvil. Teléfono y cintas quedan integrados como datos; consola exportada limpia. Pausa móvil sin animaciones y resplandor real al navegar a Contacto, con foco en su título, comprobados; se reactivó `full`. La etapa no cambió JavaScript ni repitió los catorce diagnósticos históricos. Datos, fotografías y logo permanecen intactos; procedencia en `docs/RECURSOS_ACTIVOS.md`.

## Etapa anterior · Contacto con cristal y ondas doradas

La nueva petición aplica a Contacto un acabado de cristal líquido sobre ondas doradas, con cinco imágenes escultóricas para las acciones, texto más cuidado y retirada de todas las flechas. Los seis recursos están terminados e integrados. Se conservan Times New Roman, datos, fotografías, logo y control local de movimiento. Las tarjetas mantienen nombres accesibles y acciones comprensibles; la validación de navegador y exportación está completada con el alcance descrito abajo.

El cristal usa desenfoque de fondo de 19 px, saturación 1,35, reflejo de puntero, bisel y barrido de brillo de 950 ms. Los títulos entran durante 950 ms desde desplazamiento 65 %, rotación X 12°, desenfoque 4 px y máscara 85 %; el brillo dura 1150 ms y la limpieza ocurre a los 1200 ms más retraso. Las ondas usan una imagen decorativa `contact-waves` con texto alternativo vacío y carga diferida para integrarse en el HTML autónomo. Verificación y catorce comprobaciones JavaScript correctas; Contacto revisado a 1440/320 px en desarrollo y 768 px en exportación sin desbordamiento ni imágenes rotas, con QR, copia, cero flechas y consola limpia. La captura exportada confirma ondas y cristal.

`contact-gold-waves.png` aporta oro cálido y bordes refractados sobre marfil/perla, con centro claro para las tarjetas. Los cinco soportes generados representan guardar, conversación, correo, teléfono y QR; el código escaneable y la marca oficial de WhatsApp se superponen como recursos originales. La generación está expresamente autorizada para estos recursos decorativos, sin personas ni logos generados. Los cuatro pictogramas SVG de contacto anteriores quedan como históricos. No se añaden dependencias ni publicación.

## Etapa anterior · navegación y decoración editorial

La nueva etapa implementada y validada incorpora un fondo de gradientes perla/marfil/azul marino con `editorial-contours.svg`, paneles translúcidos de borde fino en Trayectoria y Contacto, inicial dorada cursiva y un detalle botánico de `title-flourish.svg`. Este último aparece también en portada sin texto adicional. Ambos SVG son originales y no provienen de generación con IA. Los títulos conservan su jerarquía semántica; el detalle se anima durante 850 ms al llegar a una sección y una línea de cabecera indica el progreso de desplazamiento.

La navegación por enlaces internos usa RAF y una curva cúbica de 460–1100 ms, con cancelación, historial y foco de destino; no altera la rueda. El usuario confirmó activar animaciones solo en esta landing. La preferencia parte del sistema y se puede cambiar mediante «Activar/Pausar animaciones» en el pie: `clemi-motion` guarda `full` o `reduce` para este origen y `html[data-motion]` coordina CSS y JavaScript. Se comprobó el movimiento real, persistencia al recargar, pausa sin transiciones ni selección de tarjetas y posterior reactivación; queda modo activo. Verificación y exportación pasaron, con navegador a 320/872/1440 px y exportación a 768 px sin desbordamiento. SVG autónomos, navegación con foco final y selección por teclado comprobados. Los detalles y límites están en `docs/CONTINUIDAD.md`.

## Etapa anterior · editorial aprobada y depuración

El usuario aprobó la dirección editorial fotográfica inspirada en la referencia adjunta y pidió depurar contenido y movimiento. Se mantienen crema/perla en las superficies, azul marino en texto y acciones, dorado en acentos y Times New Roman. Los ajustes actuales están implementados para revisión; la antigua regla de fondo oscuro ya no rige esta etapa.

La portada contiene nombre, cargos, retrato e ilustración, sin botones ni QR. La fotografía sigue a la derecha en escritorio y antes del nombre en móvil. Trayectoria combina la biografía de 48 palabras y la galería sin credenciales repetidas. Conexiones muestra tres tarjetas de imagen superior y título breve; Contacto ocupa la última sección y reúne guardar, WhatsApp, QR, correo y teléfono. Se retiraron barra móvil fija, QR de cabecera y tarjeta giratoria alternativa. El lema exacto se presenta una vez en el pie, junto al desplegable «Fuentes y créditos».

Las cuatro imágenes auténticas de Claudia son el JPEG principal, el adjunto de Instagram, el nuevo adjunto editorial y el retrato con bata publicado por SCCOT. Sus archivos permanecen intactos y los adjuntos mantienen completos sus textos y marcas impresas. La fotografía institucional oficial de formación se configura con `institutionalPhoto`; no se identifica a Claudia entre sus asistentes. El SVG oficial conserva su forma y sus colores.

Las dos fotografías de Trayectoria se amplían en un diálogo nativo con fondo difuminado y descripción accesible, conservando los originales. En navegador se comprobaron proporción, fondo y bloqueo del desplazamiento. Escape, botón y clic exterior cierran el visor y devuelven el foco al control que lo abrió.

`scienceIllustration` conserva pie y libro únicamente en portada; `researchIllustration` incorpora un microscopio decorativo únicamente en portafolio. Ambas ilustraciones están autorizadas, no contienen personas ni logos generados y no constituyen evidencia clínica ni equipamiento institucional verificado. `docs/RECURSOS_ACTIVOS.md` registra prompts e integridad. El antiguo `portfolioArtwork` metálico es histórico. Los cuatro pictogramas SVG originales de contacto usan dos tonos institucionales y etiquetas de acción accesibles; el QR decorativo no sustituye al código escaneable real.

Los títulos aparecen una vez durante 750 ms, de desplazamiento vertical 100 % a 0 y desenfoque 3 a 0 px; paneles y retrato usan 620 y 900 ms. Los grupos Contacto y Conexiones elevan la tarjeta seleccionada con ratón fino o teclado y atenúan sus hermanas con desenfoque de 1,6 px y opacidad 0,6. El teclado tiene prioridad. El toque limpia la selección y movimiento reducido elimina desplazamientos y desenfoque. La referencia [Focus Cards](https://21st.dev/@manuarora700/components/focus-cards) se consultó mediante MCP como metadatos, sin instalación.

`npm run verify` y `npm run export:preview` pasaron. Se revisó el navegador real a 320, 390, 768 y 1440 px sin desbordamiento ni imágenes con `src` rotas, con portada sin acciones, visor fotográfico, QR, copia y fuentes comprobados. La exportación autónoma carga imagen ampliada, vCard y QR integrados; el QR abre y cierra y la consola no muestra errores ni advertencias. Se mantienen catorce diagnósticos de selección y doce del diálogo de contacto correctos. El navegador tiene movimiento reducido activo y la interfaz lo respeta; el movimiento normal se validó por arnés y no se observó en navegador. Las pruebas de `afb2f47` son históricas en `docs/CONTINUIDAD.md`. Las maquetas del comparador y el Figma oscuro no están sincronizados con esta composición. Las decisiones están en `.21st/DESIGN.md`.

## Paleta vigente y colores institucionales

| Familia | Colores                                     |
| ------- | ------------------------------------------- |
| Azules  | #28324F, #1A2744, #2A4070, #6888B8          |
| Dorados | #A89065, #B8952A, #D4B050, #977A4E, #594C31 |
| Verdes  | #344536, #425845, #303D2E, #546A52, #2D5A3A |
| Neutros | #F0ECE4, #F4EFE4, #D4D1CA                   |

La nueva dirección clara incorpora los derivados activos de `src/tokens.css`: lienzo `#F6F5F1`, superficie `#FFFFFF`, superficie secundaria `#EEEFEC`, texto secundario `#53627B` y acento `#856838`. Complementan la paleta institucional anterior por la nueva instrucción; no deben confundirse con una obligación de mantener las superficies oscuras históricas.

Superficies crema/perla protagonistas; azul marino para texto y acciones; dorado en líneas y detalles; verde conservado en el logo oficial y como apoyo. Las relaciones documentadas de etapas previas son claro sobre azul 12.57:1, verde sobre crema 8.93:1 y dorado sobre azul 4.83:1; no validan automáticamente otras combinaciones del diseño claro. No usar dorado claro para texto pequeño sobre crema sin comprobar contraste.

## Tipografía y estructura

- Títulos, nombres y cuerpo: Times New Roman; respaldo Times y Georgia. Si el dispositivo no dispone de ellas, se usa Cormorant Garamond 400/600/700 alojada en el sitio bajo licencia OFL. No se consulta Google Fonts al abrir la página.
- Cuerpo base 18 px, escalado con rem. Nombre grande fluido; etiquetas de apoyo a 12–14 px. Conservar lectura al ampliar texto al 200 %.
- Espaciado consistente y contenido con margen suficiente; bordes finos de 1 px; radios compartidos mediante los tokens activos, reflejos discretos y sombras ligeras.
- Portada de dos columnas en escritorio, con fotografía protagonista a la derecha; en móvil, una columna con fotografía antes del nombre. Los accesos se adaptan al ancho y conservan texto en flujo, sin alturas que recorten al ampliar.
- Las acciones se presentan en tarjetas de Contacto, con etiquetas legibles, foco visible y reflujo al ampliar texto. La navegación mantiene acceso directo a Contacto y el enlace de salto permite omitir contenido previo. No reinstaurar la barra móvil fija.
- Las ilustraciones autorizadas aportan el detalle científico de portada y portafolio. Los contornos y la floritura de la nueva etapa complementan esa dirección; no añadir otros ornamentos repetidos. La credencial giratoria alternativa fue retirada de la interfaz.
- Logo activo: `public/assets/logo-clemi-oficial-sin-texto.svg`, exportado del AI oficial suministrado. Se muestra únicamente el símbolo sin texto; no agregar una palabra CLEMI redibujada. El original intacto está en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`; los JPEG/PNG anteriores quedan como archivos históricos. El retrato suministrado está en `public/assets/dra-claudia-reyes.jpeg`; se conserva byte por byte. No recrear el logo ni usar otras personas como sustitutos.

Motion se usa para las apariciones al desplazarse y apertura del diálogo. El contenido es visible antes de JavaScript; movimiento reducido desactiva animaciones CSS, evita las de Motion y limpia estilos transitorios. No hay animación perpetua. Las imágenes decorativas y pictogramas acompañan texto semántico y no reemplazan nombres accesibles.

El diálogo QR emplea HTML nativo; se evaluó la referencia shadcn y se evitó introducir React en esta arquitectura. Incluye foco inicial, cierre por Escape y retorno al control que lo abrió. El QR se genera a partir de la misma vCard descargable.

## Registro histórico de la etapa oscura

Las secciones siguientes conservan la trazabilidad de Figma, retrato, logo y superficies de la etapa anterior. Sus descripciones de fondo, máscaras o composición no sustituyen la dirección clara vigente. La primera propuesta se construyó sin Figma; después se creó un archivo editable y se comprobó la escritura real. Ese registro no acredita una sincronización con la nueva web clara.

## Figma histórico · sistema editable de la etapa oscura

Archivo de trabajo: https://www.figma.com/design/lAsbeIw1NxUMvHQCdNBXJh

La conexión se verificó con `whoami` y mediante creación y edición autorizadas. El archivo contiene tres colecciones con 46 variables: los 17 colores institucionales primitivos, 17 alias de color y 12 espacios. Ya se crearon seis estilos de texto, un estilo de efecto y un botón reutilizable con tres estados editables.

Los 12 espacios tienen correspondencia CSS en `src/tokens.css`: `--space-0`, `--space-8`, `--space-10`, `--space-12`, `--space-13`, `--space-16`, `--space-18`, `--space-22`, `--space-24`, `--space-28`, `--space-34` y `--space-44`. Son variables disponibles para reutilización; su incorporación no altera las medidas actuales de la web.

Times New Roman no está disponible en las fuentes expuestas por esta conexión. Los seis estilos de Figma usan Cormorant Garamond como respaldo serif ya presente en el proyecto. Esto no cambia la regla institucional del sitio: Times New Roman continúa siendo su fuente principal y no se presenta el respaldo de Figma como una coincidencia tipográfica exacta.

Se crearon dos portadas editables: escritorio, nodo `8:2` de 1440 × 1046 px; móvil, nodo `8:3` de 390 × 1138 px. Incluyen navegación, nombre y cargos reales, logo oficial, retrato, una instancia del botón `4:2`, enlace WhatsApp con el icono de Simple Icons, banda de contacto y lema. El botón mantiene tres estados; el archivo no es todavía un prototipo interactivo.

En la primera creación se importó el PNG oficial transparente mediante `createImage`, verificando el hash del original, sin regenerarlo. Ese recurso se sustituyó posteriormente por el símbolo vectorial sin texto suministrado en AI: cada uso contiene 47 vectores. Nodos actuales: `14:16`, cabecera de escritorio; `14:68`, lema de escritorio; `14:120`, cabecera móvil; y `14:172`, original de referencia en Fundamentos. Se comprobaron las portadas `8:2` y `8:3` y sus capturas después del cambio.

Para Figma se utilizó una copia del retrato original reducida a 360 × 480 px por el límite de tamaño de carga. El JPEG de 768 × 1024 de la web permanece sin modificar; no se presenta la copia reducida como un original de mayor resolución ni como un recorte transparente.

Se revisaron visualmente las capturas de escritorio a escala 0,65 y de móvil a escala 1. La vista móvil se corrigió y volvió a revisarse sin el borde de imagen anterior. Esta revisión corresponde a Figma y no sustituye ni implica nuevas pruebas de la web.

El alcance es una portada con componentes representativos. Las tres tarjetas de conexiones y el diálogo QR de la landing no se han reproducido en el archivo. La composición nativa editable no es una importación automática de coincidencia exacta; está pendiente de revisión del usuario antes de extenderla al resto del diseño.

La captura automática quedó pendiente porque el script oficial no carga en el navegador. La importación `upload_assets` encontró errores HTTP 405/413; la API nativa por recurso sí funcionó para el logo y el retrato reducido. Los detalles de diagnóstico están en `docs/INTEGRACIONES.md`. Las portadas no se han trasladado a la interfaz web; esta etapa no publica el sitio ni incorpora otra instalación MCP.

Los textos de apoyo usan neutros claros. El pequeño texto dorado de la credencial usa #D4B050; el foco del reverso crema usa azul marino para conservar contraste. El SVG activo conserva transparencia real y los colores oficiales del AI, sin recolorearlos con la paleta CSS. `content/profile.json` centraliza su ruta y proporción; las seis reglas CSS del logo usan altura automática.

## Retrato y lema institucional

El fondo original cálido del retrato se conserva. El encuadre y las transiciones de borde se aplican solo mediante CSS, sin modificar el archivo original ni regenerar sus rasgos. Se conserva la cabeza completa y se recortan márgenes del fondo; el azul sigue siendo protagonista. El retrato tiene dimensiones intrínsecas y carga prioritaria, sin deformación.

Lema autorizado, centralizado en `content/profile.json`: «Entrenamos hoy, investigamos para el mañana, transformamos vidas». Se presenta en Times New Roman, con la última cláusula en cursiva y dorado. No agregar lemas inventados.

Se intentó retirar el fondo del logo con la herramienta de edición de imágenes, usando el JPEG original y pidiendo extracción del blanco a alfa sin redibujo ni cambio de colores. Dos resultados se descartaron al observar alteraciones de contorno y color. Ninguno se incorporó al proyecto. Ese bloqueo se resolvió después recuperando un PNG ya existente en Canva, sin regenerarlo.

## Recursos transparentes e iconos de aplicaciones

Recurso actual: AI oficial sin texto suministrado por el usuario, conservado intacto en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`. Contiene una página de 155,906 × 170,079, 46 dibujos vectoriales y ninguna imagen rasterizada. Su exportación SVG transparente ocupa 18.845 bytes, contiene 47 trazados y ninguna imagen. También se obtuvo una exportación PNG RGBA de 1878 × 2048 px.

La conversión utiliza la representación PDF compatible del AI mediante PyMuPDF. El cotejo visual resultó correcto. En la comparación a escala 4, el canal alpha coincide exactamente; las diferencias medias de los canales R/G/B son 0,199/0,122/0,115 sobre 255, debidas a conversión y redondeo. No se afirma identidad exacta de todos los valores RGB ni se recolorea el logo. SHA-256 del original AI: `4eaab6e03246cd7560f5c1b45794006d540bf4c32ef71fe0615f70049ba2768c`.

Recurso histórico archivado: PNG de Canva, diseño «Firmas Clemi» (DAHMLpqZeAA), asset MAHK5Nu8xTk, nombre «CLEMI_logo_normal_transparente_HD.png». Se había descargado su miniatura RGBA de 155 × 200; el original figuraba como 3257 × 4200, pero esos bytes HD no se recuperaron. Su símbolo con texto oficial se utilizó en las revisiones anteriores y ya no es el logo activo. Las transacciones de inspección de Canva fueron canceladas sin cambiar los diseños.

WhatsApp e Instagram: paths originales de Simple Icons 16.32.0, licencia CC0-1.0; fuente y licencia en `public/assets/icons/`. Los SVG heredan `currentColor` en dorado institucional, sin fondos opacos. Correo, teléfono, QR y guardar contacto conservan Lucide. No identificar el correo como Gmail sin confirmación.

## Superficies y recursos de la referencia metálica

`.metal-surface` centraliza borde, brillo interior, sombra moderada y capas de fondo, todas de la paleta. La banda de contacto, los accesos y el lema la reutilizan. El botón principal usa una franja metálica crema/dorada; los iconos de aplicaciones conservan dorado plano para ser reconocibles. No añadir círculos, órbitas ni figuras geométricas ornamentales.

La composición histórica de tres accesos utilizaba recursos distintos y acciones reales. La imagen generada `clemi-metallic-portfolio.png` (1536 × 1024) era decorativa; ahora se conserva como histórico y no se muestra. Prompt resumido: láminas fluidas de metal cepillado azul marino, reflejos dorados, composición superior/derecha y espacio limpio para texto HTML, sin personas ni logos. Método: image_gen, una generación.

El retrato JPEG conserva sus bytes. La transición de borde emplea máscaras CSS y no equivale a retirar el fondo. Una edición automática de fondo se descartó por diferencias faciales; se necesita un PNG fiel para cerrar esa diferencia con la referencia.

Documentación técnica consultada para composición de máscaras: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-composite
