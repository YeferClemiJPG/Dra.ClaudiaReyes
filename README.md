# CLEMI · Dra. Claudia Reyes

Dirección visual clara, elegante y formal, con detalles futuristas discretos, para la primera de siete landings para tarjetas NFC. La nueva instrucción del usuario sustituye el fondo oscuro histórico por crema y perla, con texto azul marino y detalles dorados. HTML, CSS y JavaScript con Vite. Exportación estática para Hostinger u otro alojamiento de archivos.

Estado: «Editorial luminosa» implementada para revisión, recomendada por el asistente entre tres composiciones; el usuario todavía no ha elegido una variante. No publicada. Usa el símbolo oficial sin texto exportado del archivo AI suministrado por el usuario, el retrato auténtico y el lema institucional exacto. No se recreó ni recoloreó el logo. Las comprobaciones históricas y la validación de la sustitución vectorial están en `docs/REVISION.md`; la etapa clara y su alcance de validación se documentan en `docs/CONTINUIDAD.md`. El archivo Figma histórico no está sincronizado con esta dirección. El enlace de portafolio se conserva exactamente según la información recibida; su disponibilidad externa no pudo confirmarse desde el buscador.

## Editar y revisar

Requiere Node 22.12 o superior; verificado con Node 24.19.0.

```sh
npm ci
npm run dev
```

Cambiar `content/profile.json` y reiniciar el servidor para regenerar el HTML y la vCard. Editar la composición en `src/page.html`, estilos en `src/style.css` y colores en `src/tokens.css`. No editar `index.html`, `public/contacto.vcf` ni `public/assets/contacto-qr.svg` directamente.

Para incorporar logo y fotografía, colocar los archivos autorizados en `public/assets/` y asignar sus rutas relativas en `logo` y `portrait`. El logo activo es `assets/logo-clemi-oficial-sin-texto.svg`; su original intacto está en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`. Es el símbolo oficial sin texto: no añadir una palabra CLEMI redibujada ni recolorear sus colores originales. El PNG anterior de Canva permanece archivado y no es el recurso activo. `logoWidth` y `logoHeight` indican la proporción del SVG; las seis reglas CSS que muestran el logo usan altura automática para conservarla.

La imagen autorizada para Instagram se conserva íntegra en `public/assets/claudia-reyes-instagram.png` (1080 × 1080); se configura mediante `instagramPortrait`, `instagramPortraitWidth` e `instagramPortraitHeight`. Contiene su composición y marca personal impresas, sin regeneración ni recoloreado. El JPEG de portada permanece independiente e intacto.

Mantener `null` cuando no se hayan suministrado recursos. Si se añade `portrait`, la cabecera muestra esa fotografía en lugar de la credencial, sin filtros de color, dentro de un marco rectangular con borde fino; se conservan los demás accesos al QR. No aplicar filtros de color a fotografías. `portraitWidth` y `portraitHeight` indican sus dimensiones originales. El arte abstracto de portafolio se edita mediante `portfolioArtwork`; es una imagen decorativa generada previamente, no una fotografía de cursos ni una muestra de trabajos. El lema se edita una sola vez en `motto`; el render divide visualmente sus cláusulas sin cambiar el texto.

## Experiencia de contacto

Composición clara con Times New Roman y respaldo serif; retrato protagonista a la derecha, con aproximadamente el 56 % de la portada en escritorio, y fotografía antes del nombre en móvil. Se mantienen la credencial como alternativa sin fotografía, banda de contacto, tres accesos visuales diferenciados (portafolio, Instagram personal y Fundación CLEMI) y cierre con el lema. El acceso QR flota sobre el retrato y abre un diálogo claro; también se conservan los demás controles QR, cierre por Escape, copia del correo y acciones fijas en móvil. El QR de vCard se genera durante la compilación. El QR contiene los datos de contacto, no una dirección de publicación provisional. Guardar e importar contactos depende también del dispositivo.

Motion anima apariciones y apertura/cierre del diálogo con respeto por movimiento reducido. El giro usa CSS. Los enlaces y la descarga siguen disponibles si JavaScript falla. Lucide aporta los iconos funcionales; WhatsApp e Instagram usan SVG de Simple Icons 16.32.0 (CC0), incorporados como recursos locales y coloreados en dorado; no hay React ni bibliotecas duplicadas de diálogos.

El refinamiento de septiembre de 2026 añade navegación fija con sección activa, confirmación visible al copiar, tarjetas con respuesta al puntero y foco, accesos más compactos en móvil y un panel QR coherente con la identidad. Las apariciones ocurren una sola vez. Cuando el navegador permite compartir archivos vCard, el panel ofrece «Compartir contacto»: el archivo se prepara antes del clic para conservar la activación del usuario. Si no es compatible, la descarga sigue disponible. No se comparte una dirección local ni una URL provisional. Las fuentes, el retrato, el logo y los datos originales se conservan.

La etapa clara conserva una distribución asimétrica para portafolio y redes. La portada coordina nombre, roles, acciones y fotografía: títulos de 700 ms, paneles de 620 ms y retrato de 900 ms. Los controles usan transiciones breves y el diálogo sale en 180 ms: mantiene su condición modal y el bloqueo de desplazamiento hasta terminar, y devuelve el foco al control que lo abrió. Las tarjetas conservan texto en flujo normal; navegación y barra móvil permiten reflujo cuando crece el texto.

La exploración independiente `Claudia_Reyes_Exploracion.html` permite alternar entre «Editorial luminosa», «Retrato inmersivo» y «Galería modular», con los mismos datos, referencias y recursos. La recomendación del asistente es la primera, sin dar por hecha la selección del usuario. La comparación no sustituye los archivos de producción.

## Comprobar y exportar

Para la etapa clara se comprobó el navegador en 320, 390, 768 y 1440 px sin desbordamiento horizontal ni imágenes rotas; apertura QR desde la fotografía, Escape y retorno de foco comprobados. Once diagnósticos con DOM/reloj simulado cubren transiciones y movimiento reducido; no equivalen a una prueba física de sistema operativo, NFC o importación de contacto. La ejecución final de `npm run verify` y `npm run export:preview` resultó correcta. La exportación autónoma se comprobó servida por HTTP: Instagram y vCard integrados, imágenes cargadas, apertura/cierre del diálogo y registros del navegador vacíos.

```sh
npm run verify
npm run export:preview
```

- `dist/`: archivos listos para alojamiento estático; no subir el código fuente a la raíz pública.
- `artifacts/Claudia_Reyes_Vista_Previa.html`: vista previa autónoma para abrir como archivo, con CSS, iconos, fuentes locales, Motion y QR integrados. Incluye retrato, lema, diálogo y copia de correo; el giro está disponible en la variante sin fotografía. Su vCard usa un enlace de datos; algunos visores de archivos pueden bloquear descargas, pero la web desplegable utiliza `contacto.vcf` como archivo normal.
- Contacto, redes y portafolio son enlaces reales. La descarga vCard permite importar los datos, sujeto al comportamiento de cada dispositivo.

La propuesta está marcada `noindex, nofollow`. Cuando se confirme la URL final, ponerla en `publicUrl`, reconstruir y revisar: genera la URL canónica y permite indexación. No cambia ni registra el dominio.

## Publicar en Hostinger

1. Construir con `npm run build`.
2. Subir **el contenido** de `dist/` al directorio público elegido, dejando `index.html`, `contacto.vcf` y `assets/` al mismo nivel.
3. Para una ruta NFC independiente, usar una carpeta dedicada, por ejemplo `public_html/claudia-reyes/`, sin sobrescribir otros sitios. El ejemplo requiere confirmar dominio y ubicación final.
4. Probar esa URL HTTPS desde un móvil; después grabar esa dirección permanente en la tarjeta NFC.

También es posible desplegar desde GitHub mediante la integración Git de Hostinger, si el plan lo admite. Esta integración estática no debe apuntar directamente a la raíz del repositorio fuente: usar una rama de distribución cuyo contenido sea `dist/`, o configurar una compilación y salida `dist` si se utiliza el producto de alojamiento de aplicaciones. La rama de distribución aún no se creó ni conectó.

En Hostinger, revisar el sitio elegido → Advanced → Git → Connect with GitHub y limitar la autorización al repositorio de esta landing. No se configuró acceso a Hostinger, producción ni dominios en esta entrega.

Documentación oficial: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

## GitHub y conexiones

Repositorio privado confirmado: [YeferClemiJPG/Dra.ClaudiaReyes](https://github.com/YeferClemiJPG/Dra.ClaudiaReyes). El código se recuperó del ZIP suministrado por el usuario el 28 de septiembre de 2026 y se vinculó a ese remoto. Consultar `docs/CONTINUIDAD.md` para el estado actual y `docs/INTEGRACIONES.md`, `docs/SISTEMA_VISUAL.md`, `docs/REVISION.md` y `docs/PLAN_SIETE_LANDINGS.md` para las decisiones y revisiones anteriores.

## Recurso pendiente para completar la semejanza

La referencia histórica presenta un retrato separado de su fondo. Para recuperar esa dirección haría falta una versión PNG transparente fiel de la fotografía suministrada. Una edición automática anterior se descartó por cambios en detalles faciales; no está incluida en los archivos entregados. La propuesta actual conserva el JPEG original en un marco fotográfico, por lo que no depende de ese recorte.
