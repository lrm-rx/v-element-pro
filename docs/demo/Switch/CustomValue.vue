<template>
  <v-switch v-model="test" activeValue="right" inactiveValue="left" />
  <h4>model-value: {{ test }}</h4>
</template>

<script setup>
import { ref } from "vue";

const test = ref("right");
</script>
