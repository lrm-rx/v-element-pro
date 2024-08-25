import type { App } from "vue";
import VDropdown from "./Dropdown.vue";

VDropdown.install = (app: App) => {
  app.component(VDropdown.name, VDropdown);
};

export default VDropdown;

export * from "./types";
