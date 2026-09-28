# Continuidad del proyecto · 28 de septiembre de 2026

## Base recuperada

El usuario suministró `CLEMI_NFC_Claudia_Reyes_Codigo.zip` y eligió el repositorio privado `YeferClemiJPG/Dra.ClaudiaReyes`. Se importaron sus 51 archivos en la copia local conectada a ese remoto, conservando el diseño, la fotografía, el logo y los datos originales. No se incorporaron nuevos componentes ni se generaron imágenes o diseños con IA durante esta recuperación.

La landing de Claudia es la primera de siete. Se mantiene la web estática con Vite, rutas relativas (`base: "./"`), Times New Roman, fondo oscuro, acabados metálicos, contacto, QR y redes. Las otras seis landings necesitan sus propios datos y recursos.

## Verificación de esta recuperación

- Dependencias restauradas desde el archivo de bloqueo con `npm ci`.
- `npm run verify`: lint, formato y compilación correctos con Node 24.21.0.
- `npm run export:preview`: HTML autónomo generado correctamente.
- Navegador integrado: escritorio a 1440 × 1000 y móvil a 390 × 844, sin desbordamiento horizontal ni imágenes rotas en las comprobaciones realizadas.
- Diálogo QR: apertura desde la banda de contacto y desde la barra móvil; cierre con Escape y con el botón; retorno de foco comprobado en escritorio.
- Copia de correo: el control muestra confirmación de éxito. El contenido del portapapeles del sistema no se verificó de manera independiente.
- Descarga de `claudia-reyes.vcf` comprobada y contenido coincidente con el perfil.
- Sin errores o advertencias de consola en la revisión de escritorio.

Estas pruebas no equivalen a probar una tarjeta NFC física, escanear el QR con una cámara ni importar la vCard en iOS o Android. La disponibilidad de los destinos externos de redes y portafolio no se comprobó en esta recuperación.

## Conexiones y próximos pasos

La búsqueda real por MCP de 21st funcionó en este chat. Las tres cabeceras encontradas son referencias disponibles, no una selección de rediseño ni componentes instalados.

Los documentos anteriores conservan información histórica. En particular, Figma figura como pendiente en `REFERENCIA_VISUAL.md`, pero las notas posteriores de `SISTEMA_VISUAL.md` y `REVISION.md` documentan un archivo editable; no se ha comprobado de nuevo en esta recuperación. Las referencias a ramas anteriores corresponden al trabajo previo al ZIP.

Pendientes: revisión visual del usuario, posible PNG transparente fiel al retrato original y definición de la URL permanente. `publicUrl` sigue siendo `null` y la página mantiene `noindex`.

Hostinger es el destino previsto para una etapa posterior. No se han configurado alojamiento, dominio, rama de distribución ni publicación en producción. El contenido de `dist/` es la salida estática que se utilizará cuando se defina ese destino.

## Mejora de interacción y gráficos

Tras recuperar la base, el usuario pidió mejorar ambas áreas. La propuesta se desarrolla en `refine/interaction-visual`: nombre en Times con apellido cursivo, retrato íntegro con nuevo encuadre, superficies más discretas, tres accesos con jerarquía diferenciada, tarjetas compactas que crecen con el contenido, cabecera fija y barra móvil flotante. Se documenta la dirección en `.21st/DESIGN.md`.

La navegación refleja la sección actual. La copia presenta «Copiado» e icono de confirmación. El diálogo ofrece QR, descarga y compartir el archivo vCard solo si `navigator.canShare` lo permite. Se conservan Escape, retorno del foco, alternativas cuando falla la copia y movimiento reducido; las apariciones no se repiten al volver a desplazar la página.

Revisión de navegador en 320, 390, 768 y 1440 píxeles: sin desbordamiento horizontal ni imágenes rotas; comprobados navegación activa, confirmación de copia, apertura/cierre del diálogo y retorno del foco. La precarga habilita compartir en este navegador; no se realizó ningún envío externo. La revisión de movimiento reducido se realizó sobre el código, sin emulación del sistema operativo. La prueba física de NFC, cámara e importación móvil continúa pendiente.

## Segunda mejora: acabado gráfico y transiciones

Se continúa en la misma rama y PR #1, todavía en borrador. La fotografía principal usa un marco rectangular de borde fino. El portafolio ocupa una tarjeta de mayor tamaño y las dos redes se apilan a su derecha; la vista móvil conserva tarjetas en una columna y acciones fijas. Se unifican radios, contenedores de iconos y tiempos de respuesta. El texto de navegación y acciones admite reflujo al crecer.

La portada introduce cada línea del nombre, roles y botones de forma coordinada. El retrato entra con una escala mínima y las apariciones se ejecutan una sola vez. El diálogo QR tiene estados explícitos de apertura/cierre: Escape, botón y fondo comparten cierre de 180 ms, preservando el foco y el bloqueo de desplazamiento hasta finalizar. También se controlan cierre durante entrada, reapertura y cambio dinámico a movimiento reducido.

La revisión vuelve a comprobar 320, 390, 768 y 1440 píxeles sin desbordamiento horizontal ni imágenes rotas; navegación, confirmación de copia, Escape y retorno de foco comprobados en navegador. Nueve comprobaciones con simulaciones de DOM/reloj, fuera del repositorio, cubren los casos de transición y movimiento reducido; no son pruebas de un sistema operativo real. Se mantienen pendientes NFC físico, escaneo por cámara e importación en iOS/Android. La consulta MCP de 21st funcionó; no se instalaron dependencias ni se generaron recursos nuevos con IA.
