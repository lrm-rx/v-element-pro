<template>
  <div class="basic block">
    <v-button>hello</v-button>
    <v-button type="primary">Primary</v-button>
    <v-button type="success">Success</v-button>
    <v-button type="warning">Warning</v-button>
    <v-button type="danger">Danger</v-button>
    <v-button type="info">Info</v-button>
  </div>

  <div class="plain block">
    <v-button plain>hello</v-button>
    <v-button type="primary" plain>Primary</v-button>
    <v-button type="success" plain>Success</v-button>
    <v-button type="warning" plain>Warning</v-button>
    <v-button type="danger" plain>Danger</v-button>
    <v-button type="info" plain>Info</v-button>
  </div>

  <div class="round block">
    <v-button round>hello</v-button>
    <v-button type="primary" round>Primary</v-button>
    <v-button type="success" round>Success</v-button>
    <v-button type="warning" round>Warning</v-button>
    <v-button type="danger" round>Danger</v-button>
    <v-button type="info" round>Info</v-button>
  </div>

  <div class="circle">
    <v-button circle><v-icon icon="star" /></v-button>
    <v-button type="primary" circle><v-icon icon="star" /></v-button>
    <v-button type="success" circle><v-icon icon="star" /></v-button>
    <v-button type="warning" circle><v-icon icon="star" /></v-button>
    <v-button type="danger" circle><v-icon icon="star" /></v-button>
    <v-button type="info" circle><v-icon icon="star" /></v-button>
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>
