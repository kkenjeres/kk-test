import { useState } from "react";
import { useFormConfig, initialConfig } from "../store/FormConfigContext";
import { Button } from "../common/ui-kit/Button";
import { Input } from "../common/ui-kit/Input";
import { Radio } from "../common/ui-kit/Radio";
import { Checkbox } from "../common/ui-kit/Checkbox";
import { Textarea } from "../common/ui-kit/Textarea";
import {
  getNumberValue,
  getStringValue,
  getDateValue,
} from "../utils/fieldValidators";

interface ResultFormValues {
  [label: string]: string | number | boolean;
}

export const Result = () => {
  const { formConfig, setFormConfig } = useFormConfig();

  const [formData, setFormData] = useState(
    formConfig.fields.reduce<ResultFormValues>((acc, field) => {
      acc[field.id] = field.value;
      return acc;
    }, {})
  );

  const handleChange = (id: string, value: string | number | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = () => {
    const updatedFields = formConfig.fields.map((field) => ({
      ...field,
      value: formData[field.id],
    }));
    setFormConfig({ ...formConfig, fields: updatedFields });
  };

  const handleReset = () => {
    setFormConfig(initialConfig);
    const initialData = Object.fromEntries(
      initialConfig.fields.map((field) => [field.id, field.value])
    );
    setFormData(initialData);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-2xl font-bold mb-10">{formConfig.title}</h2>
      {formConfig.fields.map((field) => (
        <div key={field.id} className="mb-4 sm:flex items-center">
          <label htmlFor={field.id} className="w-1/3 pointer-events-none">
            {field.label}
          </label>
          <div className="w-full max-sm:pt-2">
            {field.type === "number" && (
              <Input
                id={field.id}
                placeholder="Enter a number"
                type="number"
                value={getNumberValue(formData[field.id])}
                onChange={(e) => handleChange(field.id, Number(e.target.value))}
              />
            )}
            {field.type === "text" && (
              <Input
                id={field.id}
                type="text"
                placeholder="Type something here"
                value={getStringValue(formData[field.id])}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            {field.type === "date" && (
              <Input
                id={field.id}
                type="date"
                value={getDateValue(formData[field.id])}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            {field.type === "textarea" && (
              <Textarea
                id={field.id}
                className="h-20"
                placeholder="Type something here as well"
                value={getStringValue(formData[field.id])}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            {field.type === "checkbox" && (
              <Checkbox
                id={field.id}
                type="checkbox"
                checked={Boolean(formData[field.id])}
                onChange={(e) => handleChange(field.id, e.target.checked)}
              />
            )}
            {field.type === "enum" && field.options && (
              <div className="flex gap-x-4">
                {field.options.map((option, index) => (
                  <label key={index} className="flex items-center">
                    <Radio
                      type="radio"
                      name={field.id}
                      value={option}
                      checked={formData[field.id] === option}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="mt-10 flex justify-end gap-4">
        <Button onClick={handleReset}>RESET</Button>
        <Button onClick={handleSave}>SAVE</Button>
      </div>
    </form>
  );
};
