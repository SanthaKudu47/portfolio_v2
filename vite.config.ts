import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@constants": "/src/constants/index.ts",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils/index.ts",
      "@store": "/src/store",
      "@events":"/src/events"
      
    },
  },
});
