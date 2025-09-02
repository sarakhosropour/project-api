import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    external: ["react", "react-dom"],
  },
  build: {
    outDir: "./dist",
  },
  server: {
    allowedHosts: true,
  },
});
