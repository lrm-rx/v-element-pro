import type { App } from "vue";
import VMessage from "./Message.vue";
import { createMessage } from "./method";

VMessage.install = (app: App) => {
  app.component(VMessage.name, VMessage);
};

export default VMessage;
export { createMessage };

export * from "./types";
