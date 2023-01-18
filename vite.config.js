import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig({
    root: "src",
    base: "",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/main.html"),
          login: resolve(__dirname, "src/index.html")
        },
      },
      outDir: resolve(__dirname, "public"),
      emptyOutDir: true,
    },
    
});