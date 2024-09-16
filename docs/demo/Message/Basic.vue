<template>
  <div class="basic block">
    <v-button type="primary" @click="open">创建一条消息</v-button>
    <v-button @click="open2">创建支持 VNode 的消息</v-button>
  </div>
</template>

<script setup>
import { h } from "vue";
import { createMessage } from "@/components/Message";

const open = () => {
  createMessage({ message: "hello world" });
};
const open2 = () => {
  createMessage({ message: h("b", "this is bold") });
};
</script>
