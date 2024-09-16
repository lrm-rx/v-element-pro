<template>
  <div
    class="lk-select"
    :class="{
      'is-disabled': disabled
    }"
    @click="toggleDropdown"
  >
    <Tooltip ref="tooltipRef" placement="bottom-start" manual :popper-options="popperOptions">
      <Input v-model="states.inputValue" :disabled="disabled" :placeholder="placeholder" readonly />
      <template #content>
        <ul class="lk-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li
              class="lk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectOption?.value === item.value
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VSelect"
});
import { reactive, ref } from "vue";
import type { SelectOption, SelectProps, SelectEmits, SelectStates } from "./types";
import type { TooltipInstance } from "../Tooltip/types";
import Tooltip from "../Tooltip/Tooltip.vue";
import Input from "../Input/Input.vue";
const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value);
  return option ? option : null;
};

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
});
const emits = defineEmits<SelectEmits>();

const initialOption = findOption(props.modelValue);
// const tooltipRef = ref() as Ref<TooltipInstance>;
const tooltipRef = ref<TooltipInstance | null>(null);
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : "",
  selectOption: initialOption
});
const isDropdownShow = ref(false);
const popperOptions = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 9]
      }
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"]
    }
  ]
};
const controlDropdown = (show: boolean) => {
  if (show) {
    tooltipRef.value.show();
  } else {
    tooltipRef.value.hide();
  }
  isDropdownShow.value = show;
  emits("visible-change", show);
};
const toggleDropdown = () => {
  if (props.disabled) return;
  if (isDropdownShow.value) {
    controlDropdown(false);
  } else {
    controlDropdown(true);
  }
};
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return;
  states.inputValue = e.label;
  states.selectOption = e;
  emits("change", e.value);
  emits("update:modelValue", e.value);
  controlDropdown(false);
};
</script>

<style scoped></style>
