import type { App } from "vue";
import VSwitch from "./Switch.vue";

VSwitch.install = (app: App) => {
  app.component(VSwitch.name!, VSwitch);
};

export default VSwitch;

export * from "./types";
