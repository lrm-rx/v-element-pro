import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { App } from "vue";

import VButton from "@/components/Button";
import VIcon from "@/components/Icon";
import VAlert from "@/components/Alert";
import { VCollapse, VCollapseItem } from "@/components/Collapse";
import VTooltip from "@/components/Tooltip";
import VDropdown from "@/components/Dropdown";
import VMessage from "@/components/Message";
import VNotification from "./components/Notification";
import VInput from "@/components/Input";
import VSwitch from "@/components/Switch";
import VSelect from "./components/Select";
import { VForm, VFormItem } from "./components/Form";
import { createMessage } from "@/components/Message";
import { createNotification } from "@/components/Notification";

import "./styles/index.css";

library.add(fas);
const components = [
  VButton,
  VIcon,
  VAlert,
  VCollapse,
  VCollapseItem,
  VTooltip,
  VDropdown,
  VMessage,
  VNotification,
  VInput,
  VSwitch,
  VSelect,
  VForm,
  VFormItem
];
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

/** 这里将组件导出，是为了在单独使用组件时，可以按需引入 */
export {
  VButton,
  VIcon,
  VAlert,
  VCollapse,
  VCollapseItem,
  VTooltip,
  VDropdown,
  VMessage,
  VNotification,
  VInput,
  VSwitch,
  VSelect,
  VForm,
  VFormItem,
  createMessage,
  createNotification
};

export default {
  install
};

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module "vue" {
  export interface GlobalComponents {
    VButton: typeof VButton;
    VIcon: typeof VIcon;
    VAlert: typeof VAlert;
    VCollapse: typeof VCollapse;
    VCollapseItem: typeof VCollapseItem;
    VTooltip: typeof VTooltip;
    VDropdown: typeof VDropdown;
    VMessage: typeof VMessage;
    VNotification: typeof VNotification;
    VInput: typeof VInput;
    VSwitch: typeof VSwitch;
    VSelect: typeof VSelect;
    VForm: typeof VForm;
    VFormItem: typeof VFormItem;
  }
}
