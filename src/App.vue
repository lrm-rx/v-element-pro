<script setup lang="ts">
import { ref, h } from "vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import type { MenuOption } from "@/components/Dropdown/types";
import type { Options } from "@popperjs/core";
import Button from "@/components/Button/Button.vue";
import Collapse from "@/components/Collapse/Collapse.vue";
import Item from "@/components/Collapse/CollapseItem.vue";
// import Icon from "@/components/Icon/Icon.vue";
// import Alert from "@/components/Alert/Alert.vue";
import type { TooltipInstance } from "@/components/Tooltip/types";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
const openedValue = ref(["a"]);
const trigger = ref<any>("click");
const tooltipRef = ref<TooltipInstance | null>();
const options: Partial<Options> = { placement: "right-start", strategy: "fixed" };
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
setTimeout(() => {
  // openedValue.value = ["a", "b"];
  // trigger.value = "hover";
}, 2000);
const options_a: MenuOption[] = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" }
];
const inlineConsole = (...args: any) => {
  console.log(...args);
};
</script>

<template>
  <header>
    <Dropdown
      placement="bottom"
      :trigger="trigger"
      :menu-options="options_a"
      @visible-change="e => inlineConsole('visible change', e)"
      @select="e => inlineConsole('select', e)"
      manual
      ref="tooltipRef"
    >
      <Button type="success">success Button</Button>
    </Dropdown>
  </header>
  <Button @click="open">open tooltip Button</Button>
  <Button @click="close" plain>open tooltip Button</Button>
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

  <div style="padding: 20px">
    <Tooltip content="123213" placement="right" :trigger="trigger" :popper-options="options">
      <Button type="primary">primary Button</Button>
    </Tooltip>
  </div>
  <!-- <Icon icon="fa-solid fa-user-secret"></Icon>
  <Alert center show-icon type="success" title="Success Alert" description="Success Description" />
  <hr />
  <Alert show-icon type="warning" title="Warning Alert" description="Warning Description" close-text="关闭" />
  <hr />
  <Alert show-icon type="info" title="Info Alert" description="Info Description" close-text="close" />
  <hr />
  <Alert show-icon type="danger" title="Error Alert" description="Error Description" :closable="false" /> -->
</template>

<style></style>
