<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="lk-message"
      v-show="visible"
      :class="{ [`lk-message--${type}`]: type, 'is-close': showClose }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="lk-message__content">
        <slot>
          <RenderVnode :v-node="message" v-if="message"></RenderVnode>
        </slot>
      </div>
      <div class="lk-message__close" v-if="showClose">
        <Icon @click.stop="() => (visible = false)" icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch, nextTick } from "vue";
import RenderVnode from "../Common/RenderVnode";
import Icon from "@/components/Icon/Icon.vue";
import type { MessageProps } from "./types";
import { getLastBottomOffset } from "./method";
import useEventListener from "@/hooks/useEventListener";
const props = withDefaults(defineProps<MessageProps>(), {
  type: "info",
  duration: 3000,
  offset: 20,
  transitionName: "fade-up"
});
const visible = ref(false);
const messageRef = ref<HTMLDivElement>();
// 计算偏移高度
// 这个div的高度
const height = ref(0);
// 上一个实例的最下面的坐标数字, 第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id));
// 这个元素应该使用的 top
const topOffset = computed(() => props.offset + lastOffset.value);
// 这个元素为下一个元素预留的 offset , 也就是它最低端 bottom 的值
const bottomOffset = computed(() => height.value + topOffset.value);
const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex
}));
let timer: any;
function startTimer() {
  if (props.duration === 0) return;
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
function clearTimer() {
  clearTimeout(timer);
}
onMounted(async () => {
  visible.value = true;
  startTimer();
  // await nextTick();
  // height.value = messageRef.value!.getBoundingClientRect().height;
});
function keydown(e: Event) {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
}
useEventListener(document, "keydown", keydown);
// watch(visible, newValue => {
//   if (!newValue) {
//     props.onDestroy();
//   }
// });
function destroyComponent() {
  props.onDestroy();
}
function updateHeight() {
  height.value = messageRef.value!.getBoundingClientRect().height;
}
defineExpose({ bottomOffset, visible });
</script>

<style scoped></style>
