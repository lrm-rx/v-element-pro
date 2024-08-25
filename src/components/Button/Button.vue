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
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: "VButton"
});
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";
import type { ButtonProps } from "./types";
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button"
});
const _ref = ref<HTMLButtonElement>();
defineExpose({
  ref: _ref
});
</script>

<style></style>
