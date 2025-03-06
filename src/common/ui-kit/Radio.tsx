import { InputHTMLAttributes } from "react";
import cn from "classnames";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <input
      {...props}
      type="radio"
      className={cn(
        "w-3 h-3 appearance-none border border-primary rounded-full cursor-pointer",
        "checked:bg-primary checked:border-primary checked:ring-1 checked:ring-primary checked:ring-offset-2",
        "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2",
        "focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1", 
        "transition duration-150",
        className
      )}
    />
  );
};