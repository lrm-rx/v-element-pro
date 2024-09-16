import type { App } from "vue";
import VInput from "./Input.vue";

VInput.install = (app: App) => {
  app.component(VInput.name, VInput);
};

export default VInput;

export * from "./types";
