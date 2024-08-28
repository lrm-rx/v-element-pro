<template>
  <div
    class="vl-input"
    :class="{
      [`vl-input--${type}`]: type,
      [`vl-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="vl-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="vl-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="vl-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input class="vl-input__inner" :type="type" :disabled="disabled" />
        <!-- suffix slot -->
        <span v-if="$slots.suffix" class="vl-input__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea class="vl-textarea__wrapper" :disabled="disabled"></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VInput"
});
import type { InputProps } from "./types";
withDefaults(defineProps<InputProps>(), { type: "text" });
</script>

<style lang="scss" scoped></style>
