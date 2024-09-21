<template>
  <div>
    <v-form :model="model" :rules="rules" ref="formRef">
      <v-form-item prop="email" label="the email">
        <v-input v-model="model.email" />
      </v-form-item>
      <v-form-item prop="password" label="the password">
        <v-input v-model="model.password" type="password" />
      </v-form-item>
      <v-form-item prop="confirmPwd" label="confirm password">
        <v-input v-model="model.confirmPwd" type="password" />
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
  confirmPwd: ""
});

const rules = {
  email: [{ type: "email", required: true, trigger: "blur" }],
  password: [
    { type: "string", required: true, trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  confirmPwd: [
    { type: "string", required: true, trigger: "blur" },
    { validator: (rule, value) => value === model.password, trigger: "blur", message: "两个密码必须一致" }
  ]
};

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
