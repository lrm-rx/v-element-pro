<template>
  <div class="lk-message" v-show="visible" :class="{ [`lk-message--${type}`]: type, 'is-close': showClose }" role="alert">
    <div class="lk-message__content">
      <slot>
        <RenderVnode :v-node="message" v-if="message"></RenderVnode>
      </slot>
    </div>
    <div class="lk-message__close" v-if="showClose">
      <Icon @click.stop="() => (visible = false)" icon="xmark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import RenderVnode from "../Common/RenderVnode";
import Icon from "@/components/Icon/Icon.vue";
import type { MessageProps } from "./types";
const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000
});
const visible = ref(false);
function startTimer() {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
onMounted(() => {
  visible.value = true;
  startTimer();
});
</script>

<style scoped></style>
