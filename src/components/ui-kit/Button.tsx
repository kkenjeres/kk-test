import cn from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  classname?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, classname, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-md px-5 py-1 bg-primary text-white",
        "hover:bg-hover hover:shadow-md duration-300",
        classname
      )}
    >
      {children}
    </button>
  );
};
