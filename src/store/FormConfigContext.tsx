import { FormConfig, FormConfigContextType } from "../types/formTypes";
import { createContext, useContext, useState, useMemo, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const initialConfig: FormConfig = {
  title: "Veeam Form",
  fields: [
    { id: "1", label: "Count", type: "number", value: 0 },
    { id: "2", label: "Is Editable", type: "checkbox", value: false },
    { id: "3", label: "Caption", type: "text", value: "" },
    { id: "4", label: "Description", type: "textarea", value: "" },
    { id: "5", label: "Date", type: "date", value: "" },
    {
      id: "6",
      label: "Options",
      type: "enum",
      options: ["Option 1", "Option 2", "Option 3"],
      value: "Option 1",
    },
  ],
};

const FormConfigContext = createContext<FormConfigContextType | null>(null);

export function FormConfigContextProvider({ children }: ProviderProps) {
  const [formConfig, setFormConfig] = useState<FormConfig>(initialConfig);

  const value = useMemo(() => ({ formConfig, setFormConfig }), [formConfig]);

  return (
    <FormConfigContext.Provider value={value}>
      {children}
    </FormConfigContext.Provider>
  );
}

export function useFormConfig(): FormConfigContextType {
  const context = useContext(FormConfigContext);
  if (!context) {
    throw new Error(
      "useFormConfig must be used within a FormConfigContextProvider"
    );
  }
  return context;
}
