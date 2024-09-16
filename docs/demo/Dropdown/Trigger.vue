<template>
  <div class="basic block">
    <v-dropdown placement="bottom" :menu-options="options" trigger="click">
      <v-button type="primary">点击触发下拉菜单</v-button>
    </v-dropdown>
  </div>
</template>

<script setup>
import { h } from "vue";

const options = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" }
];
</script>
