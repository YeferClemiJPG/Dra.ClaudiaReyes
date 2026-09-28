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
