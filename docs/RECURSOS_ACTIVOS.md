# Recursos visuales activos

## Perfil personal de Instagram

- **Archivo:** `public/assets/claudia-reyes-instagram.png`.
- **Procedencia:** imagen adjunta por el usuario en este chat el 28 de septiembre de 2026, recibida como `codex-clipboard-fc021a35-55b1-4de4-b096-fb50ebb3ba09.png`.
- **Destino:** apartado de Instagram personal de la Dra. Claudia Reyes, mediante `instagramPortrait` en `content/profile.json` y el marcador `{{instagramPortrait}}` de la plantilla.
- **Formato y dimensiones verificados:** PNG, 1080 × 1080 píxeles, 858 230 bytes.
- **Integridad:** copia exacta del adjunto, sin editar, regenerar, recortar ni recolorear. Conserva íntegros el retrato, la marca CR y los textos incluidos en la imagen.
- **SHA-256 del original y la copia:** `1bf15e548c7238dfdd579463b994cc7ca9e5050d925a00e0b267cedf1e50c34f`.
- **Alcance de la comprobación:** se verificaron el archivo, sus dimensiones y la coincidencia de hashes. No se contrastó la imagen con el perfil de Instagram en vivo.

El retrato principal `public/assets/dra-claudia-reyes.jpeg` se conserva. El renderizador mantiene el marcador anterior `portraitTile` por compatibilidad.

## Retrato editorial

- **Archivo:** `public/assets/claudia-reyes-editorial.png`.
- **Procedencia:** nuevo adjunto del usuario en este chat el 28 de septiembre de 2026, recibido como `codex-clipboard-9fd566de-1d89-4eb5-929c-ba77141631e0.png`.
- **Destino:** sección editorial, mediante `editorialPortrait` en `content/profile.json` y el marcador `{{editorialPortrait}}` de la plantilla.
- **Formato y dimensiones verificados:** PNG, 715 × 786 píxeles, 612 855 bytes.
- **Integridad:** copia exacta del adjunto, sin editar, regenerar, recortar ni recolorear. Se conservan el retrato, los textos y el usuario de Instagram incluidos en el diseño original.
- **SHA-256 del original y la copia:** `98a9ce685fab1a8d248002ba75f5b335291948e753f112296d266704bdd3afdb`.
- **Alcance de la comprobación:** se verificaron el formato, las dimensiones y la coincidencia de hashes. Los textos integrados en la imagen proceden del adjunto del usuario; no se comparó este recurso con el perfil de Instagram en vivo.

## Retrato profesional publicado por SCCOT

- **Archivo:** `public/assets/claudia-reyes-sccot.jpeg`.
- **Procedencia:** retrato de la Dra. Claudia Reyes con bata médica sobre fondo oscuro, publicado por SCCOT y recuperado para este proyecto el 28 de septiembre de 2026.
- **Imagen de origen:** [archivo JPEG en SCCOT](https://sccot.org/wp-content/uploads/2020/04/Dra.-Claudia-Juliana-Reyes-Reyes.jpeg).
- **Registro de procedencia:** [recurso 9801 de la API pública de SCCOT](https://sccot.org/wp-json/wp/v2/media/9801).
- **Destino:** retrato profesional complementario, mediante `professionalPortrait` en `content/profile.json` y el marcador `{{professionalPortrait}}` de la plantilla.
- **Formato y dimensiones verificados:** JPEG, 853 × 1280 píxeles, 273 849 bytes.
- **Integridad:** copia exacta de la descarga original, sin editar, regenerar, recortar ni recolorear.
- **SHA-256 de la descarga y la copia:** `e036b604f9e15d5db35cdf7ce4ac6956b0f8b1c52067e01fae091e7129e12771`.
- **Licencia:** no se ha confirmado una licencia abierta para esta fotografía. La publicación en el sitio de SCCOT identifica su procedencia.

## Biografía y especialidad

La biografía incorporada en `content/profile.json` recoge formación profesional, especialidad y actividad clínica, docente y de formación quirúrgica. Sus enlaces de consulta son [AAOT](https://congresoaaot.org.ar/invitados/claudia-reyes/) y [la hoja de vida publicada por SCCOT](https://sccot.org/wp-content/uploads/2025/01/Hoja-de-Vida-Claudia-Reyes.doc.pdf). No se incorporaron direcciones personales del documento.

La especialidad «Cirugía de pie y tobillo» también figura en las imágenes entregadas por el usuario. El renderizador valida HTTPS y escapa los nombres y destinos de las fuentes antes de generar sus enlaces.

## Fotografía institucional de formación

- **Archivo:** `public/assets/clemi-formacion.jpeg`.
- **Procedencia:** fotografía publicada en [Nosotros, CLEMI](https://new.clemi.edu.co/nosotros/), recuperada para este proyecto el 28 de septiembre de 2026.
- **Imagen de origen:** [MISION.jpeg en CLEMI](https://new.clemi.edu.co/wp-content/uploads/2021/06/MISION.jpeg).
- **Destino:** contexto institucional de formación; ruta `institutionalPhoto` en `content/profile.json` y marcador `{{institutionalPhoto}}`.
- **Formato y dimensiones verificados:** JPEG, 1280 × 960 píxeles, 71 605 bytes.
- **Integridad:** copia exacta de la descarga, sin editar, regenerar, recortar ni recolorear.
- **SHA-256 de la descarga y la copia:** `b7f950c7cb1079376986dfd3759d8881b9e0208a31b420fbde4b77f2e8c8cf3a`.
- **Identificación:** imagen de una actividad institucional; no se identifica a la Dra. Claudia Reyes entre las personas fotografiadas.
- **Licencia:** no se ha confirmado una licencia abierta. Se conserva la atribución de procedencia a CLEMI.

## Ilustración científica decorativa

- **Archivo:** `public/assets/clemi-science-illustration.png`.
- **Procedencia:** generación nueva con `image_gen__imagegen` el 28 de septiembre de 2026, autorizada por el usuario para ilustraciones. Se utilizó `transparent_background: true`, sin imágenes de referencia.
- **Destino:** ilustración editorial decorativa mediante la ruta `scienceIllustration` y el marcador `{{scienceIllustration}}`.
- **Formato y dimensiones verificados:** PNG de 32 bits ARGB, 1536 × 1024 píxeles, 2 164 053 bytes. La copia conserva el canal alfa del archivo generado.
- **SHA-256:** `26c543ac4faf4afac1d251efeb22cfdf968693d70aa84c6708d246093e5e766d`.
- **Alcance:** composición artística alusiva a cirugía de pie y tobillo y educación; no es material de enseñanza anatómica ni evidencia clínica. No contiene rostros ni logos. No se editó ni regeneró ninguna fotografía de la doctora ni ninguna marca.

Prompt original de generación, conservado desde el registro de trabajo `illustration-provenance.md`:

```text
Use case: stylized-concept.
Asset type: premium decorative raster illustration for a light editorial landing page for an orthopedic surgeon and CLEMI scientific education foundation.
Primary request: create one richly detailed, cohesive sculptural still life that evokes foot and ankle surgery, medical education, and thoughtful growth. The central sculptural object is an elegant translucent smoked-glass foot-and-ankle model with a porcelain-like inner articulated skeletal suggestion, resting at a natural oblique angle. It is a decorative art object, not a technical anatomical teaching diagram. Under and beside it sit gently fanned ivory open-book paper forms with convincing fine page edges, and two delicate branching laurel sprays with detailed antique-gold leaves. Use a few restrained deep navy accents within the book binding and glass shadows. The arrangement should feel curated, calm and accomplished, never a pile of unrelated props.
Style/medium: exceptionally refined editorial 3D still-life, credible optical glass refraction, matte porcelain, fine paper and brushed antique gold. High-end museum-object photography meets contemporary healthcare branding.
Composition/framing: landscape 3:2, central cohesive arrangement, three-quarter view, generous empty space around every side. All objects entirely within frame, no cut-off leaves, no extreme close-up. Objects occupy about 75 percent of the frame width and 76 percent of the frame height.
Lighting/mood: soft warm directional studio lighting, subtle crisp highlights, graceful soft contact shadows, elegant and professional.
Color palette: soft warm ivory #f6f5f1, porcelain white, muted antique gold #a89065, restrained deep navy #1a2744. No saturated bright colors.
Scene/backdrop: genuinely transparent background with preserved alpha, designed to sit seamlessly on a light warm ivory web page. No horizon or room.
Constraints: no text, no letters, no numbers, no logos, no watermarks, no people, no hands, no human portraits, no blood, no injury, no surgical tools. Do not copy any existing logo. No generic floating spheres, no abstract rings, no neon, no clipart, no basic flat geometry. Do not present this as medical instructional imagery.
```
