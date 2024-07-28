<template>
  <button
    ref="_ref"
    class="lk-button"
    :class="{
      [`lk-button--${type}`]: type,
      [`lk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "VElButton"
});
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button"
});
const _ref = ref<HTMLButtonElement>();
defineExpose({
  ref: _ref
});
</script>

<style></style>
