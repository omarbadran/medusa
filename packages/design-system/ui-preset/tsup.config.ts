import { defineConfig } from "tsup"
import path from "path"
import { copyFileSync } from "fs"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  dts: true,
  clean: true,
  onSuccess: async () => {
    // Copy CSS file to dist for Tailwind v4 support
    copyFileSync(
      path.resolve(__dirname, "src/index.css"),
      path.resolve(__dirname, "dist/index.css")
    )
    console.log("✓ Copied index.css to dist/")
  },
})
