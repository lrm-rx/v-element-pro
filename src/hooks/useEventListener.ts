import { isRef, onBeforeUnmount, onMounted, unref, watch, type Ref } from "vue";
const useEventListener = (target: EventTarget | Ref<EventTarget | null>, event: string, handler: (e: Event) => any) => {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
};

export default useEventListener;
