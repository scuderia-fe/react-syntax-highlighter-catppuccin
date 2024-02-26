import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-syntax-highlighter-catppuccin",
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
  plugins: [
    dts({
      outDir: "dist",
      entryRoot: "src",
    }),
  ],
});
