# Continuidad del proyecto · 28 de septiembre de 2026

La etapa vigente convierte Guardar contacto en un acceso directo a la vCard. Los resultados anteriores se conservan por etapa; sus referencias al diálogo QR, repositorio privado, `publicUrl: null`, `noindex`, preferencia del sistema por defecto o ausencia de publicación describen el estado de aquel momento y no son restricciones vigentes.

## Etapa vigente · Guardar contacto sin paso QR

El usuario pidió que Guardar contacto abra el contacto directamente en lugar de mostrar un QR para escanear. La tarjeta conserva su aspecto y sus efectos, pero pasa a ser un enlace nativo a `./contacto.vcf`, con `type="text/vcard"`, `data-contact-download` y `download="{{slug}}.vcf"`. Inicia la descarga en un clic, funciona sin JavaScript y no depende de mostrar un diálogo. La comprobación en Vite mostró que, sin download, el navegador presentaba la vCard como texto; por ello se conserva el atributo tanto en la web como en la exportación.

Se retiran el diálogo QR, su controlador de apertura/cierre, la función de compartir y la alternativa noscript duplicada. La copia de correo conserva su notificación. El archivo QR real y su generador permanecen como históricos. La exportación autónoma integra la vCard como data URL y hereda el atributo download de la plantilla, cuyo nombre procede del slug del perfil. El diseño aprobado y el modo de movimiento full se conservan.

La descarga no confirma una escritura automática en la agenda: abrir e importar el archivo dependen del dispositivo y el sistema puede solicitar confirmación. Las pruebas y la compilación iniciales pasaron; la comprobación final de descarga con download, exportación y despliegue de esta corrección sigue pendiente al redactar la etapa. No se atribuyen a ella los resultados históricos. NFC físico e importación vCard en iOS/Android siguen pendientes.

## Etapa anterior · Animaciones en el origen público

El usuario señaló que las animaciones dejaron de funcionar en la página pública y pidió repararlas. Ya había autorizado «Habilitar animaciones en esta landing». La preferencia `clemi-motion: full` guardada durante la revisión local pertenece al origen de localhost y no se transfiere a GitHub Pages. En el origen público, sin una elección local guardada, el seguimiento predeterminado de `prefers-reduced-motion: reduce` volvía a desactivar las animaciones.

La reparación añade `defaultPreference` a `createMotionPreference`, manteniendo `system` como valor genérico, y configura `full` desde `main.js` para esta landing. Una elección válida guardada en `clemi-motion`, `full` o `reduce`, conserva prioridad; una selección guardada `reduce` continúa deteniendo las animaciones. No se modifican preferencias del sistema ni se reintroduce un botón visible. Se mantienen los tiempos finitos, el diseño y las interacciones existentes.

Pasaron siete pruebas nuevas de preferencia, junto con las quince comprobaciones existentes de navegación y las catorce de diálogo. Al ejecutar las nuevas pruebas contra el módulo original cargado en memoria, cuatro fallaron, confirmando que detectan el problema reparado. `npm run verify`, que ahora incluye las pruebas, y `npm run export:preview` completaron correctamente.

La vista previa en el origen nuevo `http://127.0.0.1:4175/` mostró `data-motion="full"` mientras `prefers-reduced-motion: reduce` seguía activo. Al seleccionar Contacto, el desplazamiento progresó desde `scrollY: 0` tras el clic hasta `2075` y el foco llegó a `contact-title`. La entrada del diálogo se observó con opacidad intermedia `0.991646` y escala `0.999875`, antes de completarse. Estas observaciones corresponden a la vista previa, sin cambiar ajustes del sistema.

La reparación se publicó mediante el flujo [36485682536](https://github.com/YeferClemiJPG/Dra.ClaudiaReyes/actions/runs/36485682536), completado con éxito para el commit `4269a97`. La URL sigue siendo https://yeferclemijpg.github.io/Dra.ClaudiaReyes/. El navegador público cargó el paquete `assets/index-o8pPm7ii.js` y mostró `html[data-motion="full"]` mientras el sistema conservaba `prefers-reduced-motion: reduce`.

En el sitio público de escritorio, la navegación a Contacto progresó desde `scrollY: 0` hasta `2075.2`, con foco final en `contact-title`. Se comprobaron activos los efectos calculados `text-light`, `heading-radiance` y `section-radiance`. El diálogo mostró entrada intermedia con opacidad `0.996028` y escala `0.99994`; Escape completó el cierre y devolvió el foco a Guardar contacto. No se observaron imágenes rotas, desbordamiento horizontal ni errores o advertencias de consola. La pestaña existente del usuario, con vista móvil, también mostró modo `full` y desplazamiento gradual, con `scrollY: 57.6` observado después del clic. Captura de la revisión: `outputs/Claudia_Reyes_Animaciones_Publicadas.png` en el directorio de entregables del chat.

La reparación queda comprobada en el navegador administrado; no se cambiaron ajustes del sistema. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes.

## Etapa anterior · Publicación autorizada en GitHub Pages

El usuario pidió expresamente hacer pública la página dentro de GitHub. El repositorio `YeferClemiJPG/Dra.ClaudiaReyes` está confirmado como público y el destino configurado es https://yeferclemijpg.github.io/Dra.ClaudiaReyes/. Hostinger continúa pendiente para una migración posterior.

La rama de publicación es `refine/interaction-visual`; no se necesita fusionar el PR con `main`. `.github/workflows/pages.yml` ejecuta `npm ci` y `npm run verify`, sube únicamente la salida `dist/` y despliega con GitHub Pages. El perfil establece esa URL en `publicUrl`, con canonical y `index, follow` generados; Vite conserva la base relativa `"./"`.

La revisión previa de la distribución comprobó que sus referencias locales de HTML y CSS resuelven dentro de la ruta del proyecto. La salida contiene recursos estáticos, vCard y licencias; no contiene mapas de código ni archivos de entorno.

Publicación verificada el 28 de septiembre de 2026: el flujo [36484618787](https://github.com/YeferClemiJPG/Dra.ClaudiaReyes/actions/runs/36484618787) finalizó con éxito para el commit `af36e9e`. `npm run verify` y `npm run export:preview` pasaron localmente; GitHub repitió la verificación durante el build. La URL pública responde 200 y su HTML coincide exactamente con `dist/index.html`, con canonical e indexación correctos. Los 24 recursos comprobados de HTML y CSS responden 200; vCard y QR coinciden por SHA-256 con la distribución local. La navegación a Contacto, apertura del diálogo, descarga real de la vCard, cierre con Escape y retorno del foco se comprobaron en el sitio público. Sin imágenes rotas, desbordamiento horizontal ni advertencias o errores de consola en la revisión de escritorio. La descarga coincide con `public/contacto.vcf`. El enlace público también quedó en el campo Website del repositorio.

Esta autorización reemplaza las restricciones anteriores de vista previa sin publicación. No autoriza cambios de dominio, facturación ni despliegues sobre otros sitios. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes.

## Etapa anterior · Azul SCCOT en las ondas de Contacto

El usuario corrigió la sección: el azul SCCOT debe aparecer en las ondas de la imagen de Contacto. Conexiones recupera exactamente el diseño anterior a los acentos azules (commit `1729671`), con sus colores CLEMI. `assets/contact-blue-waves.png` sustituye al fondo dorado mediante edición generativa; el original `contact-gold-waves.png` queda como histórico. Las tarjetas conservan el cristal y sus iconos dorados; no cambian contenido ni interacción. Se retiran los acentos añadidos en `df9d071`.

`#04157F` procede del token `--e-global-color-accent` de la [CSS oficial de SCCOT](https://sccot.org/wp-content/uploads/elementor/css/post-1110.css?ver=1790099331); es una referencia cromática de su web, no una afirmación sobre un manual de marca. Prompt y procedencia en `docs/RECURSOS_ACTIVOS.md`.

El PNG opaco mide 1672 × 941 px y ocupa 2.088.185 bytes. SHA-256: `1eec18cc257be3702e1ce86153beb0ab2595eb2326aa0ad97ea492b83ef63b69`. El original dorado permanece intacto.

`npm run verify` (lint, formato y build) y `npm run export:preview` pasaron. La copia de entrega es exacta y el nuevo PNG integrado coincide con el activo. Desarrollo revisado a 1280/320 px sin desbordamiento, con las cuatro tarjetas y el fondo azul cargado; móvil sin imágenes rotas ni errores o advertencias de consola. Las capturas confirman Conexiones sin franjas azules y Contacto azul con cristal y dorado legibles. `src/editorial-banner.css` y `src/tokens.css` coinciden con `1729671`. JavaScript no cambia; las pruebas VCF anteriores no se repitieron. La revisión visual corresponde a desarrollo; el HTML autónomo se comprobó por integridad de la copia y del recurso integrado. Las comprobaciones de las etapas siguientes son históricas; en esta etapa todavía no se había publicado.

## Etapa anterior · Identidad recuperada y segundo relleno generativo

El usuario señaló que el banner anterior había eliminado el nombre y otros textos necesarios y que el retrato se recortaba abruptamente. Se generó `public/assets/claudia-trayectoria-banner-v2.png` (1774 × 887) desde el retrato editorial original, ampliando fondo y márgenes alrededor de cabeza y hombros. El original y la primera versión se conservan intactos; la nueva versión es una edición generativa autorizada, sin afirmar identidad de píxeles. `docs/RECURSOS_ACTIVOS.md` registra el prompt y la procedencia.

`content/profile.json` apunta al banner v2 y agrega `editorialSpecialty`; `scripts/render.mjs` expone `instagramPersonalHandle`. La plantilla recupera «Dra. Claudia Reyes», «Cirujana de pie y tobillo» y el enlace «@draclaudiajreyes» como HTML. Se mantienen el título Trayectoria y la biografía; la cita anterior sigue ausente.

El retrato ocupa aproximadamente el 8–44 % izquierdo del lienzo. En escritorio, la imagen usa anchura completa y altura automática y no se amplía cuando crece el texto. Hasta 900 px se usa una ventana 1:1, alineada arriba a la izquierda y limitada a 440 px, seguida del contenido dentro del mismo banner. Se retiran las alturas fijas y los desplazamientos anteriores; la nueva ventana conserva la mitad izquierda que contiene a la doctora. Las máscaras combinadas mediante `mask-composite: intersect` suavizan también los bordes laterales y funden el fondo con el panel.

`npm run verify` y `npm run export:preview` pasaron tras la integración. Se revisó desarrollo en navegador a 1280, 1440, 320 y 768 px. Nombre, especialidad y usuario de Instagram están presentes y accesibles. No hay desbordamiento en 1280/320/768 px ni imágenes rotas en 1280/320 px; la revisión visual a 1440 px confirma la composición completa. A 768 px se comprobaron cabello, mano y hombros completos, unión lateral sin línea visible y consola sin errores ni advertencias.

El HTML autónomo se regeneró y la copia de entrega coincide con la salida. Se verificaron el PNG integrado como base64 idéntico al activo y los tres textos recuperados. El navegador bloqueó la apertura automática mediante `file:`: esta corrección tiene validación del contenido exportado, no revisión visual del archivo autónomo. Las pruebas de descarga, QR y catorce diagnósticos de JavaScript descritas más abajo corresponden a la etapa anterior; no se han repetido porque el JavaScript de interacción no cambia. Contacto, Conexiones y lema se conservan. En esta etapa no se publicó el sitio; NFC físico, cámara e importación móvil seguían pendientes.

La revisión adicional de desarrollo a 1000 px confirmó la composición, ausencia de desbordamiento y ratio DOM exacto 2:1 de la imagen aunque el bloque de texto tenga mayor altura. No se amplía ni recorta el retrato para cubrir esa diferencia.

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

## Conexiones y próximos pasos de la recuperación

La búsqueda real por MCP de 21st funcionó en este chat. Las tres cabeceras encontradas son referencias disponibles, no una selección de rediseño ni componentes instalados.

Los documentos anteriores conservan información histórica. En particular, Figma figura como pendiente en `REFERENCIA_VISUAL.md`, pero las notas posteriores de `SISTEMA_VISUAL.md` y `REVISION.md` documentan un archivo editable; no se ha comprobado de nuevo en esta recuperación. Las referencias a ramas anteriores corresponden al trabajo previo al ZIP.

Al terminar la recuperación quedaban pendientes la revisión visual del usuario, un posible PNG transparente fiel al retrato original y la definición de la URL permanente. Entonces `publicUrl` era `null` y la página mantenía `noindex`.

Hostinger era el destino previsto para una etapa posterior. En la recuperación no se configuraron alojamiento, dominio, rama de distribución ni publicación en producción. Se identificó `dist/` como salida estática para el futuro destino.

## Mejora de interacción y gráficos

Tras recuperar la base, el usuario pidió mejorar ambas áreas. La propuesta se desarrolla en `refine/interaction-visual`: nombre en Times con apellido cursivo, retrato íntegro con nuevo encuadre, superficies más discretas, tres accesos con jerarquía diferenciada, tarjetas compactas que crecen con el contenido, cabecera fija y barra móvil flotante. Se documenta la dirección en `.21st/DESIGN.md`.

La navegación refleja la sección actual. La copia presenta «Copiado» e icono de confirmación. El diálogo ofrece QR, descarga y compartir el archivo vCard solo si `navigator.canShare` lo permite. Se conservan Escape, retorno del foco, alternativas cuando falla la copia y movimiento reducido; las apariciones no se repiten al volver a desplazar la página.

Revisión de navegador en 320, 390, 768 y 1440 píxeles: sin desbordamiento horizontal ni imágenes rotas; comprobados navegación activa, confirmación de copia, apertura/cierre del diálogo y retorno del foco. La precarga habilita compartir en este navegador; no se realizó ningún envío externo. La revisión de movimiento reducido se realizó sobre el código, sin emulación del sistema operativo. La prueba física de NFC, cámara e importación móvil continúa pendiente.

## Segunda mejora: acabado gráfico y transiciones

Se continúa en la misma rama y PR #1, todavía en borrador. La fotografía principal usa un marco rectangular de borde fino. El portafolio ocupa una tarjeta de mayor tamaño y las dos redes se apilan a su derecha; la vista móvil conserva tarjetas en una columna y acciones fijas. Se unifican radios, contenedores de iconos y tiempos de respuesta. El texto de navegación y acciones admite reflujo al crecer.

La portada introduce cada línea del nombre, roles y botones de forma coordinada. El retrato entra con una escala mínima y las apariciones se ejecutan una sola vez. El diálogo QR tiene estados explícitos de apertura/cierre: Escape, botón y fondo comparten cierre de 180 ms, preservando el foco y el bloqueo de desplazamiento hasta finalizar. También se controlan cierre durante entrada, reapertura y cambio dinámico a movimiento reducido.

La revisión vuelve a comprobar 320, 390, 768 y 1440 píxeles sin desbordamiento horizontal ni imágenes rotas; navegación, confirmación de copia, Escape y retorno de foco comprobados en navegador. Nueve comprobaciones con simulaciones de DOM/reloj, fuera del repositorio, cubren los casos de transición y movimiento reducido; no son pruebas de un sistema operativo real. Se mantienen pendientes NFC físico, escaneo por cámara e importación en iOS/Android. La consulta MCP de 21st funcionó; no se instalaron dependencias ni se generaron recursos nuevos con IA.

## Nueva etapa: paleta clara y fotografía protagonista

La nueva instrucción explícita del usuario pide una landing clara, elegante y formal con detalles futuristas discretos. Sustituye la exigencia histórica de fondo oscuro; se conserva la paleta institucional usando crema/perla en superficies, azul marino en texto y acciones y dorado en detalles. Times New Roman sigue siendo la familia principal.

Se comparan tres composiciones en el entregable independiente `Claudia_Reyes_Exploracion.html`: «Editorial luminosa», «Retrato inmersivo» y «Galería modular». La primera es la recomendación del asistente y la base implementada para revisión; no se afirma que el usuario ya haya elegido. Estado registrado manualmente como `proposed` en `.21st/design.json`.

La portada actual reserva aproximadamente el 56 % a la fotografía a la derecha en escritorio y la sitúa antes del nombre en móvil. El acceso QR flota sobre el retrato y abre un diálogo claro. La fotografía principal y el logo oficial siguen intactos. El adjunto de Instagram se conserva íntegro en `public/assets/claudia-reyes-instagram.png`, con su marca personal impresa; perfil y dimensiones centralizados en `content/profile.json`.

Las entradas coordinadas usan títulos de 700 ms, paneles de 620 ms y retrato de 900 ms, una sola vez. Se mantienen Escape, retorno de foco, estados de apertura/cierre del diálogo y cancelación ante movimiento reducido. No se han añadido dependencias de prueba, instalaciones de componentes ni generación de IA nueva. Las consultas MCP de 21st fueron de metadatos; las referencias están en `.21st/DESIGN.md`. El Figma histórico oscuro no se ha sincronizado con esta etapa.

Validación disponible al redactar esta actualización:

- Navegador en 320, 390, 768 y 1440 px: sin desbordamiento horizontal ni imágenes rotas en las comprobaciones realizadas.
- Diálogo abierto desde el control de la fotografía; cierre mediante Escape y retorno al control de origen comprobados.
- Comparación autónoma: sus tres pestañas se probaron y revisaron visualmente; a 390 px no se observaron desbordamientos ni imágenes rotas. Capturas principales guardadas como `Claudia_Reyes_Clara_Escritorio.png` y `Claudia_Reyes_Clara_Movil.png`.
- Once diagnósticos con DOM/reloj simulado cubren transiciones y movimiento reducido. No equivalen a cambiar la preferencia de un sistema operativo físico.
- `npm run verify` y la exportación autónoma de esta etapa completados correctamente: lint, formato y compilación correctos. La exportación se abrió mediante HTTP; imagen de Instagram y vCard integradas, sin imágenes rotas, diálogo operativo y registros del navegador vacíos.
- NFC físico, escaneo QR con cámara e importación vCard en iOS/Android siguen pendientes. No se realizaron envíos externos ni publicación en producción.

## Etapa anterior: composición editorial fotográfica · afb2f47

El usuario pidió una landing más visual inspirada en la referencia de nutricionista adjunta, con menos texto, una biografía real breve y más fotografías auténticas. La implementación conserva la paleta clara, Times New Roman y el lema institucional. La portada combina el retrato original con una ilustración decorativa; siguen contacto, biografía de 48 palabras, galería editorial y tres tarjetas con imagen arriba y texto debajo. Las tarjetas ocupan tres columnas en escritorio y una en móvil.

Las cuatro imágenes auténticas de Claudia son el JPEG principal, el adjunto de Instagram, el nuevo adjunto editorial y el retrato con bata publicado por SCCOT. Los archivos se mantienen intactos y los adjuntos conservan completos sus textos y marcas impresas. La fotografía oficial de formación de CLEMI aporta contexto institucional; no se identifica a Claudia entre sus asistentes. Las rutas y dimensiones se centralizan en `content/profile.json` mediante `portrait`, `instagramPortrait`, `editorialPortrait`, `professionalPortrait` e `institutionalPhoto`.

La nueva autorización del usuario permite una ilustración decorativa con IA para esta etapa. `scienceIllustration` apunta a `assets/clemi-science-illustration.png`, usada en portada y portafolio, sin personas ni logos generados. El arte metálico anterior de `portfolioArtwork` queda como histórico y no se muestra. `docs/RECURSOS_ACTIVOS.md` conserva procedencia, integridad y prompt. La biografía enlaza [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y la [hoja de vida publicada por SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf), usando únicamente información profesional.

Se conservan el QR flotante, el diálogo claro y las transiciones de títulos, paneles y retrato de 700, 620 y 900 ms, con movimiento reducido. Las tres maquetas del comparador y el Figma oscuro son antecedentes históricos; no representan esta implementación ni una elección del usuario entre aquellas opciones.

Validación actual comunicada al actualizar esta etapa:

- `npm run verify` y `npm run export:preview` completados correctamente: lint, formato, compilación y generación del HTML autónomo.
- Navegador en 320, 390, 768 y 1440 px: sin desbordamiento horizontal ni imágenes rotas. Se revisaron visualmente portada, galería con los adjuntos completos y tarjetas.
- QR en móvil de 320 px: abre, cierra con Escape y devuelve el foco al control de origen.
- Copia de correo con confirmación visible; no se leyó el portapapeles del sistema de forma independiente.
- Navegación de Trayectoria y Conexiones con sección activa comprobada.
- El adjunto editorial incorpora transcripción de su cita en un `figcaption` accesible, asociado mediante `aria-describedby`.

El HTML autónomo exportado integra catorce imágenes y la vCard, sin depender de un CDN. Todas las imágenes cargaron, no hubo desbordamiento y el diálogo abrió desde la fotografía. Escape lo cerró y devolvió el foco a «Contacto digital: ver QR». Los registros de la vista previa normal y de la exportación no mostraron advertencias ni errores. Se guardaron las capturas `Claudia_Reyes_Editorial_Escritorio.png`, `Claudia_Reyes_Editorial_Movil.png`, `Claudia_Reyes_Editorial_Trayectoria.png` y `Claudia_Reyes_Editorial_Conexiones.png`.

No se emuló la preferencia de movimiento reducido del sistema operativo en esta etapa; las comprobaciones anteriores con DOM/reloj simulado conservan su carácter histórico. NFC físico, escaneo por cámara e importación vCard en iOS/Android continúan pendientes.

En esta etapa no se había publicado el sitio. `publicUrl` seguía en `null` y se mantenía `noindex, nofollow`. Hostinger, URL permanente y publicación requerían definición y autorización específica; aquella actualización de documentación no los configuró.

## Etapa anterior: dirección aprobada y depuración

El usuario aprobó la dirección editorial fotográfica y pidió menos redundancia y una interacción más cuidada. La portada queda limitada a nombre, cargos, retrato e ilustración. Se retiraron la especialidad separada, los botones de portada, los QR de fotografía y cabecera, la barra móvil fija y la credencial giratoria alternativa. Trayectoria conserva biografía y galería sin credenciales repetidas; Conexiones utiliza títulos breves sin reclamos ni nombres de usuario adicionales. Los textos integrados en los adjuntos y su transcripción accesible se mantienen.

Contacto es ahora la última sección y reúne guardar, WhatsApp, QR, correo y teléfono. La navegación incluye Contacto y el enlace de salto lleva a ella. El lema institucional se presenta una sola vez en el pie, donde un `details` nativo reúne fuentes de trayectoria y créditos fotográficos. Se mantienen el diálogo claro, los enlaces reales y los nombres accesibles de los controles.

La ilustración de pie y libro, `scienceIllustration`, se usa únicamente en portada. El nuevo microscopio decorativo, `researchIllustration`, se usa únicamente en portafolio; su archivo es `assets/clemi-research-illustration.png`. Ambas generaciones están autorizadas, sin personas ni logos generados. Cuatro SVG originales de dos tonos forman la familia de contacto, sin instalar dependencias. La procedencia, integridad y prompts están en `docs/RECURSOS_ACTIVOS.md`.

Los títulos aparecen una vez durante 750 ms, de `translateY(100%)` a `0` y desenfoque de 3 a 0 px; paneles y retrato mantienen 620 y 900 ms. En los grupos Contacto y Conexiones se eleva la tarjeta seleccionada y sus hermanas usan desenfoque de 1,6 px y opacidad 0,6. Funciona con ratón de puntero fino y teclado, con prioridad del teclado; el toque no deja selección persistente. Movimiento reducido limpia estados y elimina desplazamientos y desenfoque. Se consultó realmente [Focus Cards](https://21st.dev/@manuarora700/components/focus-cards) por MCP como referencia de metadatos, sin instalar componentes. El CLI 21st sigue sin estar instalado.

Las dos fotografías de Trayectoria incorporan ampliación mediante un diálogo nativo con fondo difuminado y descripción accesible. Se conservan sus archivos intactos. En navegador se comprobaron ambas imágenes con proporción correcta y fondo difuminado, bloqueo del desplazamiento al abrir, cierre por Escape, botón y clic exterior, y retorno de foco a la fotografía de origen.

`npm run verify` y `npm run export:preview` completaron correctamente. El navegador real se revisó a 320, 390, 768 y 1440 px sin desbordamiento horizontal ni imágenes con `src` rotas. La portada conserva nombre y cargos sin acciones. El QR abre, cierra y restaura el foco, copiar correo muestra confirmación y las fuentes desplegables funcionan. Se mantienen catorce diagnósticos de selección y doce del diálogo de contacto correctos, ejecutados fuera del repositorio.

La exportación autónoma se abrió y comprobó: imagen ampliada embebida y cargada, vCard integrada como datos y QR cargado con apertura y cierre operativos. La consola no mostró errores ni advertencias. Se actualizaron la vista previa autónoma y las capturas `Claudia_Reyes_Depurada_Escritorio.png`, `Claudia_Reyes_Depurada_Conexiones.png`, `Claudia_Reyes_Depurada_Contacto.png` y `Claudia_Reyes_Depurada_Movil.png`.

El navegador tiene `prefers-reduced-motion: reduce` activo y la interfaz lo respeta, desactivando entradas y selección animadas. El movimiento normal se validó por arnés, sin observarlo en ese navegador. Las comprobaciones de `afb2f47` documentadas arriba son históricas. Las simulaciones no equivalen a pruebas físicas del sistema operativo; NFC, cámara e importación vCard en iOS/Android siguen pendientes. En esa etapa no hubo publicación y se mantuvo `noindex, nofollow`.

## Etapa anterior: navegación y decoración editorial

El usuario pidió animación de desplazamiento entre secciones, títulos decorados y un fondo moderno y elegante, y confirmó activar animaciones solo en esta landing. Se añadieron gradientes perla/marfil/azul marino con contornos SVG originales, paneles translúcidos de borde fino en Trayectoria y Contacto e inicial dorada cursiva con floritura botánica en títulos y portada. `editorial-contours.svg` y `title-flourish.svg` no usan IA. Se mantienen fotografías, logo, contenido y jerarquía semántica.

`section-navigation.js` anima enlaces internos mediante RAF y curva cúbica de 460–1100 ms, con cancelación, historial y foco, sin interceptar el desplazamiento libre con rueda. La llegada activa la floritura durante 850 ms y la cabecera muestra progreso. `motion-preference.js` respeta el sistema por defecto y guarda la elección explícita de «Activar/Pausar animaciones» en `clemi-motion`, limitada a este origen; `html[data-motion]` aplica el modo a CSS y JavaScript. No se cambia la preferencia del sistema. La autorización para activar corresponde solo a esta landing.

La consulta MCP real `scroll reveal elegant heading background lines` devolvió Rectangular Text Reveal, TextReveal y DualWipeReveal, enlazados en `.21st/DESIGN.md`. Solo se consultaron metadatos, sin instalaciones, dependencias nuevas ni generación con IA.

`npm run verify` y `npm run export:preview` pasaron. Se revisó el navegador a 320, 872 y 1440 px y la exportación autónoma a 768 px, sin desbordamiento. Los dos SVG decorativos están integrados en el CSS autónomo. Tras activar las animaciones mediante el control autorizado, el modo `full` persistió al recargar. Pausar dejó transiciones en 0 s y eliminó las tarjetas seleccionadas; se reactivó al finalizar y queda `full`.

Se observó el recorrido animado intermedio y la llegada a posición correcta con foco en el título. Títulos y fondo se revisaron visualmente; el foco de teclado en WhatsApp mostró selección y desenfoque de hermanas con transición real. El QR autónomo abre, cierra con Escape y devuelve el foco; la consola de la exportación no mostró errores ni advertencias. Pasaron quince diagnósticos nuevos de navegación/preferencia, doce del diálogo y uno de reanudación de apariciones. Se actualizaron el HTML autónomo y las capturas `Claudia_Reyes_Acabado_Trayectoria.png` y `Claudia_Reyes_Acabado_Movil.png`.

Esta etapa sí comprobó movimiento normal en navegador mediante la preferencia local autorizada; la limitación de la etapa anterior, validada solo por arnés, es histórica. No se modificaron preferencias del sistema. NFC físico, escaneo por cámara e importación vCard en iOS/Android siguen pendientes. En esa etapa no hubo publicación y se mantuvo `noindex, nofollow`.

## Etapa anterior: Contacto con cristal líquido

El usuario solicitó ondas doradas de fondo, tarjetas con acabado de cristal, recursos generados en lugar de los pictogramas, texto más cuidado y eliminación de todas las flechas. Autorizó expresamente el fondo y cinco esculturas para guardar, conversación, correo, teléfono y soporte QR, ampliando el alcance anterior de IA. Fotografías, logo y datos permanecen intactos. WhatsApp conserva su marca oficial superpuesta y el soporte QR utiliza el código escaneable real, sin generarlo.

El fondo `public/assets/contact-gold-waves.png` se generó con la herramienta integrada en una llamada, sin referencias y con fondo opaco. Las cinco esculturas transparentes finales miden 1254 × 1254 px. Los seis recursos se revisaron visualmente y sus copias coinciden con los originales en SHA-256. `CLEMI_Contacto_Recursos.md` reúne los seis PNG y sus tres registros de modo, prompt exacto e integridad.

El cristal usa desenfoque de fondo de 19 px, saturación 1,35, bisel, reflejo de puntero y barrido de brillo de 950 ms. Los títulos combinan entrada de 950 ms con desplazamiento, rotación, desenfoque y máscara, brillo de 1150 ms y limpieza a 1200 ms más retraso. Para conservar las ondas en el HTML autónomo, se muestran como `<img class="contact-waves" alt="" loading="lazy">`; la exportación integra el recurso decorativo.

La validación final de esta etapa pasó: `npm run verify` completó lint, formato y compilación; catorce comprobaciones JavaScript nuevas fueron correctas. Contacto se revisó a 1440 y 320 px en desarrollo y a 768 px en exportación, sin desbordamiento ni imágenes con `src` rotas. Se verificaron QR, copia de correo, cero flechas y consola sin errores ni advertencias. La captura de la exportación regenerada confirma el dorado y el cristal; el HTML y las capturas de escritorio y móvil están actualizados en los entregables. No se instalaron dependencias ni se publicó el sitio. NFC físico, cámara e importación móvil continúan pendientes.

En el archivo autónomo se confirmó el PNG de ondas integrado como data URL y el QR con apertura, cierre por Escape y retorno de foco.

## Etapa actual: protagonismo metalizado y teléfono corregido

El usuario pidió encabezados y secciones más elegantes con resplandor, mayor protagonismo metalizado del nombre y los cargos y corrección del teléfono. `h1.hero-name` gana tamaño, los cargos usan 18–25 px con filo dorado y las cintas satinadas originales de `title-metalwork.svg` sustituyen la hoja histórica. El resplandor dura 850 ms y el brillo de texto 1150 ms; se elimina la competencia de `text-arrival` con transformaciones y filtro de Motion, manteniendo navegación y preferencia local.

`contact-phone-sculpture-v2.png` es el smartphone transparente activo; el auricular anterior se conserva. Su prompt y procedencia están en `CLEMI_Contacto_Telefono_v2_Procedencia.md` y el índice de recursos enlaza la versión activa y marca la anterior como histórica. Se consultó realmente por MCP `metallic text shimmer glow elegant heading`; las tres referencias están en `.21st/DESIGN.md`, sin instalaciones. Fotografías, logo y datos permanecieron intactos y el sitio no se publicó en esa etapa.

`npm run verify` y `npm run export:preview` pasaron. Desarrollo a 1440 y 320 px no muestra desbordamiento ni imágenes rotas; cargos de 24,48/17,92 px legibles. La auditoría independiente calculó mínimos de contraste de 3,69:1 para el apellido grande y 6,74:1 para cargos, sin conflicto de transformaciones y con prioridad de movimiento reducido conservada. El relleno inferior `padding-bottom: 0.14em` evita recortar descendentes; «Reyes» se revisó corregido en móvil.

La exportación a 768 px se comprobó sin desbordamiento, imágenes rotas ni advertencias o errores de consola. El PNG del smartphone está integrado como datos y carga a 1254 px naturales; `title-metalwork.svg` está integrado como SVG de datos en el CSS. Pausar en móvil establece `data-motion="reduce"` sin animaciones computadas y conserva el acabado metalizado; se reactivó `full` al terminar.

El resplandor real se comprobó en la exportación al pulsar Contacto en la cabecera: `.is-arriving` activo, `section-radiance` en `#contacto::after`, `heading-radiance` en `#contact-title::before` y `text-light` en el texto, con foco en `contact-title`. Al terminar desapareció `.is-arriving` y la animación quedó en `none`, confirmando su duración finita. La captura final a 1440 px conserva completa la descendente de «Reyes». Se actualizaron el HTML autónomo y `Claudia_Reyes_Metalizado_Portada.png`, `Claudia_Reyes_Metalizado_Movil.png` y `Claudia_Reyes_Metalizado_Contacto.png`. No hubo cambios JavaScript en esta etapa ni se repitieron los catorce diagnósticos anteriores; permanecen como históricos. NFC físico, cámara e importación móvil siguen pendientes. En esa etapa no hubo publicación.

## Banner de Trayectoria, portafolio y contacto simplificado · 28 de septiembre de 2026

La petición actual incorpora un banner morado ancho de Trayectoria, una carpeta de portafolio y una sola burbuja de WhatsApp con el SVG oficial superpuesto. Título y biografía son HTML a la derecha; en móvil, imagen arriba y texto abajo dentro del mismo panel. Se retiran la galería y su visor. Guardar contacto abre el diálogo QR con descarga y compartir dentro; Contacto conserva cuatro acciones. El pie muestra únicamente el lema exacto centrado, dorado y con animación finita, sin fuentes, créditos, botón de movimiento ni volver arriba.

La autorización explícita sustituye la restricción anterior de no editar generativamente retratos para este banner concreto. Se conserva visualmente la apariencia y pose de Claudia, pero no se afirma identidad de píxeles: es una edición generativa, no la fotografía original sin editar. El adjunto editorial original permanece intacto como histórico. El logo oficial, el retrato principal y el adjunto de Instagram no se modifican.

Activos nuevos: biographyBanner → assets/claudia-trayectoria-banner.png (1774 × 887), portfolioIllustration → assets/clemi-portfolio-sculpture.png (1254 × 1254) y assets/contact-whatsapp-sculpture-v2.png (1254 × 1254). La carpeta sustituye al microscopio y la burbuja única sustituye al soporte doble. Prompts y procedencia en docs/RECURSOS_ACTIVOS.md; entrega en CLEMI_Banner_Portafolio_WhatsApp.md.

Fuentes y licencias permanecen en docs/THIRD_PARTY_NOTICES.md. Consulta MCP real portrait biography editorial banner, referencias Hero 07, Hero 04 y Hero 05, sin instalar.

motion-preference.js permanece activo sin botón visible: aplica la preferencia local guardada en clemi-motion o, por defecto, la del sistema. No se cambian ajustes del sistema. Todas las animaciones son finitas y se conserva movimiento reducido.

Validación de esta etapa completada: npm run verify y export:preview pasaron tras los refinamientos finales, al igual que las 14 pruebas de dialog-transition-check.mjs sobre el main actual. Navegador administrado a 1440/320 px y HTML autónomo a 768 px sin desbordamiento ni imágenes rotas. Guardar contacto abre el QR; Escape cierra y devuelve el foco al botón en desarrollo y exportación. Las descargas VCF de ambos entornos coinciden por SHA-256 y texto con public/contacto.vcf. Los tres activos nuevos están integrados en el HTML autónomo; pie centrado y controles retirados comprobados. NFC físico, cámara e importación vCard en iOS/Android seguían pendientes; no se publicó en esa etapa.

La espera del evento de descarga del HTML autónomo agotó el tiempo de la herramienta, pero el archivo sí se descargó y se comprobó su SHA-256 y contenido exactos. No se observó un fallo funcional de descarga; esa comprobación no sustituye la importación física en un móvil.
