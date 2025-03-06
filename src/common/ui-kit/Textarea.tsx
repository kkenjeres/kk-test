import { TextareaHTMLAttributes } from "react";
import cn from "classnames";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({ className, placeholder, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      className={cn(
        "border p-2 w-full hover:bg-inputHoverBg resize-none",
        "focus:outline-none focus:border-inputBorder duration-150 focus:duration-0",
        className
      )}
    />
  );
};