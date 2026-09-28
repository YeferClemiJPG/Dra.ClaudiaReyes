# Estado real de integraciones · 25 de septiembre de 2026

Una conexión nativa de ChatGPT, una llamada directa al protocolo MCP y la configuración transferible de un cliente Codex son superficies distintas. Las pruebas siguientes no instalan extensiones en el VS Code del usuario ni activan automáticamente plugins de esta conversación.

## Estado actual de Figma · conexión verificada

El usuario conectó el plugin de Figma y autorizó crear un diseño editable. La operación `whoami` verificó la cuenta `asistentediseno@clemi.edu.co`; la respuesta indicó plan Starter, asiento View y rol admin. Las capacidades se comprobaron mediante operaciones reales: se creó un archivo y se escribieron variables, estilos y un componente. No se deducen permisos de edición únicamente a partir del nombre del asiento.

Archivo creado: https://www.figma.com/design/lAsbeIw1NxUMvHQCdNBXJh

Estado comprobado de esta primera propuesta editable:

- Tres colecciones con 46 variables: 17 colores primitivos, 17 alias de color y 12 espacios.
- Seis estilos tipográficos Cormorant Garamond, un estilo de efecto y un botón editable con tres estados. Times New Roman no está disponible mediante esta conexión; la web conserva Times New Roman como familia principal.
- Logo oficial sin texto vectorial, procedente del AI suministrado posteriormente por el usuario; cada uso comprobado contiene 47 vectores. Sustituye al PNG transparente importado inicialmente mediante `createImage`. El retrato se incorporó como copia de 360 × 480 px por el límite de tamaño de carga; la web conserva el JPEG original de 768 × 1024 sin modificar.
- Portada de escritorio en el nodo `8:2`, de 1440 × 1046 px, y portada móvil en `8:3`, de 390 × 1138 px. Ambas contienen navegación, nombre, cargos, logo, retrato, una instancia del botón `4:2`, enlace WhatsApp con el icono de Simple Icons, banda de contacto y lema.
- Captura de escritorio revisada a escala 0,65 y captura móvil revisada a escala 1. La composición móvil se corrigió y se comprobó visualmente sin el borde de imagen anterior.

El alcance es la portada con un componente representativo, no la página completa: los diseños todavía no incluyen las tres tarjetas de conexiones ni el diálogo QR. Son composiciones editables creadas con la API nativa, no una importación automática de coincidencia exacta ni un prototipo interactivo. La propuesta queda disponible para revisión del usuario.

La captura automática HTML → Figma permanece pendiente: el recurso oficial `capture.js` produce un evento de carga `error` en el navegador. La inspección local confirmó que la inyección estaba bien formada. Los intentos de descargar el script para diagnosticarlo no se ejecutaron porque la revisión automática falló técnicamente con `thread-store 500`; no fue una determinación de que la acción fuera insegura ni se eludió esa revisión.

La importación mediante `upload_assets` devolvió errores HTTP 405/413. La alternativa documentada mediante la API nativa `createImage`, con bytes de un recurso cada vez, funcionó para el logo y la copia reducida del retrato. No se guardan aquí direcciones temporales de carga.

Se usa el plugin ya conectado: no se instaló un servidor MCP duplicado. Las portadas de Figma no se han trasladado a la interfaz web, no cambian dominios ni planes y no equivalen a un despliegue. Los apartados de investigación posteriores conservan su contexto histórico anterior a esta conexión.

### Actualización del logo oficial vectorial

El usuario proporcionó un AI oficial sin texto; el original permanece intacto en `design/source/Logo_CLEMI_Oficial_Sin_Texto.ai`. Se convirtió su representación PDF compatible mediante PyMuPDF a `public/assets/logo-clemi-oficial-sin-texto.svg`, sin redibujo ni recoloreado. Es procesamiento local de un recurso autorizado, no una conexión nueva. Se conservan sus colores originales, incluso cuando no coincidan exactamente con los tokens de interfaz.

El original contiene una página de 155,906 × 170,079, 46 dibujos vectoriales y cero imágenes. El SVG transparente tiene 18.845 bytes, 47 trazados y cero imágenes; la exportación PNG tiene 1878 × 2048 px y canal alpha. El cotejo a escala 4 mostró alpha idéntico y diferencias medias RGB de 0,199/0,122/0,115 sobre 255 por conversión y redondeo; el cotejo visual fue correcto. SHA-256 del AI: `4eaab6e03246cd7560f5c1b45794006d540bf4c32ef71fe0615f70049ba2768c`.

Figma: logos vectoriales comprobados en `14:16` (cabecera de escritorio), `14:68` (lema de escritorio), `14:120` (cabecera móvil) y `14:172` (Fundamentos). Se revisaron capturas de las portadas `8:2` y `8:3`. En la web, el perfil apunta al SVG y las seis alturas CSS del logo son automáticas. El PNG anterior de Canva queda archivado, no activo. `npm run verify` y `npm run export:preview` finalizaron correctamente. La revisión de navegador comprobó carga, proporciones y capturas del logo en escritorio y móvil, sin desplazamiento horizontal; no se repitieron pruebas de las interacciones existentes. Detalle en `docs/REVISION.md`.

| Herramienta         | Superficie             | Estado y comprobación                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub              | Conexión de ChatGPT    | Conexión autenticada como YeferClemiJPG; listados Clemiverse (privado) y clemiverse-web (público), rama main, y leído package.json de Clemiverse. El conector permite trabajar con repositorios existentes, pero no expone create_repository. No se modificaron esos repositorios. El acceso de navegador para crear uno nuevo sigue bloqueado: GitHub indicó que esta cuenta no admite autenticación por contraseña y el usuario tampoco pudo entrar. No hay nuevo repositorio remoto creado ni sesión de navegador confirmada. |
| Canva               | Conexión de ChatGPT    | Búsqueda de diseños CLEMI verificada. Solo lectura: ningún diseño creado o editado y ningún recurso ambiguo tomado como logo.                                                                                                                                                                                                                                                                                                                                                                                                    |
| Context7            | MCP directo por HTTPS  | initialize, tools/list, resolve-library-id y query-docs correctos en https://mcp.context7.com/mcp. La primera revisión consultó Vite; la nueva comprobación consultó Motion en /websites/motion_dev. Servidor 4.1.1; negociación de protocolo 2024-11-05 en la evidencia nueva. Las consultas públicas realizadas respondieron sin clave. No es un plugin nativo de esta conversación.                                                                                                                                           |
| Context7            | Configuración de Codex | Se conserva la entrada existente en .codex/config.toml, limitada a resolve-library-id y query-docs. El cliente Codex del usuario deberá cargar la configuración de este proyecto de confianza; no se comprobó su equipo local.                                                                                                                                                                                                                                                                                                   |
| shadcn MCP          | Proceso stdio directo  | Instalado y ejecutado en un directorio aislado: CLI shadcn 4.21.0 y SDK MCP 1.30.1. initialize y tools/list correctos, siete herramientas expuestas. view_items_in_registries consultó @shadcn/dialog y devolvió registry:ui, un archivo y dependencias cn/radix-ui. No se ejecutó add ni se copiaron componentes React a la landing. No es un plugin nativo de ChatGPT.                                                                                                                                                         |
| shadcn MCP          | Configuración de Codex | Entrada añadida en .codex/config.toml con versión 4.21.0 fijada y únicamente view_items_in_registries habilitada. Configuración transferible; falta comprobar la carga en el cliente Codex del usuario.                                                                                                                                                                                                                                                                                                                          |
| Figma               | Plugin de ChatGPT      | Conexión y escritura verificadas: 46 variables, seis estilos tipográficos, un efecto, botón con tres estados y portadas editables de escritorio y móvil con logo y retrato. Capturas revisadas visualmente. Alcance: portada y componente representativo, sin página completa ni prototipo interactivo. Véase el estado actual anterior.                                                                                                                                                                                         |
| Vercel              | Integración externa    | Ausente de las herramientas utilizables en esta sesión. No hay sesión, configuración MCP ni despliegue verificado. Su uso es opcional para una vista previa; el sitio mantiene exportación estática para Hostinger.                                                                                                                                                                                                                                                                                                              |
| Playwright          | Navegador administrado | Disponible mediante API Playwright del navegador y utilizado para revisar interfaz y capturas. No se instaló un servidor Playwright MCP independiente.                                                                                                                                                                                                                                                                                                                                                                           |
| 21st MCP            | Endpoint externo       | Una solicitud initialize sin credenciales a https://21st.dev/api/mcp devolvió HTTP 401 y código -32001: falta clave o fue restablecida. Endpoint accesible, pendiente de autenticación oficial en https://21st.dev/mcp. No se instalaron componentes ni se invocaron generación o consumo de créditos.                                                                                                                                                                                                                           |
| Hostinger           | Alojamiento            | Exportación estática preparada. No hay sesión verificada ni dominio elegido. Hostinger Mail corresponde a correo, no a alojamiento. No hay publicación nueva confirmada.                                                                                                                                                                                                                                                                                                                                                         |
| Codex CLI / VS Code | Equipo local           | No se accedió al equipo local ni a su configuración. Codex CLI no está instalado en este entorno de comprobación. Los archivos entregados no equivalen a una instalación en VS Code.                                                                                                                                                                                                                                                                                                                                             |

## Pruebas reproducibles

`tools/integration-checks/` contiene scripts, manifiesto y lockfile independientes, junto con respuestas JSON/SSE de las comprobaciones. Se excluye node_modules. Las pruebas son de lectura pública y no envían el código, el logo ni los datos personales de la landing.

```sh
cd tools/integration-checks
npm ci
npm run check:shadcn
npm run check:context7
```

Ejecutar npm ci aquí instala herramientas de comprobación en esta subcarpeta, no dependencias de la landing. Durante esta sesión, la instalación y ejecución original ocurrieron en un directorio aislado externo al proyecto; se copiaron scripts y evidencia, no node_modules. El script shadcn hereda solo variables de sistema y proxy necesarias, sin imprimir sus valores. La ruta HTTPS configurada del entorno permitió consultar el registro; ALL_PROXY/SOCKS produjo un error y no se propaga al subproceso de esta prueba. No se alteraron controles de red ni la configuración global.

La evidencia de shadcn incluye la lista de herramientas y la respuesta de lectura del diálogo. La de Context7 incluye inicialización, resolución del identificador y documentación. `21st-initialize.json` registra el HTTP 401. Se revisaron estos archivos en busca de patrones de credenciales antes de incorporarlos.

No hubo compras, cambios de planes o uso de generación de pago. La respuesta de Context7 sin clave demuestra las consultas realizadas, no acceso ilimitado ni una cuenta autenticada.

## Configuración transferible

Se mantiene Context7 y se añade shadcn en `.codex/config.toml`. Las versiones del CLI de shadcn están fijadas y su lista de herramientas habilitadas permite solo la lectura ya comprobada. No se modifica configuración global ni se duplican entradas. Un cliente Codex compatible puede requerir que el proyecto sea de confianza y un reinicio para cargar los servidores.

La documentación oficial de shadcn también describe su entrada en el TOML global de Codex. Si el cliente local no carga configuración por proyecto, incorporar las mismas entradas una sola vez desde sus ajustes MCP. No duplicar conexiones ya disponibles por un plugin. No crear components.json para simular un proyecto React: la consulta pública de diálogo funcionó sin migración de arquitectura.

21st queda pendiente de la autenticación oficial de su cuenta. No guardar claves en el repositorio ni enviarlas por chat. No instalar el antiguo Magic MCP junto con 21st MCP. Revisar licencia, dependencias y compatibilidad del componente concreto antes de copiarlo, y comprobar límites de cuenta antes de una función que pueda consumir créditos.

## Dependencias del proyecto

La landing conserva Vite 8.3.1, Lucide 1.8.0, ESLint 10.11.0 y Prettier 3.9.9. La revisión visual incorpora Motion 13.4.4 y fuentes locales Manrope 5.3.0 y Cormorant Garamond 5.3.0; qrcode 1.5.4 figura como herramienta de desarrollo. Las versiones instaladas se fijan en el package-lock.json principal. Estas bibliotecas y fuentes pertenecen al proyecto, no son conexiones del chat.

Motion ofrece animate e inView para JavaScript sin React. Context7 confirmó esas APIs; la preferencia de movimiento reducido se consulta con matchMedia del navegador y debe aplicarse también a CSS. useReducedMotion y MotionConfig pertenecen a React y no se introducen en este sitio HTML/Vite. La integración visual final debe comprobarse en navegador; el handshake MCP no sustituye esa revisión.

Lucide usa licencia ISC y sus atribuciones se incluyen en public/THIRD_PARTY_NOTICES.txt. Motion y shadcn declaran licencia MIT. La instalación aislada de shadcn sirve para consultar referencias, no añade una segunda biblioteca visual al runtime de la landing.

## Fuentes oficiales

- https://developers.openai.com/codex/mcp/
- https://context7.com/docs/clients/codex
- https://github.com/upstash/context7
- https://21st.dev/mcp
- https://ui.shadcn.com/docs/mcp
- https://motion.dev/docs/quick-start
- https://motion.dev/docs/inview
- https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
- https://lucide.dev/guide/lucide

## Investigación para la referencia visual del usuario

En esta investigación anterior a la conexión actual se consultó el directorio de plugins: Figma estaba sin instalar y con sugerencia pendiente; no se duplicó. Se consultó el catálogo público de 21st (Portfolio Hero y Minimal Dock), sus dependencias y documentación oficial. El catálogo web es accesible; esto no autentica el servidor MCP. La documentación actual exige inicio de sesión para CLI/MCP y distingue búsqueda, instalaciones limitadas y generación con créditos. No se adquirieron componentes ni se utilizó generación. Al no verificar una licencia específica de las fichas, no se copió su código React.

Anton 5.3.0 (OFL-1.1) se incorporó en esa etapa como fuente local para aproximar la tipografía condensada de la referencia. Se conservó Motion/Lucide y no se introdujo un segundo motor de animación ni React. Esa revisión no verificó una conexión nueva de Figma o 21st. Ver docs/REFERENCIA_VISUAL.md y el ajuste institucional posterior.

## Ajuste institucional posterior

Times New Roman es ahora la familia prioritaria por petición del usuario. La interfaz deja de importar Anton y Manrope; sus paquetes se mantienen para conservar las versiones anteriores y evitar limpieza ajena al cambio. Cormorant Garamond, ya instalado, ofrece respaldo local 400/600/700 cuando Times/Georgia no están disponibles. No se añade una integración ni una dependencia nueva para este ajuste.

## Revisión de conexiones y recursos · refinamiento visual

Context7 directo revalidado: initialize, tools/list y query-docs sobre Motion correctos; servidor 4.1.1. shadcn 4.21.0 revalidado desde la instalación aislada existente: siete herramientas y lectura de @shadcn/dialog correcta. No se reinstalaron ni duplicaron configuraciones.

En esta revisión histórica Figma estaba disponible sin instalar y con sugerencia pendiente. Ese estado quedó superado por la conexión verificada descrita al inicio. Existe también un plugin nativo Context7 sin instalar, pero sería redundante con la vía directa ya funcional. 21st devolvió nuevamente 401 por falta de autenticación; no se utilizaron generación ni créditos.

Canva se utilizó para localizar e inspeccionar un logo institucional existente. El PNG transparente de «Firmas Clemi» fue descargado por el navegador porque el conector solo exponía la miniatura y no ofrecía descargar los bytes. Todas las transacciones de inspección quedaron canceladas, sin modificar diseños. El archivo recuperado tiene 155 × 200 px; no se afirma descarga del original HD. La búsqueda previa de PNG en los archivos guardados encontró candidatos, pero su descarga falló y no se usaron.

Se incorporan únicamente dos SVG de Simple Icons 16.32.0, sin instalar su paquete ni añadir dependencias runtime. Licencia CC0 y paths de los iconos verificados. Son recursos del proyecto, no una conexión MCP. No hubo publicación, compra, actualización de planes ni instalación de extensiones de VS Code.

## Investigación adicional del acabado de referencia

En esta investigación anterior se buscó en el directorio y en documentación primaria de herramientas de diseño. Figma estaba pendiente de conexión ya sugerida; no se duplicó la sugerencia. Las plataformas Webflow/Replit/Wix no son necesarias para modificar este sitio Vite existente. El MCP daisyUI Blueprint requiere licencia y no se activó.

Se descargó e inspeccionó Frostpane 1.2.0 con `npm pack --ignore-scripts` fuera del proyecto: CSS Core de 12.358 bytes, sin dependencias de ejecución, pero con selectores globales, modo de color automático y reglas universales de movimiento reducido; además reserva pseudoelementos y referencia un filtro SVG. Se descartó su instalación en la landing porque exigiría anulaciones y duplicaría superficies ya resueltas por el CSS existente. Descargar para evaluar no equivale a instalar una conexión.

Se utilizó image_gen para un recurso abstracto metálico específico de portafolio. También se probó una única extracción de fondo del retrato, rechazada por cambios faciales; no se incluyó. Motion/Lucide y los MCP Context7/shadcn existentes siguen siendo las herramientas compatibles. En esa etapa no se añadieron dependencias ni se verificó una conexión Figma/21st nueva; Figma quedó verificado posteriormente, como se registra al inicio.

Fuentes primarias: https://github.com/cameronrye/frostpane · https://daisyui.com/docs/mcp/codex/ · https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/mask-composite
