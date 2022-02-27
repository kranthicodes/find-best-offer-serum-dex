import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-polyfill-node";
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(),react(), nodePolyfills({ include: ["buffer"] })],
  resolve: {
    alias: [
      { find: "~", replacement: path.resolve(__dirname, "src") }
    ],
  },
});
