<template>
  <div>
    <v-form :model="model" :rules="rules" ref="formRef">
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
  agreement: false,
  zone: ""
});

const rules = {
  email: [{ type: "email", required: true, trigger: "blur" }],
  password: [
    { type: "string", required: true, trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  agreement: [{ type: "enum", required: true, enum: [true], message: "请同意协议" }],
  zone: [{ type: "string", required: true, trigger: "change" }]
};

const options = [
  { label: "zone 1", value: "one" },
  { label: "zone 2", value: "two" },
  { label: "zone 3", value: "three" }
];

const formRef = ref();

const submit = async () => {
  try {
    await formRef.value.validate();
    console.log("passed!");
  } catch (e) {
    console.log("the promise", e);
  }
};

const reset = () => {
  formRef.value.resetFields();
};
</script>
