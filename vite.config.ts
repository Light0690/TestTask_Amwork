import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/UI"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@pages": path.resolve(__dirname, "./src/pages")
    },
  },
  plugins: [react()],
});
