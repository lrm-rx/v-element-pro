import type { App } from "vue";
import VButton from "./Button.vue";

VButton.install = (app: App) => {
  app.component(VButton.name, VButton);
};

export default VButton;

export * from "./types";
