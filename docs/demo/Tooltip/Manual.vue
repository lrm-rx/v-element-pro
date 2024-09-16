<template>
  <div class="basic block">
    <v-tooltip content="hello tooltip" ref="tooltipRef" manual>
      <v-button>手动容器</v-button>
    </v-tooltip>

    <br />
    <br />
    <v-button type="primary" @click="open">点击手动触发显示</v-button>
    <v-button type="danger" @click="close">点击手动触发隐藏</v-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tooltipRef = ref();
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
</script>
