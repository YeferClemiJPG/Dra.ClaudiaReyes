# Revisión de la tercera dirección visual

Fecha: 25 de septiembre de 2026. Rama de trabajo: `design/reference-dark-v3`.

## Comprobaciones realizadas

- ESLint, Prettier y compilación Vite correctos con versiones fijadas. La exportación autónoma integra JavaScript compilado, CSS, fuentes, logo, QR y vCard; no conserva referencias de recursos a archivos externos.
- Interfaz abierta e inspeccionada visualmente en Chrome mediante el navegador administrado y su API Playwright. Escritorio: viewport 1363 × 936. Vistas móviles mediante iframes de 390 y 320 px; sus anchos útiles de 375 y 305 px coinciden con el ancho del documento, sin desplazamiento horizontal.
- Texto ampliado al 200 % en iframe de 640 px: ancho útil y documento de 625 px, sin texto recortado. El nombre limita su tamaño en función del ancho disponible. Se corrigieron desbordamientos de la navegación y órbitas decorativas; títulos móviles mantienen separación entre palabras.
- Revisión visual de cabecera, tarjeta, contactos, correo, redes, botones y diálogo QR en escritorio y móvil. La barra móvil permite guardar, abrir WhatsApp y mostrar el QR.
- Giro de tarjeta: el botón cambia de etiqueta y estado aria-pressed; ambas caras alternan aria-hidden e inert. Diálogo: apertura, cierre por Escape, desbloqueo del desplazamiento y retorno del foco al botón de origen comprobados.
- Copiar correo: se pulsó el botón y se pegó el contenido en un campo de prueba independiente; coincidió con directoracientifica@clemi.edu.co. No se envió ningún correo.
- Las interacciones de giro, apertura/cierre del diálogo y copia se repitieron en el HTML autónomo servido por la vista previa. Sus scripts pasaron la comprobación de sintaxis. La apertura por file:// en un equipo externo queda pendiente.
- QR decodificado mediante ZXing a 246, 290 y 500 px; los bytes obtenidos coinciden exactamente con public/contacto.vcf. Es un QR de datos de contacto, no una URL provisional. La importación final a iOS/Android y lectura mediante cámara física quedan pendientes.
- Logo cotejado con el archivo suministrado; mismo contenido original, sin filtros ni recortes. Mantiene su fondo blanco y proporciones.
- Paleta institucional; contraste dorado sobre azul 4.83:1, verde sobre crema 8.93:1 y claro sobre azul 12.57:1. El texto pequeño de la credencial usa dorado claro; el foco de su reverso crema usa azul marino.
- La exportación V3 también se comprobó: giro, ampliación del QR, Escape y copia seguida de pegado en un campo de prueba; el correo coincide. El reverso de escritorio presenta altura útil y contenido de 433 px, sin recorte.
- Motion utiliza matchMedia para evitar animaciones con movimiento reducido; CSS incluye la misma preferencia. Se revisó la implementación, pero no se emuló esa preferencia en el navegador administrado.
- No se observaron errores propios de la aplicación en los registros inspeccionados. Aparecieron mensajes de una extensión ajena al sitio y del servidor de desarrollo.

## Integraciones y límites

shadcn MCP se instaló y consultó de forma aislada; Context7 respondió a documentación de Motion. Configuración transferible y evidencia en .codex/config.toml y tools/integration-checks/. Esto no instala plugins en ChatGPT ni extensiones en el VS Code del usuario. Ver docs/INTEGRACIONES.md para todos los estados.

No hay publicación nueva en GitHub, Vercel ni Hostinger. No se confirmó dominio ni ruta final. El navegador de GitHub rechazó el inicio por contraseña; el conector de ChatGPT permite trabajar con repositorios existentes, pero no ofrece crear uno. No se modificó la seguridad de la cuenta.

No se enviaron WhatsApp, correos ni llamadas. Los destinos se cotejaron con la información proporcionada; no se verificó la titularidad de Instagram ni la disponibilidad externa del portafolio. Figma sigue pendiente de conexión y archivo compartido. Las otras seis identidades aún no se han proporcionado.

La referencia aportada por el usuario se revisó visualmente. La V3 adopta fondo oscuro continuo, Anton y composición de paneles. Falta un retrato real para aproximar también el protagonismo fotográfico del ejemplo; no se usó la identidad de su modelo. No se afirman nuevas conexiones MCP: se consultó el catálogo público de 21st y se verificó que Figma sigue pendiente.

## Ajuste tipográfico institucional

Por indicación del usuario se prioriza Times New Roman para nombres, títulos y texto; Times, Georgia y Cormorant Garamond son respaldos. Se reemplazaron los imports de Anton/Manrope por los pesos 400/600/700 de Cormorant Garamond ya instalado. Se ajustaron tamaño, peso y ancho de títulos y controles. Se revisaron capturas de escritorio y móvil, anchos a 320 y 390 px y texto al 200 %; no hay desplazamiento horizontal. ESLint, Prettier, compilación y exportación autónoma correctos. Las familias disponibles en cada dispositivo determinan el respaldo utilizado.

## Incorporación del retrato y lema · 25 de septiembre de 2026

Rama `design/portrait-motto`. Retrato suministrado de 768 × 1024, copiado sin modificar sus bytes; marco de arco CSS y línea dorada. Lema exacto centralizado, sin la frase genérica anterior. Times New Roman y respaldos conservados. No se añadieron dependencias ni conexiones en este ajuste.

Se revisaron visualmente capturas de portada y bloque del lema en escritorio y móvil. Ancho de escritorio 1348 px; móviles 390 y 320 px con anchos útiles 375 y 305 px; texto al 200 % con ancho útil 625 px: en todos, ancho del documento igual al disponible y sin texto desbordado en nombre ni lema. Retrato e imágenes cargan correctamente. Se comprobó apertura del diálogo QR desde la barra móvil.

Logo transparente pendiente: dos ediciones automáticas produjeron transparencia, pero cambiaron bordes y colores. Se rechazaron y no forman parte de la web ni del paquete. Se necesita un PNG/SVG oficial para sustituir el JPEG sin alterar la marca.

Validación final de este ajuste: ESLint, Prettier, compilación y exportación autónoma correctos. En el HTML exportado, el retrato carga desde datos integrados, el lema coincide exactamente y no quedan imágenes externas. Diálogo QR comprobado: apertura, cierre mediante Escape y retorno de foco al botón de origen. El retrato se cotejó byte por byte con el archivo suministrado.

## Refinamiento visual y transparencia · 25 de septiembre de 2026

Rama `design/editorial-refinement`. Se retiraron textos de apoyo redundantes, la banda repetida de acciones, las tres tarjetas, el cierre duplicado, el arco y las órbitas decorativas. Se conserva el nombre, ambos cargos, lema exacto, retrato, todos los destinos de contacto, descarga vCard, QR, copia del correo y barra móvil. La credencial alternativa conserva su giro cuando no se suministra retrato; CSS separado en `src/card.css`.

El logo PNG existente se recuperó de Canva (asset MAHK5Nu8xTk, diseño Firmas Clemi) sin regeneración ni modificaciones del diseño. El archivo RGBA de 155 × 200 tiene alpha 0–255 y 21.662 píxeles totalmente transparentes. Se usa a 58 × 75 px; no se anuncia como HD. Ambos usos del logo apuntan a este PNG. Iconos SVG de WhatsApp/Instagram con paths verificados y relleno #D4B050, sin fondo; fuentes y licencia en `public/assets/icons/`. Retrato idéntico byte por byte al suministrado.

Pruebas de la versión actual:

- ESLint, Prettier, compilación Vite y exportación autónoma correctos; sin dependencias runtime nuevas.
- Inspección visual de portada, redes, lema y contacto en escritorio y móvil. Ancho de escritorio 1348 px sin desbordamiento. Iframes 390 y 320 px con anchos útiles 375 y 305 px; texto al 200 % con ancho útil 625 px: documentos sin desbordamiento horizontal, nombre/lema/correo sin recorte.
- Diálogo QR móvil: abre, recibe foco, cierra por Escape, desbloquea el desplazamiento y devuelve el foco a «Mostrar QR de contacto».
- Copia de correo seguida de pegado en un campo de prueba: resultado exacto directoracientifica@clemi.edu.co. No se envió mensaje alguno.
- Exportación autónoma: todas las imágenes integradas y cargadas, logo 155 × 200, retrato 768 × 1024; lema idéntico; WhatsApp/Instagram heredan dorado #D4B050. Se comprobó apertura/cierre QR y retorno de foco también allí.
- No se emuló movimiento reducido: su implementación existente sigue activa y sin modificaciones. Apertura en el file:// del equipo del usuario e importación física del contacto pendientes de comprobación en ese dispositivo.

Context7 y shadcn MCP revalidados. Figma sigue pendiente de conexión y diseño; 21st MCP requiere autenticación. Canva se utilizó de forma verificable para recuperar el logo. No se instalaron herramientas duplicadas, compraron recursos ni publicaron sitios.

## Acabado metálico de referencia · 25 de septiembre de 2026

Rama `design/reference-metallic`. La referencia vuelve a orientar la composición: cabecera y fondo azul continuos, nombre de gran escala en Times New Roman, superficies con reflejos discretos y tres accesos visuales diferenciados. Se mantienen los datos reales, lema exacto, todos los destinos de contacto, vCard, QR, copia de correo y barra móvil. Los paneles de la referencia se adaptan a funciones existentes; no se inventan estadísticas, proyectos o testimonios.

Se integra un recurso abstracto de metal azul y dorado generado para el enlace de portafolio. El retrato original no se modifica: máscaras CSS suavizan sus bordes. Esto no equivale a un recorte transparente. Una prueba de extracción generativa alteró detalles faciales y fue descartada; para reproducir la silueta de la referencia hace falta el mismo retrato en PNG sin fondo. El logo conserva el PNG transparente recuperado de Canva y sus colores originales.

Comprobaciones de esta revisión:

- ESLint, Prettier, compilación Vite y exportación autónoma correctos.
- Capturas revisadas visualmente de portada, contactos, tres accesos y lema en escritorio y móvil; última revisión después del ajuste de escala de la fotografía.
- Iframes de 390 y 320 px: anchos útiles/documento de 375 y 305 px, sin desbordamiento horizontal. Texto al 200 %: 625 px disponibles y de documento, sin recorte del nombre, lema o correo.
- Diálogo QR móvil: recibe foco, cierra mediante Escape y devuelve el foco al control de origen. Copia de correo comprobada mediante pegado en un campo independiente; coincide exactamente con directoracientifica@clemi.edu.co.
- HTML autónomo abierto en navegador: las nueve imágenes están integradas y cargadas, lema correcto y sin desbordamiento. Apertura/cierre QR y retorno de foco comprobados en ese archivo.
- Las preferencias de movimiento reducido conservan su implementación anterior; no se emularon en esta revisión. La apertura por file:// e importación física de la vCard en el dispositivo del usuario siguen pendientes.

Frostpane se descargó y revisó fuera del proyecto, pero se descartó como dependencia por sus estilos globales duplicados. No se activaron servicios de pago ni conexiones nuevas. GitHub, Vercel y Hostinger siguen sin publicación de esta versión. El resultado se entrega como vista previa autónoma, paquete estático y código fuente.

## Conexión Figma y portadas editables · 25 de septiembre de 2026

El usuario conectó Figma y autorizó la creación editable. Se verificó `whoami` con la cuenta `asistentediseno@clemi.edu.co`, plan Starter, asiento View y rol admin. La creación y escritura se comprobaron mediante operaciones reales, sin deducirlas del nombre del asiento. Este estado sustituye las menciones históricas de Figma pendiente en las revisiones anteriores.

Archivo creado: https://www.figma.com/design/lAsbeIw1NxUMvHQCdNBXJh

Contenido verificado:

- Tres colecciones con 46 variables: 17 colores primitivos, 17 alias semánticos y 12 espacios; seis estilos tipográficos, un estilo de efecto y un botón editable con tres estados.
- Portada de escritorio `8:2`, 1440 × 1046 px, y portada móvil `8:3`, 390 × 1138 px. Ambas contienen navegación, nombre, cargos, logo, retrato, instancia del botón `4:2`, enlace WhatsApp con el icono de Simple Icons, banda de contacto y lema.
- Logo oficial PNG transparente importado mediante `createImage` desde los bytes originales, con correspondencia de hash. Retrato incorporado como copia reducida a 360 × 480 px por el límite de tamaño de carga; la web conserva intacto su JPEG original de 768 × 1024.
- Captura de escritorio revisada visualmente a escala 0,65. Captura móvil revisada a escala 1 después de corregir el borde visible de la imagen; la corrección se comprobó en la nueva captura.

Times New Roman no está disponible mediante la conexión Figma. Los estilos editables usan Cormorant Garamond, respaldo ya presente en el proyecto; la web mantiene Times New Roman como familia principal. La diferencia se documenta y no se presenta como equivalencia exacta.

La captura automática HTML → Figma no se completó porque el script oficial no cargaba en el navegador. La revisión del HTML confirmó la inyección correcta; los intentos de lectura HTTP del script quedaron sin ejecutar por un fallo técnico de revisión automática `thread-store 500`. `upload_assets` devolvió errores HTTP 405/413. Se completó la composición editable mediante la API nativa, que permitió importar individualmente el logo y la copia reducida del retrato; no se afirma una importación automática ni una coincidencia exacta de todos los píxeles.

Alcance de esta entrega de Figma: portada y componente representativo. No contiene las tres tarjetas de conexiones ni el diálogo QR, y no se configuró un prototipo interactivo. Las capturas se revisaron internamente; la aprobación visual del usuario sigue pendiente. Estas portadas no se han trasladado a la interfaz web ni publicado. No se instalaron servidores MCP duplicados ni se realizaron nuevas pruebas de interacción web en esta etapa; las pruebas anteriores conservan su alcance original.

Se incorporaron las 12 variables CSS de espaciado que corresponden a los nombres de código de Figma, sin cambiar las medidas aplicadas a la web. El cierre pasó `npm run verify`: ESLint, Prettier y compilación correctos. El SHA-1 del PNG oficial coincide con el `imageHash` de Figma: `eaefd8b94c37ba682d79265893f7457b9f71b42a`.

## Logo oficial vectorial sin texto · 25 de septiembre de 2026

El usuario suministró el AI oficial sin texto. El original se conserva intacto en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`, SHA-256 `4eaab6e03246cd7560f5c1b45794006d540bf4c32ef71fe0615f70049ba2768c`. Contiene una página de 155,906 × 170,079, 46 dibujos vectoriales y cero imágenes.

Se exportó su representación PDF compatible mediante PyMuPDF a `public/assets/logo-clemi-oficial-sin-texto.svg`: 18.845 bytes, 47 trazados, cero imágenes y transparencia. También se exportó un PNG RGBA de 1878 × 2048 px. No hubo generación, redibujo ni sustitución de los colores oficiales por tokens de interfaz; no se agregó una palabra CLEMI redibujada.

Comprobaciones realizadas sobre los recursos:

- Cotejo visual entre el original y la conversión correcto.
- Comparación a escala 4: canal alpha idéntico; diferencias medias R/G/B de 0,199/0,122/0,115 sobre 255 por conversión y redondeo. Esta medida no equivale a identidad exacta de todos los valores RGB.
- Figma: cada logo sustituido contiene 47 vectores. Nodos `14:16` para cabecera de escritorio, `14:68` para lema de escritorio, `14:120` para cabecera móvil y `14:172` para el original de referencia en Fundamentos. Portadas `8:2` y `8:3` y sus capturas revisadas después del cambio.
- En la web, `content/profile.json` apunta al SVG y declara su proporción; las seis reglas CSS de altura del logo pasan a `auto`. El PNG de Canva se conserva archivado, sin uso activo.

Validación de esta sustitución:

- `npm run verify` y `npm run export:preview` correctos: ESLint, Prettier, compilación y exportación autónoma completados. En la exportación se comprobaron nueve imágenes integradas y cargadas, incluidos los cuatro usos SVG del logo.
- Escritorio: viewport de 1363 px, ancho útil y documento de 1348 px, sin desplazamiento horizontal. Cargan los cuatro usos SVG, incluido el de la credencial alternativa oculta. Medidas observadas: cabecera 56 × 61,078 px; tarjeta Fundación 96 × 104,719 px; lema 100 × 109,078 px.
- Móvil: iframe de 390 px con ancho útil y cuerpo de 375 px, sin desplazamiento horizontal; logo de cabecera de 49 × 53,453 px.
- Capturas de escritorio, móvil, tarjeta Fundación y lema revisadas visualmente; proporciones correctas. Captura final de referencia: `Claudia_Reyes_Logo_Vectorial.jpg`.

Esta revisión se limita al cambio de recurso y sus proporciones; no se repitieron ni se declaran nuevas pruebas de las interacciones existentes. No hay publicación nueva ni cambios de dominio.
