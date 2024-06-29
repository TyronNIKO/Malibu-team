// vite.config.js
import {defineConfig} from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig(({command}) => {
    // config options
    return {
        define: {
            [command === "serve" ? "global" : "_global"]: {},
        },
        plugins: [injectHTML()],
        root: "src",
        build: {
            sourcemap: true,
            outDir: "../public",
        },
    };
});
