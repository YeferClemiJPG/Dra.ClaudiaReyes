# CLEMI · Dra. Claudia Reyes

Landing editorial y fotográfica de la Dra. Claudia Reyes, primera de siete landings para tarjetas NFC. La petición actual toma como referencia la landing de nutricionista adjunta: más presencia de fotografías auténticas y menos texto, con una biografía profesional breve. Mantiene Times New Roman, superficies crema/perla, texto azul marino y detalles dorados. HTML, CSS y JavaScript con Vite; exportación estática para Hostinger u otro alojamiento de archivos.

Estado: el usuario aprobó la dirección editorial y solicitó depuración de contenido y una interacción más cuidada. Estos ajustes están implementados y comprobados en navegador y exportación con los límites documentados abajo. La versión anterior, `afb2f47`, y sus comprobaciones se conservan como antecedentes en `docs/CONTINUIDAD.md`. Se mantienen el símbolo oficial, las fotografías originales y el lema institucional. La procedencia de recursos está en `docs/RECURSOS_ACTIVOS.md`; el Figma oscuro y las tres maquetas antiguas no representan esta implementación. El sitio no está publicado y el destino externo del portafolio conserva la URL suministrada, sin disponibilidad confirmada.

## Editar y revisar

Requiere Node 22.12 o superior; verificado con Node 24.19.0.

```sh
npm ci
npm run dev
```

Cambiar `content/profile.json` y reiniciar el servidor para regenerar el HTML y la vCard. Editar la composición en `src/page.html`, estilos en `src/style.css` y colores en `src/tokens.css`. No editar `index.html`, `public/contacto.vcf` ni `public/assets/contacto-qr.svg` directamente.

Para incorporar logo y fotografía, colocar los archivos autorizados en `public/assets/` y asignar sus rutas relativas en `logo` y `portrait`. El logo activo es `assets/logo-clemi-oficial-sin-texto.svg`; su original intacto está en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`. Es el símbolo oficial sin texto: no añadir una palabra CLEMI redibujada ni recolorear sus colores originales. El PNG anterior de Canva permanece archivado. `logoWidth` y `logoHeight` indican la proporción del SVG, que debe conservarse al mostrarlo.

Las cuatro imágenes auténticas de Claudia se configuran con `portrait` (JPEG de portada), `instagramPortrait` (adjunto de Instagram), `editorialPortrait` (nuevo adjunto editorial) y `professionalPortrait` (retrato con bata publicado por SCCOT), junto a sus campos de dimensiones. Los archivos permanecen intactos. Los dos adjuntos conservan sus textos y marcas impresas completos; no se han regenerado rostros ni logos.

`institutionalPhoto` utiliza `assets/clemi-formacion.jpeg`, fotografía oficial de formación de CLEMI; no se identifica a Claudia entre sus asistentes. Las ilustraciones transparentes autorizadas tienen usos separados: `scienceIllustration` (`assets/clemi-science-illustration.png`, pie y libro) aparece solo en portada; `researchIllustration` (`assets/clemi-research-illustration.png`, microscopio) solo en portafolio. Son decorativas, sin personas ni logos generados; no constituyen evidencia clínica ni representan equipamiento institucional verificado. Los prompts y procedencia están en `docs/RECURSOS_ACTIVOS.md`. El antiguo `portfolioArtwork` metálico es histórico y no se muestra.

La biografía de 48 palabras se edita en `biography`; `biographySources` enlaza [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y la [hoja de vida publicada por SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf). Solo recoge formación y trayectoria profesional. El lema se edita en `motto` y se presenta una vez en el pie, con su texto exacto. Las fuentes profesionales y los créditos de fotografías se reúnen en el desplegable nativo «Fuentes y créditos» del pie.

## Experiencia de contacto

La portada muestra nombre, cargos, fotografía e ilustración; el retrato se sitúa a la derecha en escritorio y antes del nombre en móvil. Trayectoria combina biografía breve y galería editorial sin repetir credenciales. Conexiones presenta tres tarjetas de imagen superior y título breve: Portafolio CLEMI, Instagram y Fundación CLEMI. Contacto, al final del contenido, reúne guardar contacto, WhatsApp, QR, correo y teléfono. La navegación incluye Contacto y el enlace de salto lleva a esa sección. Se retiraron los botones de portada y cabecera, la barra móvil fija, la credencial giratoria y los reclamos redundantes. El lema exacto permanece en el pie.

El QR abre un diálogo claro y contiene la misma vCard descargable. Cuando el navegador permite compartir ese archivo, el panel ofrece «Compartir contacto» y lo prepara antes del clic. Escape y el botón de cierre devuelven el foco al control de origen. Guardar e importar contactos depende del dispositivo; enlaces y descarga siguen disponibles si JavaScript falla.

Las dos fotografías de Trayectoria se pueden ampliar en un diálogo nativo con fondo difuminado. El visor conserva la descripción accesible, la proporción y los archivos originales; bloquea el desplazamiento mientras está abierto, se cierra con Escape, botón o clic exterior y devuelve el foco a la fotografía de origen. Estos comportamientos se comprobaron en navegador.

Contacto utiliza cuatro pictogramas SVG originales de dos tonos para guardar, QR, correo y teléfono, sin nuevas dependencias. WhatsApp e Instagram mantienen sus SVG locales de Simple Icons 16.32.0 (CC0); Lucide aporta controles auxiliares. La navegación fija señala la sección activa y copiar correo muestra confirmación visible.

Motion revela los títulos una vez durante 750 ms, desplazándolos de 100 % a 0 y reduciendo el desenfoque de 3 a 0 px. Paneles y retrato usan 620 y 900 ms. En Contacto y Conexiones, ratón de puntero fino o teclado elevan la tarjeta seleccionada; las hermanas del mismo grupo toman desenfoque de 1,6 px y opacidad 0,6. El foco de teclado tiene prioridad y el toque no deja una selección persistente. Movimiento reducido limpia estos estados y suprime el movimiento y desenfoque. La referencia [Focus Cards](https://21st.dev/@manuarora700/components/focus-cards) se consultó realmente mediante MCP como metadatos, sin instalar el componente. Texto, controles y orden semántico permanecen disponibles.

La exploración independiente `Claudia_Reyes_Exploracion.html` conserva «Editorial luminosa», «Retrato inmersivo» y «Galería modular» como alternativas históricas. La primera fue recomendada por el asistente; no se atribuye al usuario una selección entre ellas. Ninguna representa por completo la implementación fotográfica actual.

## Comprobar y exportar

La iteración actual pasó `npm run verify` y `npm run export:preview`. El navegador real se comprobó a 320, 390, 768 y 1440 px sin desbordamiento horizontal ni imágenes con `src` rotas. Se verificó la portada sin acciones, ambas ampliaciones fotográficas con proporción y fondo difuminado, bloqueo del desplazamiento, cierre por Escape, botón y clic exterior, y retorno del foco. QR, confirmación de copia y fuentes desplegables funcionaron. Se mantienen catorce diagnósticos del comportamiento de selección y doce del diálogo de contacto correctos, realizados fuera del repositorio.

La exportación autónoma se abrió y comprobó: imagen ampliada integrada y cargada, vCard embebida como datos y QR cargado con apertura y cierre operativos; sin advertencias ni errores de consola. El detalle y las capturas de esta iteración están en `docs/CONTINUIDAD.md`.

El navegador utilizado tiene `prefers-reduced-motion: reduce`, respetado por la interfaz: entradas animadas y selección con desenfoque quedan desactivadas. El movimiento normal se validó con el arnés de pruebas, sin observarlo en ese navegador. Se conserva la transcripción accesible del adjunto editorial, asociada mediante `aria-describedby`. Las simulaciones no equivalen a probar un sistema operativo físico. NFC, cámara e importación de contacto en iOS/Android continúan pendientes.

```sh
npm run verify
npm run export:preview
```

- `dist/`: archivos listos para alojamiento estático; no subir el código fuente a la raíz pública.
- `artifacts/Claudia_Reyes_Vista_Previa.html`: vista previa autónoma para abrir como archivo, con CSS, iconos, fuentes locales, Motion, fotografías, ilustraciones y QR integrados. Incluye lema, diálogo y copia de correo. Su vCard usa un enlace de datos; algunos visores de archivos pueden bloquear descargas, pero la web desplegable utiliza `contacto.vcf` como archivo normal.
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
