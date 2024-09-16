<template>
  <div class="switch-size-container">
    <v-switch v-model="test" size="large" />
    <v-switch v-model="test" />
    <v-switch v-model="test" size="small" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const test = ref(false);
</script>

<style scoped>
.switch-size-container {
  display: flex;
  align-items: center;

  .v-switch {
    margin-right: 10px;
  }
}
</style>
