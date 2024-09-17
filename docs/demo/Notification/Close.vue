<template>
  <v-button plain @click="open">Hide close button</v-button>
</template>

<script lang="ts" setup>
import { createNotification } from "../../../src/components/Notification";

const open = () => {
  createNotification({
    title: "Info",
    message: "This is a message without close button",
    showClose: false,
    duration: 0
  });
};
</script>
