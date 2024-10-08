import type { App } from "vue";
import VCollapse from "./Collapse.vue";
import VCollapseItem from "./CollapseItem.vue";

VCollapse.install = (app: App) => {
  app.component(VCollapse.name, VCollapse);
};

VCollapseItem.install = (app: App) => {
  app.component(VCollapseItem.name, VCollapseItem);
};

export { VCollapse, VCollapseItem };

export * from "./types";
