import { mergeClasses } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const iconButtonVariants = cva(
  "flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700",
  {
    variants: {
      size: {
        md: "[&_svg]:w-6 [&_svg]:h-6",
        lg: "[&_svg]:w-8 [&_svg]:h-8"
      }
    },
    defaultVariants: { size: "md" }
  }
);

interface IIconButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  // asChild?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IIconButton>(
  (
    {
      className,
      size,
      // asChild = false,
      showTooltip = false,
      tooltipText = "",
      children,
      ...props
    }: IIconButton,
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={mergeClasses("relative", iconButtonVariants({ size }), className)}
      >
        {children}
        {showTooltip && tooltipText.length && (
          <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
