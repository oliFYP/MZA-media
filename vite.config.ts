import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MZA-media/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
