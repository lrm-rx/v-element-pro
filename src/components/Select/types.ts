export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue: string;
  options: SelectOption[];
  placeholder: string;
  disabled: boolean;
}

export interface SelectStates {
  inputValue: string;
  selectOption: null | SelectOption;
}

export interface SelectEmits {
  (e: "change", value: string): void;
  (e: "update:modelValue", value: string): void;
  (e: "visible-change", value: boolean): void;
}
