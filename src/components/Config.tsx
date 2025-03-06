import { useState } from "react";
import { useFormConfig } from "../store/FormConfigContext";
import { Button } from "../common/ui-kit/Button";
import { Textarea } from "../common/ui-kit/Textarea";
import { validateConfig, ValidationError } from "../utils/configValidator";
import { Error } from "../common/ui-kit/Erorr";

export const Config = () => {
  const { formConfig, setFormConfig } = useFormConfig();
  const [localConfig, setLocalConfig] = useState(
    JSON.stringify(formConfig, null, 2)
  );
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const applyChanges = () => {
    try {
      const config = JSON.parse(localConfig);
      const validationErrors = validateConfig(config);
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }
      setFormConfig(config);
      setErrors([]);
    } catch {
      setErrors([{ message: "Invalid JSON format" }]);
    }
  };

  return (
    <div className="flex flex-col gap-y-10">
      <Textarea
        className="border border-primary rounded-md p-2 w-full h-[70dvh] lg:min-h-[50dvh]"
        value={localConfig}
        onChange={(e) => setLocalConfig(e.target.value)}
      />
      {errors.length > 0 && <Error message={errors[0].message} />}
      <Button classname="self-end" onClick={applyChanges}>
        APPLY
      </Button>
    </div>
  );
};
