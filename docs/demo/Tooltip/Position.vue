<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <v-tooltip content="Top Left prompts info" placement="top-start">
        <v-button>top-start</v-button>
      </v-tooltip>
      <v-tooltip content="Top Center prompts info" placement="top">
        <v-button>top</v-button>
      </v-tooltip>
      <v-tooltip content="Top Right prompts info" placement="top-end">
        <v-button>top-end</v-button>
      </v-tooltip>
    </div>
    <div class="row">
      <v-tooltip content="Left Top prompts info" placement="left-start">
        <v-button>left-start</v-button>
      </v-tooltip>
      <v-tooltip content="Right Top prompts info" placement="right-start">
        <v-button>right-start</v-button>
      </v-tooltip>
    </div>
    <div class="row">
      <v-tooltip content="Left Center prompts info" placement="left">
        <v-button class="mt-3 mb-3">left</v-button>
      </v-tooltip>
      <v-tooltip content="Right Center prompts info" placement="right">
        <v-button>right</v-button>
      </v-tooltip>
    </div>
    <div class="row">
      <v-tooltip content="Left Bottom prompts info" placement="left-end">
        <v-button>left-end</v-button>
      </v-tooltip>
      <v-tooltip content="Right Bottom prompts info" placement="right-end">
        <v-button>right-end</v-button>
      </v-tooltip>
    </div>
    <div class="row center">
      <v-tooltip content="Bottom Left prompts info" placement="bottom-start">
        <v-button>bottom-start</v-button>
      </v-tooltip>
      <v-tooltip content="Bottom Center prompts info" placement="bottom">
        <v-button>bottom</v-button>
      </v-tooltip>
      <v-tooltip content="Bottom Right prompts info" placement="bottom-end">
        <v-button>bottom-end</v-button>
      </v-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
</style>
