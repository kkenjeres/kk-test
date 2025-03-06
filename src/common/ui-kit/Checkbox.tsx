import { InputHTMLAttributes } from "react";
import cn from "classnames";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={cn(
        "w-3 h-3 appearance-none rounded-sm cursor-pointer",
        "checked:bg-primary checked:border-primary",
        "ring-1 ring-primary ring-offset-2",
        "focus:outline-none",
        "transition duration-150",
        className
      )}
    />
  );
};
