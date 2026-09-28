# Dirección visual CLEMI

## Dirección vigente · propuesta clara del 28 de septiembre de 2026

La nueva instrucción explícita del usuario pide una landing clara, elegante, formal y con detalles futuristas discretos. Sustituye la regla histórica de fondo azul oscuro continuo: crema y perla pasan a las superficies principales; azul marino al texto y acciones; dorado a los acentos. No añadir cifras o contenido ajeno.

La composición implementada para revisión es «Editorial luminosa», recomendada por el asistente entre tres exploraciones; no existe todavía una selección del usuario. El retrato ocupa aproximadamente el 56 % a la derecha en escritorio y abre la portada antes del nombre en móvil. Mantiene banda de contacto, tres destinos gráficos, lema exacto, acceso QR flotante sobre la fotografía y diálogo claro.

El JPEG principal y el SVG oficial permanecen intactos. El adjunto de Instagram se incorpora íntegro como `public/assets/claudia-reyes-instagram.png`, con su marca personal impresa. Títulos, paneles y retrato usan entradas de 700, 620 y 900 ms, respectivamente, una sola vez y con cancelación ante movimiento reducido.

La comparación autónoma `Claudia_Reyes_Exploracion.html` presenta también «Retrato inmersivo» y «Galería modular». Las decisiones y referencias están en `.21st/DESIGN.md`. El archivo Figma documentado más abajo corresponde a la etapa oscura: no se ha sincronizado ni se presenta como representación del diseño claro.

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
- Acciones principales con altura de 49–52 px y barra móvil con controles de al menos 44 px; subrayado al pasar por enlaces, foco de 2 px, estados comprensibles más allá del color.
- No añadir formas decorativas, arcos, órbitas ni ondas repetidas a la composición principal. La credencial alternativa sin fotografía conserva su diseño anterior y se organiza en `src/card.css`.
- Logo activo: `public/assets/logo-clemi-oficial-sin-texto.svg`, exportado del AI oficial suministrado. Se muestra únicamente el símbolo sin texto; no agregar una palabra CLEMI redibujada. El original intacto está en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`; los JPEG/PNG anteriores quedan como archivos históricos. El retrato suministrado está en `public/assets/dra-claudia-reyes.jpeg`; se conserva byte por byte. No recrear el logo ni usar otras personas como sustitutos.

Motion se usa para las apariciones al desplazarse y apertura del diálogo. El contenido es visible antes de JavaScript; la preferencia de movimiento reducido desactiva animaciones CSS y evita las de Motion. La tarjeta gira por una acción explícita, sin movimiento perpetuo.

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

La composición de tres accesos está solicitada por la referencia reafirmada; cada uno usa un recurso distinto y una acción real. La imagen generada `clemi-metallic-portfolio.png` (1536 × 1024) es decorativa y se carga de forma diferida. Prompt resumido: láminas fluidas de metal cepillado azul marino, reflejos dorados, composición superior/derecha y espacio limpio para texto HTML, sin personas ni logos. Método: image_gen, una generación.

El retrato JPEG conserva sus bytes. La transición de borde emplea máscaras CSS y no equivale a retirar el fondo. Una edición automática de fondo se descartó por diferencias faciales; se necesita un PNG fiel para cerrar esa diferencia con la referencia.

Documentación técnica consultada para composición de máscaras: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-composite
