import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  root: "src",
  define: { "process.env": process.env },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        aboutUs: resolve(__dirname, "src/about-us.html"),
        blog: resolve(__dirname, "src/blog.html"),
        doctors: resolve(__dirname, "src/doctors.html"),
        services: resolve(__dirname, "src/services.html"),
        pricing: resolve(__dirname, "src/pricing.html"),
      },
    },
    outDir: "../dist",
  },

  plugins: [injectHTML(), FullReload(["./src//.html"])],
});
