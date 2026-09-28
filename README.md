# CLEMI · Dra. Claudia Reyes

Landing estática para la tarjeta NFC de la Dra. Claudia Reyes, primera de siete. HTML, CSS y JavaScript con Vite; Times New Roman, crema/perla, azul marino y oro, con banner morado de Trayectoria.

La petición actual incorpora un banner morado ancho de Trayectoria, una carpeta de portafolio y una sola burbuja de WhatsApp con el SVG oficial superpuesto. Título y biografía son HTML a la derecha; en móvil, imagen arriba y texto abajo dentro del mismo panel. Se retiran la galería y su visor. Guardar contacto abre el diálogo QR con descarga y compartir dentro; Contacto conserva cuatro acciones. El pie muestra únicamente el lema exacto centrado, dorado y con animación finita, sin fuentes, créditos, botón de movimiento ni volver arriba.

Validación de esta etapa completada: npm run verify y export:preview pasaron tras los refinamientos finales, al igual que las 14 pruebas de dialog-transition-check.mjs sobre el main actual. Navegador administrado a 1440/320 px y HTML autónomo a 768 px sin desbordamiento ni imágenes rotas. Guardar contacto abre el QR; Escape cierra y devuelve el foco al botón en desarrollo y exportación. Las descargas VCF de ambos entornos coinciden por SHA-256 y texto con public/contacto.vcf. Los tres activos nuevos están integrados en el HTML autónomo; pie centrado y controles retirados comprobados. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes; no se publica.

## Editar y revisar

Requiere Node 22.12 o superior. Usar npm ci y npm run dev con las dependencias existentes. Contenido en content/profile.json; composición en src/page.html; estilos en src/tokens.css, src/style.css, src/liquid-glass.css y src/editorial-banner.css, cargado después del cristal. No editar directamente index.html, public/contacto.vcf ni public/assets/contacto-qr.svg: son generados.

## Composición y recursos

La portada conserva únicamente nombre y cargos metalizados, retrato e ilustración de pie y libro; fotografía a la derecha en escritorio y antes del nombre en móvil. Trayectoria presenta la biografía de 48 palabras como HTML junto al banner, sin frase ni textos impresos. Conexiones mantiene tres tarjetas: Portafolio, Instagram y Fundación CLEMI.

La autorización explícita sustituye la restricción anterior de no editar generativamente retratos para este banner concreto. Se conserva visualmente la apariencia y pose de Claudia, pero no se afirma identidad de píxeles: es una edición generativa, no la fotografía original sin editar. El adjunto editorial original permanece intacto como histórico. El logo oficial, el retrato principal y el adjunto de Instagram no se modifican.

Activos nuevos: biographyBanner → assets/claudia-trayectoria-banner.png (1774 × 887), portfolioIllustration → assets/clemi-portfolio-sculpture.png (1254 × 1254) y assets/contact-whatsapp-sculpture-v2.png (1254 × 1254). La carpeta sustituye al microscopio y la burbuja única sustituye al soporte doble. Prompts y procedencia en docs/RECURSOS_ACTIVOS.md; entrega en CLEMI_Banner_Portafolio_WhatsApp.md.

scienceIllustration permanece solo en portada; institutionalPhoto conserva la foto oficial de formación, sin identificar a Claudia entre sus asistentes. El microscopio, retrato editorial original, retrato SCCOT, soporte doble y placa QR quedan como históricos. La biografía mantiene fuentes [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y [SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf), solo con datos profesionales. Atribuciones y licencias permanecen en docs/THIRD_PARTY_NOTICES.md y documentación de recursos. El pie muestra únicamente «Entrenamos hoy, investigamos para el mañana, transformamos vidas».

## Contacto y movimiento

Contacto reúne Guardar contacto, WhatsApp, Correo y Llamar. Guardar abre el diálogo claro con QR real, descarga vCard y compartir cuando lo admite el navegador. Mantener Escape, cierre y retorno de foco. La descarga alternativa permanece disponible sin JavaScript. Importar y compartir dependen del dispositivo; no se han probado físicamente en iOS/Android.

Las tarjetas de cristal conservan desenfoque de fondo de 19 px, saturación 1,35 y reflejos; las ondas son una imagen decorativa contact-waves, alt vacío y carga diferida. Copiar correo muestra confirmación. No quedan tarjeta QR separada ni flechas. Navegación y enlace de salto llevan a Contacto.

Los títulos entran durante 950 ms, el brillo de texto dura 1150 ms y el resplandor de secciones 850 ms; paneles y retrato usan 620 y 900 ms. Selección por teclado o ratón fino, foco visible y movimiento reducido se conservan. Los enlaces internos usan RAF de 460–1100 ms, foco e historial, con cancelación manual y rueda nativa. motion-preference.js permanece activo sin botón visible: aplica la preferencia local guardada en clemi-motion o, por defecto, la del sistema. No se cambian ajustes del sistema. Todas las animaciones son finitas y se conserva movimiento reducido.

## Comprobar y exportar

Validación de esta etapa completada: npm run verify y export:preview pasaron tras los refinamientos finales, al igual que las 14 pruebas de dialog-transition-check.mjs sobre el main actual. Navegador administrado a 1440/320 px y HTML autónomo a 768 px sin desbordamiento ni imágenes rotas. Guardar contacto abre el QR; Escape cierra y devuelve el foco al botón en desarrollo y exportación. Las descargas VCF de ambos entornos coinciden por SHA-256 y texto con public/contacto.vcf. Los tres activos nuevos están integrados en el HTML autónomo; pie centrado y controles retirados comprobados. NFC físico, cámara e importación vCard en iOS/Android siguen pendientes; no se publica.

Ejecutar npm run verify y npm run export:preview. dist/ contiene la distribución estática; artifacts/Claudia_Reyes_Vista_Previa.html es el HTML autónomo con estilos, fuentes locales, imágenes, scripts, QR y vCard integrados. Algunos visores limitan descargas; la web utiliza contacto.vcf como archivo normal.

Mantener publicUrl: null y noindex, nofollow hasta confirmar el destino y autorizar publicación. Las validaciones por etapa están en docs/CONTINUIDAD.md; las tres maquetas y el Figma oscuro son históricos.

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
