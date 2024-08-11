<template>
  <div class="lk-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="lk-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
            <li
              class="lk-dropdown__item"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVnode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TooltipInstance } from "../Tooltip/types";
import type { DropdownProps, DropdownEmits, DropdownInstance, MenuOption } from "./types";
import RenderVnode from "../Common/RenderVnode";
import Tooltip from "../Tooltip/Tooltip.vue";

defineOptions({
  name: "VDropdown"
});
const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true
});
const emits = defineEmits<DropdownEmits>();
/** Tooltip 实例 */
const tooltipRef = ref<TooltipInstance | null>(null);
const visibleChange = (e: boolean) => {
  emits("visible-change", e);
};
const itemClick = (item: MenuOption) => {
  if (item.disabled) return;
  emits("select", item);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
});
</script>

<style scoped></style>
