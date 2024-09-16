import type { App } from "vue";
import VSelect from "./Select.vue";

VSelect.install = (app: App) => {
  app.component(VSelect.name!, VSelect);
};

export default VSelect;

export * from "./types";
