import { mergeClasses } from "@/utils";
import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ({ className, asChild = false, ...props }: IButton, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={mergeClasses(
          "inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800",
          className
        )}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
