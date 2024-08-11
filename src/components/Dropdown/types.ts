import type { VNode } from "vue";
import type { TooltipProps } from "../Tooltip/types";

export interface MenuOption {
  label: string | VNode;
  key: string | number;
  disabled?: boolean;
  divided?: boolean;
}

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[];
  /** 是否在点击菜单项后隐藏菜单 */
  hideAfterClick?: boolean;
}

export interface DropdownEmits {
  (e: "visible-change", value: boolean): void;
  (e: "select", value: MenuOption): void;
}

export interface DropdownInstance {
  show: () => void;
  hide: () => void;
}
