import type { App } from "vue";
import VForm from "./Form.vue";
import VFormItem from "./FormItem.vue";

VForm.install = (app: App) => {
  app.component(VForm.name!, VForm);
};

VFormItem.install = (app: App) => {
  app.component(VFormItem.name!, VFormItem);
};

export { VForm, VFormItem };

export * from "./types";
