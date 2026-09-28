# CLEMI · Dra. Claudia Reyes

Landing estática para la tarjeta NFC de la Dra. Claudia Reyes, primera de siete. HTML, CSS y JavaScript con Vite; Times New Roman, crema/perla, azul marino y oro, con banner morado de Trayectoria.

La corrección actual aplica azul SCCOT a las ondas del fondo de Contacto mediante edición generativa y restaura Conexiones al diseño anterior a los acentos azules. El cristal, los iconos dorados y las acciones de Contacto se conservan. Verificación y exportación aprobadas; revisión de desarrollo a 1280/320 px sin desbordamiento, con Contacto azul legible y Conexiones restaurada. El HTML autónomo integra el PNG exacto.

La etapa anterior recuperó nombre, especialidad e Instagram como HTML dentro del banner morado v2 y amplió el retrato mediante relleno generativo. Su encuadre se revisó a 1440, 1280, 1000, 768 y 320 px; verificación y exportación pasaron entonces. Detalle y límites por etapa en `docs/CONTINUIDAD.md`.

## Editar y revisar

Requiere Node 22.12 o superior. Usar npm ci y npm run dev con las dependencias existentes. Contenido en content/profile.json; composición en src/page.html; estilos en src/tokens.css, src/style.css, src/liquid-glass.css y src/editorial-banner.css, cargado después del cristal. No editar directamente index.html, public/contacto.vcf ni public/assets/contacto-qr.svg: son generados.

## Composición y recursos

La portada conserva únicamente nombre y cargos metalizados, retrato e ilustración de pie y libro; fotografía a la derecha en escritorio y antes del nombre en móvil. Trayectoria presenta nombre, especialidad, enlace de Instagram y biografía de 48 palabras como HTML dentro del banner, sin cita ni textos impresos. Conexiones mantiene tres tarjetas: Portafolio, Instagram y Fundación CLEMI.

En escritorio, la imagen de Trayectoria conserva su proporción natural con altura automática; no crece para cubrir la altura del texto. Hasta 900 px, una ventana cuadrada alineada arriba a la izquierda y limitada a 440 px muestra la mitad izquierda del lienzo, donde se sitúa el retrato con sus márgenes. El texto sigue debajo dentro del mismo panel y el fondo morado une ambas zonas con una transición suave también en los laterales.

La autorización explícita sustituye la restricción anterior de no editar generativamente retratos para este banner concreto. Se conserva visualmente la apariencia y pose de Claudia, pero no se afirma identidad de píxeles: es una edición generativa, no la fotografía original sin editar. El adjunto editorial original permanece intacto como histórico. El logo oficial, el retrato principal y el adjunto de Instagram no se modifican.

Activos vigentes: biographyBanner → assets/claudia-trayectoria-banner-v2.png (1774 × 887), portfolioIllustration → assets/clemi-portfolio-sculpture.png (1254 × 1254) y assets/contact-whatsapp-sculpture-v2.png (1254 × 1254). El retrato editorial original y el banner v1 se conservan como históricos. La carpeta sustituye al microscopio y la burbuja única sustituye al soporte doble. Prompts y procedencia en docs/RECURSOS_ACTIVOS.md; entrega en CLEMI_Banner_Portafolio_WhatsApp.md.

scienceIllustration permanece solo en portada; institutionalPhoto conserva la foto oficial de formación, sin identificar a Claudia entre sus asistentes. El microscopio, retrato editorial original, retrato SCCOT, soporte doble y placa QR quedan como históricos. La biografía mantiene fuentes [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y [SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf), solo con datos profesionales. Atribuciones y licencias permanecen en docs/THIRD_PARTY_NOTICES.md y documentación de recursos. El pie muestra únicamente «Entrenamos hoy, investigamos para el mañana, transformamos vidas».

## Contacto y movimiento

Contacto reúne Guardar contacto, WhatsApp, Correo y Llamar. Guardar abre el diálogo claro con QR real, descarga vCard y compartir cuando lo admite el navegador. Mantener Escape, cierre y retorno de foco. La descarga alternativa permanece disponible sin JavaScript. Importar y compartir dependen del dispositivo; no se han probado físicamente en iOS/Android.

Las tarjetas de cristal conservan desenfoque de fondo de 19 px, saturación 1,35 y reflejos; las ondas azul SCCOT son la imagen decorativa `assets/contact-blue-waves.png`, con clase contact-waves, alt vacío y carga diferida. El original dorado se conserva como histórico. Copiar correo muestra confirmación. No quedan tarjeta QR separada ni flechas. Navegación y enlace de salto llevan a Contacto.

Los títulos entran durante 950 ms, el brillo de texto dura 1150 ms y el resplandor de secciones 850 ms; paneles y retrato usan 620 y 900 ms. Selección por teclado o ratón fino, foco visible y movimiento reducido se conservan. Los enlaces internos usan RAF de 460–1100 ms, foco e historial, con cancelación manual y rueda nativa. motion-preference.js permanece activo sin botón visible: aplica la preferencia local guardada en clemi-motion o, por defecto, la del sistema. No se cambian ajustes del sistema. Todas las animaciones son finitas y se conserva movimiento reducido.

## Comprobar y exportar

La compilación, lint, formato y exportación de la corrección anterior del banner v2 pasaron. Desarrollo revisado a 1440/1280/1000/768/320 px: identidad accesible correcta, sin desbordamiento en 1280/1000/768/320 px y sin imágenes rotas en 1280/320 px; consola limpia a 768 px. A 1000 px, la imagen conserva ratio 2:1 aunque el texto ocupe más altura. La copia autónoma, su PNG integrado y los tres textos se comprobaron por contenido; no hubo revisión visual de `file:` por bloqueo del navegador. Las catorce pruebas de diálogo y las descargas VCF exactas son históricas y no se repitieron porque el JavaScript de interacción no cambia. NFC físico, cámara e importación móvil siguen pendientes.

Ejecutar npm run verify y npm run export:preview. dist/ contiene la distribución estática; artifacts/Claudia_Reyes_Vista_Previa.html es el HTML autónomo con estilos, fuentes locales, imágenes, scripts, QR y vCard integrados. Algunos visores limitan descargas; la web utiliza contacto.vcf como archivo normal.

Las validaciones por etapa están en docs/CONTINUIDAD.md; las tres maquetas y el Figma oscuro son históricos.

## Publicar en GitHub Pages

El usuario autorizó la publicación y el repositorio es público. El destino configurado es [la landing en GitHub Pages](https://yeferclemijpg.github.io/Dra.ClaudiaReyes/).

La rama de publicación es `refine/interaction-visual`. El flujo `.github/workflows/pages.yml` instala las dependencias con `npm ci`, ejecuta `npm run verify`, sube únicamente `dist/` y despliega en GitHub Pages. No requiere fusionar la rama con `main`. Revisar el resultado del flujo y comprobar la URL antes de dar el despliegue por validado.

`content/profile.json` usa `publicUrl: "https://yeferclemijpg.github.io/Dra.ClaudiaReyes/"`, que genera el canonical y `index, follow`; Vite conserva `base: "./"` para resolver los recursos dentro de la ruta del proyecto. La configuración anterior con `publicUrl: null` y `noindex, nofollow` correspondía a la etapa de vista previa.

## Publicar en Hostinger

1. Construir con `npm run build`.
2. Subir **el contenido** de `dist/` al directorio público elegido, dejando `index.html`, `contacto.vcf` y `assets/` al mismo nivel.
3. Para una ruta NFC independiente, usar una carpeta dedicada, por ejemplo `public_html/claudia-reyes/`, sin sobrescribir otros sitios. El ejemplo requiere confirmar dominio y ubicación final.
4. Probar esa URL HTTPS desde un móvil; después grabar esa dirección permanente en la tarjeta NFC.

También es posible desplegar desde GitHub mediante la integración Git de Hostinger, si el plan lo admite. Esta integración estática no debe apuntar directamente a la raíz del repositorio fuente: usar una rama de distribución cuyo contenido sea `dist/`, o configurar una compilación y salida `dist` si se utiliza el producto de alojamiento de aplicaciones. La rama de distribución aún no se creó ni conectó.

En Hostinger, revisar el sitio elegido → Advanced → Git → Connect with GitHub y limitar la autorización al repositorio de esta landing. La migración a Hostinger sigue pendiente: no se configuraron acceso, alojamiento ni dominio allí.

Documentación oficial: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

## GitHub y conexiones

Repositorio público confirmado: [YeferClemiJPG/Dra.ClaudiaReyes](https://github.com/YeferClemiJPG/Dra.ClaudiaReyes). Era privado durante la recuperación del ZIP suministrado por el usuario el 28 de septiembre de 2026. Consultar `docs/CONTINUIDAD.md` para el estado actual y `docs/INTEGRACIONES.md`, `docs/SISTEMA_VISUAL.md`, `docs/REVISION.md` y `docs/PLAN_SIETE_LANDINGS.md` para las decisiones y revisiones anteriores.
