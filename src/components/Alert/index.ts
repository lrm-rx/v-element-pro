import type { App } from "vue";
import VAlert from "./Alert.vue";

VAlert.install = (app: App) => {
  app.component(VAlert.name, VAlert);
};

export default VAlert;

export * from "./types";
