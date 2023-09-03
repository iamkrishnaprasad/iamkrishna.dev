import { LinkProps as NextLinkProps } from "next/link";
import { mergeClasses } from "@/utils";
import NextLink from "next/link";
import React from "react";

interface ILink extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  isExternalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, ILink>(
  (
    {
      noCustomization,
      children = null,
      className = "",
      isExternalLink = false,
      withUnderline = false,
      ...props
    }: ILink,
    ref
  ) => {
    return (
      <NextLink
        {...props}
        ref={ref}
        className={mergeClasses(
          noCustomization ??
            "text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600 ",
          withUnderline
            ? "underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600"
            : "",
          className
        )}
        target={isExternalLink ? "_blank" : "_self"}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
