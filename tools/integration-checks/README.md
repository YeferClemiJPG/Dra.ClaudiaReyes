# Comprobación de integraciones CLEMI

Verificado el 25 de septiembre de 2026. Este directorio es un banco de comprobación aislado. No modifica la landing ni la configuración global de Codex.

## Resultado

| Servicio           | Operación real                                                       | Resultado                                                                                                            |
| ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| shadcn MCP         | initialize, tools/list, view_items_in_registries para @shadcn/dialog | Correcto. CLI 4.21.0, servidor 1.0.0, siete herramientas. Dialog: registry:ui, un archivo, dependencias cn/radix-ui. |
| Context7 HTTPS MCP | initialize, tools/list, resolve-library-id, query-docs               | Correcto. Servidor Context7 4.1.1, documentación Motion de /websites/motion_dev.                                     |
| 21st MCP           | Una solicitud initialize sin credenciales                            | HTTP 401. Requiere autenticación oficial; mensaje de clave ausente o restablecida.                                   |

No se ejecutaron operaciones add, generación, compras o cambios de plan. No se enviaron código institucional, imágenes ni datos de personas. La consulta del registro público de shadcn no exigió autenticación. Las consultas Context7 realizadas no exigieron clave; eso no asegura disponibilidad ilimitada ni elimina sus límites del servicio.

## Reproducir

Desde este directorio:

```sh
npm ci
node check-shadcn.mjs
python check-context7.py
```

`check-shadcn.mjs` transmite al subproceso únicamente las variables de sistema y proxy necesarias; no imprime sus valores. En este entorno, ALL_PROXY usa SOCKS y produjo ConnectionRefused. El script conserva HTTP_PROXY/HTTPS_PROXY/NO_PROXY y sus equivalentes en minúscula para usar el proxy HTTPS disponible. No altera la configuración global ni intenta conexiones directas alternativas.

## Configuración sugerida para el cliente Codex

La documentación de shadcn indica una configuración manual en el TOML de Codex y reiniciar el cliente. Esto no implica que aquí se haya modificado ese archivo:

```toml
[mcp_servers.shadcn]
command = "npx"
args = ["-y", "shadcn@4.21.0", "mcp"]

[mcp_servers.context7]
url = "https://mcp.context7.com/mcp"
```

No duplicar entradas ya existentes. No crear components.json para fingir una aplicación React: la lectura pública funciona sin migrar la landing.

## Motion para el proyecto actual

El paquete `motion` ofrece APIs JavaScript y no requiere convertir la interfaz a React. Se verificó la versión publicada 13.4.4 con licencia MIT. La consulta Context7 confirma animate, inView y stagger. `useReducedMotion` y `MotionConfig` pertenecen a React; para este sitio corresponde matchMedia del navegador.

Ejemplo compuesto a partir de las APIs documentadas (requiere validación en la landing):

```js
import { animate, inView } from "motion";
const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
inView("[data-reveal]", (element) => {
  if (preference.matches) return;
  animate(
    element,
    { opacity: [0, 1], y: [18, 0] },
    {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  );
});
```

El contenido base debe permanecer visible si JavaScript no carga. La implementación final debe aplicar también la preferencia reducida a CSS y a interacciones adicionales.

## Fuentes oficiales

- https://ui.shadcn.com/docs/mcp
- https://github.com/upstash/context7
- https://motion.dev/docs/quick-start
- https://motion.dev/docs/inview
- https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- https://21st.dev/mcp (destino de autenticación indicado por el endpoint oficial)

Los JSON y SSE de este directorio conservan la evidencia de las respuestas. No contienen claves o contraseñas.
