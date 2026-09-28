# CLEMI · Dra. Claudia Reyes

Landing editorial y fotográfica de la Dra. Claudia Reyes, primera de siete landings para tarjetas NFC. La petición actual toma como referencia la landing de nutricionista adjunta: más presencia de fotografías auténticas y menos texto, con una biografía profesional breve. Mantiene Times New Roman, superficies crema/perla, texto azul marino y detalles dorados. HTML, CSS y JavaScript con Vite; exportación estática para Hostinger u otro alojamiento de archivos.

Estado: composición fotográfica implementada y comprobada en los tamaños de navegador documentados abajo, todavía sin publicación. La exportación autónoma carga sus recursos integrados y conserva cierre por Escape y retorno de foco. Se conservan el símbolo oficial sin texto exportado del AI suministrado, las fotografías originales y el lema institucional exacto. `docs/CONTINUIDAD.md` distingue las etapas; `docs/RECURSOS_ACTIVOS.md` registra fuentes y recursos. El Figma oscuro y las tres maquetas de exploración son históricos y no están sincronizados con la composición actual. El enlace de portafolio conserva el destino suministrado; su disponibilidad externa no está confirmada.

## Editar y revisar

Requiere Node 22.12 o superior; verificado con Node 24.19.0.

```sh
npm ci
npm run dev
```

Cambiar `content/profile.json` y reiniciar el servidor para regenerar el HTML y la vCard. Editar la composición en `src/page.html`, estilos en `src/style.css` y colores en `src/tokens.css`. No editar `index.html`, `public/contacto.vcf` ni `public/assets/contacto-qr.svg` directamente.

Para incorporar logo y fotografía, colocar los archivos autorizados en `public/assets/` y asignar sus rutas relativas en `logo` y `portrait`. El logo activo es `assets/logo-clemi-oficial-sin-texto.svg`; su original intacto está en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`. Es el símbolo oficial sin texto: no añadir una palabra CLEMI redibujada ni recolorear sus colores originales. El PNG anterior de Canva permanece archivado y no es el recurso activo. `logoWidth` y `logoHeight` indican la proporción del SVG; las seis reglas CSS que muestran el logo usan altura automática para conservarla.

Las cuatro imágenes auténticas de Claudia se configuran con `portrait` (JPEG de portada), `instagramPortrait` (adjunto de Instagram), `editorialPortrait` (nuevo adjunto editorial) y `professionalPortrait` (retrato con bata publicado por SCCOT), junto a sus campos de dimensiones. Los archivos permanecen intactos. Los dos adjuntos conservan sus textos y marcas impresas completos; no se han regenerado rostros ni logos.

`institutionalPhoto` utiliza `assets/clemi-formacion.jpeg`, fotografía oficial de una actividad de formación de CLEMI. No se identifica a Claudia entre sus asistentes. `scienceIllustration` utiliza `assets/clemi-science-illustration.png`, ilustración transparente generada con autorización expresa para esta etapa y usada como decoración en portada y portafolio. No es una imagen clínica ni un diagrama de enseñanza. El prompt y la procedencia se conservan en `docs/RECURSOS_ACTIVOS.md`. El antiguo `portfolioArtwork` metálico sigue registrado como histórico, sin mostrarse en la composición actual.

La biografía de 48 palabras se edita en `biography`; `biographySources` enlaza [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y la [hoja de vida publicada por SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf). Solo recoge formación y trayectoria profesional. El lema se edita una sola vez en `motto`; el render divide visualmente sus cláusulas sin cambiar el texto.

## Experiencia de contacto

La portada sitúa el retrato a la derecha en escritorio y antes del nombre en móvil, junto a una ilustración científica decorativa. La sección de trayectoria combina biografía breve y galería editorial. Los tres accesos a portafolio, Instagram personal y Fundación CLEMI se organizan en columnas con imagen superior y texto debajo; en móvil se apilan. El cierre conserva el lema exacto. El acceso QR flota sobre el retrato y abre un diálogo claro; también se mantienen copia del correo y acciones fijas en móvil. El QR contiene la misma vCard descargable, con los datos de contacto. Guardar e importar contactos depende del dispositivo.

Motion anima apariciones y apertura/cierre del diálogo con respeto por movimiento reducido. El giro usa CSS. Los enlaces y la descarga siguen disponibles si JavaScript falla. Lucide aporta los iconos funcionales; WhatsApp e Instagram usan SVG de Simple Icons 16.32.0 (CC0), incorporados como recursos locales y coloreados en dorado; no hay React ni bibliotecas duplicadas de diálogos.

El refinamiento de septiembre de 2026 añade navegación fija con sección activa, confirmación visible al copiar, tarjetas con respuesta al puntero y foco, accesos más compactos en móvil y un panel QR coherente con la identidad. Las apariciones ocurren una sola vez. Cuando el navegador permite compartir archivos vCard, el panel ofrece «Compartir contacto»: el archivo se prepara antes del clic para conservar la activación del usuario. Si no es compatible, la descarga sigue disponible. No se comparte una dirección local ni una URL provisional. Las fuentes, el retrato, el logo y los datos originales se conservan.

La portada coordina nombre, roles, acciones y fotografía: títulos de 700 ms, paneles de 620 ms y retrato de 900 ms. Los controles usan transiciones breves y el diálogo sale en 180 ms: mantiene su condición modal y el bloqueo de desplazamiento hasta terminar, y devuelve el foco al control que lo abrió. Las tarjetas conservan texto en flujo normal; navegación y barra móvil permiten reflujo cuando crece el texto.

La exploración independiente `Claudia_Reyes_Exploracion.html` conserva «Editorial luminosa», «Retrato inmersivo» y «Galería modular» como alternativas históricas. La primera fue recomendada por el asistente; no se atribuye al usuario una selección entre ellas. Ninguna representa por completo la implementación fotográfica actual.

## Comprobar y exportar

La composición fotográfica actual pasó `npm run verify` y `npm run export:preview`. Se comprobó en navegador a 320, 390, 768 y 1440 px sin desbordamiento horizontal ni imágenes rotas, con revisión visual de portada, galería con los adjuntos completos y tarjetas. A 320 px se verificaron apertura del QR, cierre por Escape y retorno del foco; la copia de correo muestra confirmación, sin lectura independiente del portapapeles. Trayectoria y Conexiones marcan la sección activa. El adjunto editorial cuenta con transcripción accesible en `figcaption` asociada mediante `aria-describedby`.

El HTML autónomo exportado integra catorce imágenes y la vCard, sin depender de un CDN: todas las imágenes cargaron, no hubo desbordamiento y el diálogo abrió desde la fotografía. Escape lo cerró y devolvió el foco a «Contacto digital: ver QR». La vista previa normal y la exportación no mostraron advertencias ni errores en sus registros. No se emuló la preferencia de movimiento reducido del sistema operativo en esta etapa. Los once diagnósticos anteriores de DOM/reloj simulado pertenecen a la etapa clara previa. NFC físico, cámara e importación de contacto en iOS/Android siguen pendientes. El detalle por etapas está en `docs/CONTINUIDAD.md`.

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

## Antecedente del retrato transparente

La referencia oscura histórica presentaba un retrato separado de su fondo. Una edición automática anterior se descartó por cambios en detalles faciales y no está incluida. La composición actual conserva fotografías auténticas con su fondo; no depende de obtener ese recorte.
