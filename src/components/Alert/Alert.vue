<template>
  <Transition name="fade">
    <div
      v-if="!AlertClose"
      class="lk-alert"
      :class="{ [`lk-alert--${type}`]: type }"
      :style="{ justifyContent: center ? 'center' : 'flex-start' }"
    >
      <div v-if="showIcon" class="lk-alert__icon">
        <Icon :icon="dynamicIcon" />
      </div>
      <div class="lk-alert__content">
        <slot>
          <div :class="{ [`lk-alert-${type}-title-color`]: title }">
            {{ title }}
          </div>
          <div :class="{ [`lk-alert-${type}-title-color`]: description }">
            {{ description }}
          </div>
        </slot>
      </div>
      <div v-if="closable" class="lk-alert__close-icon" @click="AlertClose = true">
        <span v-if="closeText" :class="{ [`lk-alert-${type}-title-color`]: closeText }">{{ closeText }}</span>
        <Icon v-else icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { AlertProps } from "./types";
import Icon from "../Icon/Icon.vue";
import { computed, ref } from "vue";
defineOptions({
  name: "VAlert",
  inheritAttrs: false
});
const props = withDefaults(defineProps<AlertProps>(), {
  closable: true
});

const ALERT_ICONS = {
  success: "circle-check",
  warning: "circle-exclamation",
  info: "circle-info",
  danger: "circle-xmark"
};
const AlertClose = ref(false);

const dynamicIcon = computed(() => (props.type ? ALERT_ICONS[props.type] : ""));
</script>

<style scoped></style>
