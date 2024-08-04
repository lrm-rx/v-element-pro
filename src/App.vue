<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import Alert from "./components/Alert/Alert.vue";
const openedValue = ref(["a"]);
setTimeout(() => {
  openedValue.value = ["a", "b"];
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
  <hr />
  <Button size="large" loading>loading</Button>
  <Button size="large" icon="arrow-up">small Button</Button>

  <Collapse v-model="openedValue">
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
    <Item name="c" title="c title" disabled>
      <div>c content</div>
    </Item>
  </Collapse>
  <Icon icon="fa-solid fa-user-secret"></Icon>
  <Alert center show-icon type="success" title="Success Alert" description="Success Description" />
  <hr />
  <Alert show-icon type="warning" title="Warning Alert" description="Warning Description" close-text="关闭" />
  <hr />
  <Alert show-icon type="info" title="Info Alert" description="Info Description" close-text="close" />
  <hr />
  <Alert show-icon type="danger" title="Error Alert" description="Error Description" :closable="false" />
</template>

<style></style>
