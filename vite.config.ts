import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const { resolve } = path;

export default defineConfig({
    define: {
        __APP_ENV__: process.env.VITE_URL,
    },
    plugins: [react()],
    resolve: {
        alias: {
            pages: resolve(__dirname, "./src/pages"),
            widgets: resolve(__dirname, "./src/widgets"),
            shared: resolve(__dirname, "./src/shared"),
            entities: resolve(__dirname, "./src/entities"),
            features: resolve(__dirname, "./src/features"),
        },
    },
});
