<template>
  <div
    class="lk-select"
    :class="{
      'is-disabled': disabled
    }"
    @click="toggleDropdown"
    @mouseenter="states.mouseHover = true"
    @mouseleave="states.mouseHover = false"
  >
    <Tooltip
      ref="tooltipRef"
      placement="bottom-start"
      manual
      :popper-options="popperOptions"
      @click-outside="controlDropdown(false)"
    >
      <Input
        ref="inputRef"
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="filteredPlaceholder"
        :readonly="!filterable || !isDropdownShow"
        @input="debounceOnFilter"
        @keydown="handleKeyDown"
      >
        <template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="lk-input__clear"
            @mousedown.prevent="NOOP"
            @click.stop="onClear"
          />
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{
              'is-active': isDropdownShow
            }"
          />
        </template>
      </Input>
      <template #content>
        <div class="lk-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin />
        </div>
        <div class="lk-select__nodata" v-else-if="filterable && filteredOptions.length === 0">暂无数据</div>
        <ul class="lk-select__menu" v-else>
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="lk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value,
                'is-highlighted': states.highlightIndex === index
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :v-node="renderLabel ? renderLabel(item) : item.label" />
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
import { reactive, ref, computed, watch } from "vue";
import { isFunction, debounce } from "lodash-es";
import type { SelectOption, SelectProps, SelectEmits, SelectStates } from "./types";
import type { InputInstance } from "../Input";
import type { TooltipInstance } from "../Tooltip/types";
import Tooltip from "../Tooltip/Tooltip.vue";
import Input from "../Input/Input.vue";
import Icon from "../Icon/Icon.vue";
import RenderVnode from "../Common/RenderVnode";

const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value);
  return option ? option : null;
};

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
});
const timeout = computed(() => (props.remote ? 300 : 0));
const emits = defineEmits<SelectEmits>();

const initialOption = findOption(props.modelValue);
// const tooltipRef = ref() as Ref<TooltipInstance>;
const tooltipRef = ref<TooltipInstance | null>(null);
const inputRef = ref<InputInstance | null>(null);
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : "",
  selectedOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
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
const filteredOptions = ref(props.options);
watch(
  () => props.options,
  newOptions => {
    filteredOptions.value = newOptions;
  }
);
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return;
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue);
  } else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true;
    try {
      filteredOptions.value = await props.remoteMethod(searchValue);
    } catch (error) {
      console.error(error);
      filteredOptions.value = [];
    } finally {
      states.loading = false;
    }
  } else {
    filteredOptions.value = props.options.filter(option => option.label.includes(searchValue));
  }
  states.highlightIndex = -1;
};
const onFilter = () => {
  generateFilterOptions(states.inputValue);
};
const debounceOnFilter = debounce(() => {
  onFilter();
}, timeout.value);
const filteredPlaceholder = computed(() => {
  return props.filterable && states.selectedOption && isDropdownShow.value ? states.selectedOption.label : props.placeholder;
});
const controlDropdown = (show: boolean) => {
  if (show) {
    // filter 模式 和 之前选择过的对应的值
    if (props.filterable && states.selectedOption) {
      states.inputValue = "";
    }
    // 进行一次默认选项的生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue);
    }
    tooltipRef.value.show();
  } else {
    tooltipRef.value.hide();
    // blur 时将之前的值回显到 input 中
    if (props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : "";
    }
    states.highlightIndex = -1;
  }
  isDropdownShow.value = show;
  emits("visible-change", show);
};
const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case "Enter":
      if (!isDropdownShow.value) {
        controlDropdown(true);
      } else {
        if (states.highlightIndex > -1 && filteredOptions.value[states.highlightIndex]) {
          itemSelect(filteredOptions.value[states.highlightIndex]);
        } else {
          controlDropdown(false);
        }
      }
      break;
    case "Escape":
      if (isDropdownShow.value) {
        controlDropdown(false);
      }
      break;
    case "ArrowUp":
      e.preventDefault();
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === 0) {
          states.highlightIndex = filteredOptions.value.length - 1;
        } else {
          states.highlightIndex--;
        }
      }
      break;
    case "ArrowDown":
      e.preventDefault();
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1 || states.highlightIndex === filteredOptions.value.length - 1) {
          states.highlightIndex = 0;
        } else {
          states.highlightIndex++;
        }
      }
      break;
    default:
      break;
  }
};
const showClearIcon = computed(() => {
  // hover 上去
  // props.clearable 为 true
  // 必须要有选择过选项
  // Input 的值不能为空
  return props.clearable && states.mouseHover && states.selectedOption && states.inputValue.trim() !== "";
});
const onClear = () => {
  states.selectedOption = null;
  states.inputValue = "";
  emits("clear");
  emits("change", "");
  emits("update:modelValue", "");
};
const NOOP = () => {};
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
  states.selectedOption = e;
  emits("change", e.value);
  emits("update:modelValue", e.value);
  controlDropdown(false);
  inputRef.value.ref.focus();
};
</script>

<style scoped></style>
