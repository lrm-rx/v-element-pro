<template>
  <div class="basic block">
    <v-tooltip trigger="click">
      <v-button>复杂 HTML 结构的 tooltip</v-button>
      <template #content>
        <h3>this is the title</h3>
        <p>this is the content</p>
      </template>
    </v-tooltip>
  </div>
</template>
