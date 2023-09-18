import { mergeClasses } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const typographyVariants = cva("text-gray-600 text-normal", {
  variants: {
    variant: {
      h1: "text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900",
      h2: "text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-gray-900",
      h3: "text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900",
      subtitle: "text-lg md:text-lg",
      body1: "text-base md:text-lg",
      body2: "text-base",
      body3: "text-sm"
    }
  },
  defaultVariants: {
    variant: "body2"
  }
});

interface ITypography
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

const elementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "p",
  body1: "p",
  body2: "p",
  body3: "p"
};

type ComponentElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

const Typography = React.forwardRef<HTMLHeadingElement | HTMLParagraphElement, ITypography>(
  ({ component, className = "", variant, children, ...props }: ITypography, ref) => {
    const Component = (
      component ? component : variant ? elementMapping[variant] : "p"
    ) as ComponentElement;
    return (
      <Component
        {...props}
        ref={ref}
        className={mergeClasses(typographyVariants({ variant }), className)}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
