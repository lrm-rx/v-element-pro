## 快速上手

::: tip 提示

v-element pro 是基于 Vue3 + Ts 仿照 Element Plus 开发的组件库，仅供学习

:::

## 安装

```bash:no-line-numbers
npm install v-element-pro
```

## 使用

### 全局使用

```ts
// main.ts
// 引入所有组件
import VElement from "v-element-pro";
// 引入样式
import "v-element-pro/dist/index.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(V3Element).mount("#app");
```

```vue
<template>
  <v-button type="primary">我是 VButton</v-button>
</template>
```

### 按需导入

```ts
// main.ts
// 引入样式
import "v-element-pro/dist/index.css";
```

```vue
<template>
  <v-button type="primary">我是 VkButton</v-button>
</template>

<script setup lang="ts">
import { VButton } from "v-element-pro";
</script>
```
