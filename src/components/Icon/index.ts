import type { App } from "vue";
import VIcon from "./Icon.vue";

VIcon.install = (app: App) => {
  app.component(VIcon.name, VIcon);
};

export default VIcon;

export * from "./types";
