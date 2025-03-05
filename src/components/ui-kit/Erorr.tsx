import cn from "classnames";

interface ErrorProps {
  message: string;
  className?: string;
}

export const Error = ({ message, className }: ErrorProps) => {
  if (!message) return null;
  return <p className={cn("text-red-500", className)}>{message}</p>;
};
