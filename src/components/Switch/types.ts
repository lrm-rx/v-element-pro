type ModelValueType = boolean | string | number;

export interface SwitchProps {
  modelValue: ModelValueType;
  disabled?: boolean;
  activeValue?: ModelValueType;
  inactiveValue?: ModelValueType;
  activeText?: string;
  inactiveText?: string;
  name?: string;
  size?: "small" | "large";
  id?: string;
}

export interface SwitchEmits {
  (e: "change", value: ModelValueType): void;
  (e: "update:modelValue", value: ModelValueType): void;
}
