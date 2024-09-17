import type { App } from "vue";
import VNotification from "./Notification.vue";
import { createNotification } from "./method";

VNotification.install = (app: App) => {
  app.component(VNotification.name!, VNotification);
};

export default VNotification;
export { createNotification };

export * from "./types";
