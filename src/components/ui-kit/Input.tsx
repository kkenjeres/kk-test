import { InputHTMLAttributes } from "react";
import cn from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, placeholder, ...props }: InputProps) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={cn(
        "border p-2 w-full hover:bg-inputHoverBg",
        "focus:outline-none focus:border-inputBorder duration-150 focus:duration-0",
        className
      )}
    />
  );
};
