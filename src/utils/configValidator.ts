import { FieldConfig } from "../store/FormConfigContext";
const VALID_TYPES = ["number", "checkbox", "text", "textarea", "date", "enum"];

export interface ValidationError {
  message: string;
}

export const validateConfig = (config: unknown): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (typeof config !== "object" || config === null) {
    errors.push({ message: "Configuration must be an object." });
    return errors;
  }

  const configObj = config as { fields?: unknown[] };
  if (!configObj.fields || !Array.isArray(configObj.fields)) {
    errors.push({ message: "'fields' must be an array." });
    return errors;
  }

  configObj.fields.forEach((fieldItem) => {
    if (typeof fieldItem !== "object" || fieldItem === null) {
      errors.push({ message: "Each field must be an object." });
      return;
    }
    const field = fieldItem as FieldConfig;
    const fieldLabel = field.label || "unknown field";
    if (!field.type || !VALID_TYPES.includes(field.type)) {
      errors.push({
        message: `Field "${fieldLabel}" has an invalid 'type': "${field.type}".`,
      });
    }

    if (field.type === "date") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (typeof field.value !== "string" || !dateRegex.test(field.value)) {
        errors.push({
          message: `Field "${fieldLabel}" has an invalid date format: "${field.value}". Expected format: YYYY-MM-DD.`,
        });
      }
    }
    
    
  });

  return errors;
};