// esbuild.config.js
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    loader: {
      ".ts": "ts",
      ".prisma": "text",
      ".yaml": "text",
      ".toml": "text",
      ".sql": "text",
    },
    external: ["*.prisma", "*.yaml", "*.toml", "*.sql"],
  })
  .catch(() => process.exit(1));
