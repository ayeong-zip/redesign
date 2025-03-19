import { defineConfig } from "vite";
import { resolve } from "node:path";

const config = defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub1: resolve(__dirname, "sub1.html"),
        sub2: resolve(__dirname, "sub2.html"),
        sub3: resolve(__dirname, "sub3.html"),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});

export default config;
