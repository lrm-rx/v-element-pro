<template>
  <div>
    <v-form :model="model" ref="formRef">
      <v-form-item prop="email" label="the email">
        <v-input v-model="model.email" />
      </v-form-item>
      <v-form-item prop="password" label="the password">
        <v-input v-model="model.password" type="password" />
      </v-form-item>
      <v-form-item prop="agreement" label="agreement">
        <v-switch v-model="model.agreement" />
      </v-form-item>
      <v-form-item prop="zone" label="zone">
        <v-select v-model="model.zone" :options="options" />
      </v-form-item>
      <v-form-item>
        <v-button @click.prevent="submit" type="primary">Submit</v-button>
        <v-button @click.prevent="reset">Reset</v-button>
      </v-form-item>
    </v-form>

    <div>
      form value:
      <pre>{{ model }}</pre>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const model = reactive({
  email: "",
  password: "",
  confirmPwd: "",
  agreement: false,
  zone: ""
});

const options = [
  { label: "zone 1", value: "one" },
  { label: "zone 2", value: "two" },
  { label: "zone 3", value: "three" }
];

const formRef = ref();

const submit = async () => {};

const reset = () => {
  formRef.value.resetFields();
};
</script>
