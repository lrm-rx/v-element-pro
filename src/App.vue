<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue";
const openedValue = ref(["a"]);
setTimeout(() => {
  // openedValue.value = ["a", "b"];
}, 1000);
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

  <Collapse v-model="openedValue" accordion>
    <Item name="a">
      <template v-slot:title>
        <h1>a title</h1>
      </template>
      <h1>a content</h1>
      <div>1111111111111</div>
    </Item>
    <Item name="b" title="b title">
      <div>b content</div>
    </Item>
    <Item name="c" title="c title">
      <div>c content</div>
    </Item>
  </Collapse>
  <div>{{ openedValue }}</div>
</template>

<style scoped></style>
