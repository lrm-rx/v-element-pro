/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}
declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";
  function eslintPlugin(options?: any): Plugin;
  export default eslintPlugin;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: unknown;
    }
  }
}
