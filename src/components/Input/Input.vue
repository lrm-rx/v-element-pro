<template>
  <div
    class="lk-input"
    :class="{
      [`lk-input--${type}`]: type,
      [`lk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus
    }"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="lk-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="lk-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="lk-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="lk-input__inner"
          ref="inputRef"
          :="attrs"
          :type="showPassWord ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix slot -->
        <span v-if="$slots.suffix || showClear || showPassWordArea" @click="keepFocus" class="lk-input__suffix">
          <slot name="suffix"></slot>
          <Icon icon="circle-xmark" v-if="showClear" class="lk-input__clear" @click="clear" @mousedown.prevent="NOOP" />
          <Icon icon="eye" v-if="showPassWordArea && passwordVisible" class="lk-input__password" @click="togglePasswordVisible" />
          <Icon
            icon="eye-slash"
            v-if="showPassWordArea && !passwordVisible"
            class="lk-input__password"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="lk-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        class="lk-textarea__wrapper"
        ref="inputRef"
        :="attrs"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VInput",
  inheritAttrs: false
});
import type { Ref } from "vue";
import { ref, watch, computed, useAttrs, nextTick } from "vue";
import type { InputProps, InputEmits } from "./types";
import Icon from "../Icon/Icon.vue";
const props = withDefaults(defineProps<InputProps>(), { type: "text", autocomplete: "off" });
const emits = defineEmits<InputEmits>();
const attrs = useAttrs();
const innerValue = ref(props.modelValue);
const isFocus = ref(false);
const passwordVisible = ref(false);
const inputRef = ref() as Ref<HTMLInputElement>;

const showClear = computed(() => props.clearable && !props.disabled && !!innerValue.value && isFocus.value);
const showPassWordArea = computed(() => props.showPassWord && !props.disabled && !!innerValue.value);
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};
const NOOP = () => {};
const keepFocus = async () => {
  await nextTick();
  inputRef.value.focus();
};
const handleInput = () => {
  emits("update:modelValue", innerValue.value);
  emits("input", innerValue.value);
};
const handleChange = () => {
  emits("change", innerValue.value);
};
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true;
  emits("focus", event);
};
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false;
  emits("blur", event);
};
const clear = () => {
  innerValue.value = "";
  emits("update:modelValue", "");
  emits("clear");
  emits("input", "");
  emits("change", "");
};
watch(
  () => props.modelValue,
  newValue => {
    innerValue.value = newValue;
  }
);
defineExpose({
  ref: inputRef
});
</script>

<style lang="scss" scoped></style>
