# Continuidad del proyecto · 28 de septiembre de 2026

La etapa vigente refuerza nombre y cargos metalizados, encabezados con resplandor y teléfono corregido como smartphone. Su validación de navegador, exportación, pausa y resplandor real está completada con los límites indicados al final. Los resultados anteriores se conservan por etapa.

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

No se ha publicado el sitio. `publicUrl` sigue en `null` y se mantiene `noindex, nofollow`. Hostinger, URL permanente y publicación requieren definición y autorización específica; esta actualización de documentación no los configura.

## Etapa anterior: dirección aprobada y depuración

El usuario aprobó la dirección editorial fotográfica y pidió menos redundancia y una interacción más cuidada. La portada queda limitada a nombre, cargos, retrato e ilustración. Se retiraron la especialidad separada, los botones de portada, los QR de fotografía y cabecera, la barra móvil fija y la credencial giratoria alternativa. Trayectoria conserva biografía y galería sin credenciales repetidas; Conexiones utiliza títulos breves sin reclamos ni nombres de usuario adicionales. Los textos integrados en los adjuntos y su transcripción accesible se mantienen.

Contacto es ahora la última sección y reúne guardar, WhatsApp, QR, correo y teléfono. La navegación incluye Contacto y el enlace de salto lleva a ella. El lema institucional se presenta una sola vez en el pie, donde un `details` nativo reúne fuentes de trayectoria y créditos fotográficos. Se mantienen el diálogo claro, los enlaces reales y los nombres accesibles de los controles.

La ilustración de pie y libro, `scienceIllustration`, se usa únicamente en portada. El nuevo microscopio decorativo, `researchIllustration`, se usa únicamente en portafolio; su archivo es `assets/clemi-research-illustration.png`. Ambas generaciones están autorizadas, sin personas ni logos generados. Cuatro SVG originales de dos tonos forman la familia de contacto, sin instalar dependencias. La procedencia, integridad y prompts están en `docs/RECURSOS_ACTIVOS.md`.

Los títulos aparecen una vez durante 750 ms, de `translateY(100%)` a `0` y desenfoque de 3 a 0 px; paneles y retrato mantienen 620 y 900 ms. En los grupos Contacto y Conexiones se eleva la tarjeta seleccionada y sus hermanas usan desenfoque de 1,6 px y opacidad 0,6. Funciona con ratón de puntero fino y teclado, con prioridad del teclado; el toque no deja selección persistente. Movimiento reducido limpia estados y elimina desplazamientos y desenfoque. Se consultó realmente [Focus Cards](https://21st.dev/@manuarora700/components/focus-cards) por MCP como referencia de metadatos, sin instalar componentes. El CLI 21st sigue sin estar instalado.

Las dos fotografías de Trayectoria incorporan ampliación mediante un diálogo nativo con fondo difuminado y descripción accesible. Se conservan sus archivos intactos. En navegador se comprobaron ambas imágenes con proporción correcta y fondo difuminado, bloqueo del desplazamiento al abrir, cierre por Escape, botón y clic exterior, y retorno de foco a la fotografía de origen.

`npm run verify` y `npm run export:preview` completaron correctamente. El navegador real se revisó a 320, 390, 768 y 1440 px sin desbordamiento horizontal ni imágenes con `src` rotas. La portada conserva nombre y cargos sin acciones. El QR abre, cierra y restaura el foco, copiar correo muestra confirmación y las fuentes desplegables funcionan. Se mantienen catorce diagnósticos de selección y doce del diálogo de contacto correctos, ejecutados fuera del repositorio.

La exportación autónoma se abrió y comprobó: imagen ampliada embebida y cargada, vCard integrada como datos y QR cargado con apertura y cierre operativos. La consola no mostró errores ni advertencias. Se actualizaron la vista previa autónoma y las capturas `Claudia_Reyes_Depurada_Escritorio.png`, `Claudia_Reyes_Depurada_Conexiones.png`, `Claudia_Reyes_Depurada_Contacto.png` y `Claudia_Reyes_Depurada_Movil.png`.

El navegador tiene `prefers-reduced-motion: reduce` activo y la interfaz lo respeta, desactivando entradas y selección animadas. El movimiento normal se validó por arnés, sin observarlo en ese navegador. Las comprobaciones de `afb2f47` documentadas arriba son históricas. Las simulaciones no equivalen a pruebas físicas del sistema operativo; NFC, cámara e importación vCard en iOS/Android siguen pendientes. No hay publicación y se mantiene `noindex, nofollow`.

## Etapa anterior: navegación y decoración editorial

El usuario pidió animación de desplazamiento entre secciones, títulos decorados y un fondo moderno y elegante, y confirmó activar animaciones solo en esta landing. Se añadieron gradientes perla/marfil/azul marino con contornos SVG originales, paneles translúcidos de borde fino en Trayectoria y Contacto e inicial dorada cursiva con floritura botánica en títulos y portada. `editorial-contours.svg` y `title-flourish.svg` no usan IA. Se mantienen fotografías, logo, contenido y jerarquía semántica.

`section-navigation.js` anima enlaces internos mediante RAF y curva cúbica de 460–1100 ms, con cancelación, historial y foco, sin interceptar el desplazamiento libre con rueda. La llegada activa la floritura durante 850 ms y la cabecera muestra progreso. `motion-preference.js` respeta el sistema por defecto y guarda la elección explícita de «Activar/Pausar animaciones» en `clemi-motion`, limitada a este origen; `html[data-motion]` aplica el modo a CSS y JavaScript. No se cambia la preferencia del sistema. La autorización para activar corresponde solo a esta landing.

La consulta MCP real `scroll reveal elegant heading background lines` devolvió Rectangular Text Reveal, TextReveal y DualWipeReveal, enlazados en `.21st/DESIGN.md`. Solo se consultaron metadatos, sin instalaciones, dependencias nuevas ni generación con IA.

`npm run verify` y `npm run export:preview` pasaron. Se revisó el navegador a 320, 872 y 1440 px y la exportación autónoma a 768 px, sin desbordamiento. Los dos SVG decorativos están integrados en el CSS autónomo. Tras activar las animaciones mediante el control autorizado, el modo `full` persistió al recargar. Pausar dejó transiciones en 0 s y eliminó las tarjetas seleccionadas; se reactivó al finalizar y queda `full`.

Se observó el recorrido animado intermedio y la llegada a posición correcta con foco en el título. Títulos y fondo se revisaron visualmente; el foco de teclado en WhatsApp mostró selección y desenfoque de hermanas con transición real. El QR autónomo abre, cierra con Escape y devuelve el foco; la consola de la exportación no mostró errores ni advertencias. Pasaron quince diagnósticos nuevos de navegación/preferencia, doce del diálogo y uno de reanudación de apariciones. Se actualizaron el HTML autónomo y las capturas `Claudia_Reyes_Acabado_Trayectoria.png` y `Claudia_Reyes_Acabado_Movil.png`.

Esta etapa sí comprobó movimiento normal en navegador mediante la preferencia local autorizada; la limitación de la etapa anterior, validada solo por arnés, es histórica. No se modificaron preferencias del sistema. NFC físico, escaneo por cámara e importación vCard en iOS/Android siguen pendientes. No hay publicación y se mantiene `noindex, nofollow`.

## Etapa anterior: Contacto con cristal líquido

El usuario solicitó ondas doradas de fondo, tarjetas con acabado de cristal, recursos generados en lugar de los pictogramas, texto más cuidado y eliminación de todas las flechas. Autorizó expresamente el fondo y cinco esculturas para guardar, conversación, correo, teléfono y soporte QR, ampliando el alcance anterior de IA. Fotografías, logo y datos permanecen intactos. WhatsApp conserva su marca oficial superpuesta y el soporte QR utiliza el código escaneable real, sin generarlo.

El fondo `public/assets/contact-gold-waves.png` se generó con la herramienta integrada en una llamada, sin referencias y con fondo opaco. Las cinco esculturas transparentes finales miden 1254 × 1254 px. Los seis recursos se revisaron visualmente y sus copias coinciden con los originales en SHA-256. `CLEMI_Contacto_Recursos.md` reúne los seis PNG y sus tres registros de modo, prompt exacto e integridad.

El cristal usa desenfoque de fondo de 19 px, saturación 1,35, bisel, reflejo de puntero y barrido de brillo de 950 ms. Los títulos combinan entrada de 950 ms con desplazamiento, rotación, desenfoque y máscara, brillo de 1150 ms y limpieza a 1200 ms más retraso. Para conservar las ondas en el HTML autónomo, se muestran como `<img class="contact-waves" alt="" loading="lazy">`; la exportación integra el recurso decorativo.

La validación final de esta etapa pasó: `npm run verify` completó lint, formato y compilación; catorce comprobaciones JavaScript nuevas fueron correctas. Contacto se revisó a 1440 y 320 px en desarrollo y a 768 px en exportación, sin desbordamiento ni imágenes con `src` rotas. Se verificaron QR, copia de correo, cero flechas y consola sin errores ni advertencias. La captura de la exportación regenerada confirma el dorado y el cristal; el HTML y las capturas de escritorio y móvil están actualizados en los entregables. No se instalaron dependencias ni se publicó el sitio. NFC físico, cámara e importación móvil continúan pendientes.

En el archivo autónomo se confirmó el PNG de ondas integrado como data URL y el QR con apertura, cierre por Escape y retorno de foco.

## Etapa actual: protagonismo metalizado y teléfono corregido

El usuario pidió encabezados y secciones más elegantes con resplandor, mayor protagonismo metalizado del nombre y los cargos y corrección del teléfono. `h1.hero-name` gana tamaño, los cargos usan 18–25 px con filo dorado y las cintas satinadas originales de `title-metalwork.svg` sustituyen la hoja histórica. El resplandor dura 850 ms y el brillo de texto 1150 ms; se elimina la competencia de `text-arrival` con transformaciones y filtro de Motion, manteniendo navegación y preferencia local.

`contact-phone-sculpture-v2.png` es el smartphone transparente activo; el auricular anterior se conserva. Su prompt y procedencia están en `CLEMI_Contacto_Telefono_v2_Procedencia.md` y el índice de recursos enlaza la versión activa y marca la anterior como histórica. Se consultó realmente por MCP `metallic text shimmer glow elegant heading`; las tres referencias están en `.21st/DESIGN.md`, sin instalaciones. Fotografías, logo y datos permanecen intactos y el sitio no se publica.

`npm run verify` y `npm run export:preview` pasaron. Desarrollo a 1440 y 320 px no muestra desbordamiento ni imágenes rotas; cargos de 24,48/17,92 px legibles. La auditoría independiente calculó mínimos de contraste de 3,69:1 para el apellido grande y 6,74:1 para cargos, sin conflicto de transformaciones y con prioridad de movimiento reducido conservada. El relleno inferior `padding-bottom: 0.14em` evita recortar descendentes; «Reyes» se revisó corregido en móvil.

La exportación a 768 px se comprobó sin desbordamiento, imágenes rotas ni advertencias o errores de consola. El PNG del smartphone está integrado como datos y carga a 1254 px naturales; `title-metalwork.svg` está integrado como SVG de datos en el CSS. Pausar en móvil establece `data-motion="reduce"` sin animaciones computadas y conserva el acabado metalizado; se reactivó `full` al terminar.

El resplandor real se comprobó en la exportación al pulsar Contacto en la cabecera: `.is-arriving` activo, `section-radiance` en `#contacto::after`, `heading-radiance` en `#contact-title::before` y `text-light` en el texto, con foco en `contact-title`. Al terminar desapareció `.is-arriving` y la animación quedó en `none`, confirmando su duración finita. La captura final a 1440 px conserva completa la descendente de «Reyes». Se actualizaron el HTML autónomo y `Claudia_Reyes_Metalizado_Portada.png`, `Claudia_Reyes_Metalizado_Movil.png` y `Claudia_Reyes_Metalizado_Contacto.png`. No hubo cambios JavaScript en esta etapa ni se repitieron los catorce diagnósticos anteriores; permanecen como históricos. NFC físico, cámara e importación móvil siguen pendientes. No hay publicación.
