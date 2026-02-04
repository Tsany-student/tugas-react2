import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/tugas-react2/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        note: "note.html"
      }
    }
  }
});
