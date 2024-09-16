<template>
  <div class="size-holder">
    <v-input v-model="test" placeholder="大的 Input" size="large"></v-input>
    <v-input v-model="test" placeholder="普通的 Input"></v-input>
    <v-input v-model="test" placeholder="小的 Input" size="small"></v-input>
  </div>
</template>

<script setup>
import { ref } from "vue";

const test = ref("");
</script>

<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>
