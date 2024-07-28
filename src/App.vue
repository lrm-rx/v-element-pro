<script setup lang="ts">
import Button from "./components/Button/Button.vue";
</script>

<template>
  <Button>Test Button</Button>
  <Button plain>plain Button</Button>
  <Button round>round Button</Button>
  <Button circle>lk</Button>
  <Button disabled>disabled Button</Button>
  <Button type="primary">primary Button</Button>
  <Button type="success">success Button</Button>
  <Button type="info">info Button</Button>
  <Button type="warning">warning Button</Button>
  <Button type="danger">danger Button</Button>

  <Button plain type="primary">primary Button</Button>
  <Button plain type="success">success Button</Button>
  <Button plain type="info">info Button</Button>
  <Button plain type="warning">warning Button</Button>
  <Button plain type="danger">danger Button</Button>

  <Button size="large">large Button</Button>
  <Button size="small">small Button</Button>
  <a href="#">aaa</a>
</template>

<style scoped></style>
