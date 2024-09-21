<template>
  <div
    class="lk-form-item"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
      'is-required': isRequired
    }"
  >
    <label class="lk-form-item__label">
      <slot name="label" :label="label"> {{ label }}</slot>
    </label>
    <div class="lk-form-item__content">
      <slot :validate="validate" />
      <div class="lk-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VFormItem"
});
import { reactive, provide, inject, computed, onMounted, onUnmounted } from "vue";
import { isNil } from "lodash-es";
import {
  formContextKey,
  formItemContextKey,
  type ValidateStatusProp,
  type FormItemProps,
  type FormValidateFailure,
  type FormItemContext,
  type FormItemInstance
} from "./types";
import Schema from "async-validator";
const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);
const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop];
  }
  return null;
});
const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop];
  }
  return [];
});
const validateStatus = reactive<ValidateStatusProp>({
  state: "init",
  errorMsg: "",
  loading: false
});
let initialValue: any = null;
const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value;
  if (rules) {
    return rules.filter(rule => {
      if (!rule.trigger || !trigger) return true;
      return rule.trigger && rule.trigger === trigger;
    });
  }
  return [];
};
const isRequired = computed(() => {
  return itemRules.value.some(rule => rule.required);
});
const validate = async (trigger?: string) => {
  const modelName = props.prop;
  const triggeredRules = getTriggeredRules(trigger);
  if (triggeredRules.length === 0) {
    return true;
  }
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggeredRules
    });
    validateStatus.loading = true;
    return validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = "success";
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e;
        validateStatus.state = "error";
        validateStatus.errorMsg = errors && errors.length > 0 ? errors[0].message || "" : "";
        return Promise.reject(e);
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};
const clearValidate = () => {
  validateStatus.state = "init";
  validateStatus.errorMsg = "";
  validateStatus.loading = false;
};
const resetField = () => {
  clearValidate();
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue;
  }
};
const context: FormItemContext = {
  validate,
  prop: props.prop || "",
  clearValidate,
  resetField
};
provide(formItemContextKey, context);
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context);
    initialValue = innerValue.value;
  }
});

onUnmounted(() => {
  formContext?.removeField(context);
});
defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  resetField,
  clearValidate
});
</script>
