import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// IMPORTANT: base must match your GitHub repository name for GitHub Pages
// e.g. if your repo is https://github.com/<user>/portfolio, base should be "/portfolio/"
// If you deploy to a USERNAME.github.io root repo instead, set base to "/"
export default defineConfig({
    plugins: [react()],
    base: "/",
    build: {
        outDir: "dist",
    },
});
