import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 配置@指向src目录
    }
  },
  server: {
    // 开启热更新（Hot Module Replacement）
    hmr: true
  }
});
