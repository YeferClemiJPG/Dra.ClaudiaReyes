import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { writeFileSync, readFileSync } from "node:fs";
const transport = new StdioClientTransport({
  command: process.execPath,
  args: ["./node_modules/shadcn/dist/index.js", "mcp"],
  cwd: import.meta.dirname,
  env: Object.fromEntries(
    Object.entries(process.env).filter(([key]) =>
      /^(PATH|HOME|SYSTEMROOT|COMSPEC|PATHEXT|HTTP_PROXY|HTTPS_PROXY|NO_PROXY|http_proxy|https_proxy|no_proxy|NODE_EXTRA_CA_CERTS|SSL_CERT_FILE|NODE_USE_ENV_PROXY)$/.test(
        key,
      ),
    ),
  ),
});
const client = new Client(
  { name: "clemi-integration-check", version: "1.0.0" },
  { capabilities: {} },
);
const timer = setTimeout(() => {
  console.error("Timeout");
  process.exit(1);
}, 60000);
try {
  await client.connect(transport);
  const tools = await client.listTools();
  const evidence = {
    server: client.getServerVersion(),
    package: JSON.parse(
      readFileSync(
        new URL("./node_modules/shadcn/package.json", import.meta.url),
      ),
    ).version,
    tools,
  };
  writeFileSync(
    new URL("./shadcn-tools.json", import.meta.url),
    JSON.stringify(evidence, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        server: evidence.server,
        package: evidence.package,
        tools: tools.tools.map((tool) => tool.name),
      },
      null,
      2,
    ),
  );
  const dialog = await client.callTool({
    name: "view_items_in_registries",
    arguments: { items: ["@shadcn/dialog"] },
  });
  writeFileSync(
    new URL("./shadcn-dialog.json", import.meta.url),
    JSON.stringify(dialog, null, 2),
  );
  console.log(JSON.stringify(dialog, null, 2));
  if (dialog.isError) process.exitCode = 1;
} finally {
  clearTimeout(timer);
  await client.close();
}
