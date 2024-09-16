# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# 组件开发的方法论

- 根据需求初步确定属性/事件/slots/expose(不需要特别精确, 后期随着功能开发可以持续更新)
- 组件的静态版本(不加交互, 只有html结构, classes, slots)
- 将需求中有行为的功能做成开发计划列表
- 根据列表一项一项完成功能
- 样式/测试等收尾工作

调用测试:
npx vitest Input
