<template>
  <div class="basic block">
    <v-button @click="open('success')">Success</v-button>
    <v-button @click="open('info')">Info</v-button>
    <v-button @click="open('warning')">warning</v-button>
    <v-button @click="open('danger')">Danger</v-button>
  </div>
</template>

<script setup>
import { createMessage } from "@/components/Message";

const open = type => {
  createMessage({ message: "hello world", type });
};
</script>
