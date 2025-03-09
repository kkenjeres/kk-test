export type FieldType = "number" | "checkbox" | "text" | "textarea" | "date" | "enum";

export interface FieldConfig {
  id: string;
  label: string;
  type: FieldType;
  value: string | number | boolean;
  options?: string[];
}

export interface FormConfig {
  title: string;
  fields: FieldConfig[];
}

export interface FormConfigContextType {
  formConfig: FormConfig;
  setFormConfig: (config: FormConfig) => void;
}