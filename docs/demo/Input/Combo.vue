<template>
  <v-input v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </v-input>

  <v-input v-model="test" placeholder="prefix suffix">
    <template #prefix>
      <v-icon icon="fa-user" />
    </template>
    <template #suffix>
      <v-icon icon="fa-user" />
    </template>
  </v-input>
</template>

<script setup>
import { ref } from "vue";

const test = ref("");
</script>
