<template>
  <div
    class="lk-switch"
    :class="{
      [`lk-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click="switchValue"
  >
    <input
      ref="input"
      class="lk-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="lk-switch__core">
      <div class="lk-switch__core-inner">
        <span v-if="activeText || inactiveText" class="lk-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="lk-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VSwitch",
  inheritAttrs: false
});
import { ref, computed, watch, onMounted } from "vue";
import type { SwitchProps, SwitchEmits } from "./types";
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false
});
const emits = defineEmits<SwitchEmits>();
const innerValue = ref(props.modelValue);
const input = ref<HTMLInputElement>();
// 是否被选中
const checked = computed(() => innerValue.value === props.activeValue);
const switchValue = () => {
  if (props.disabled) return;
  const newValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = newValue;
  emits("update:modelValue", newValue);
  emits("change", newValue);
};
onMounted(() => {
  input.value!.checked = checked.value;
});
watch(checked, val => {
  input.value!.checked = val;
});
watch(
  () => props.modelValue,
  newVal => {
    innerValue.value = newVal;
  }
);
</script>

<style scoped></style>
