import { mergeClasses } from "@/utils";
import React from "react";

interface ISection extends React.HTMLAttributes<HTMLElement> {
  isAlternative?: boolean;
}

const Section = React.forwardRef<HTMLElement, ISection>(
  ({ className, children, isAlternative = false, ...props }: ISection, ref) => {
    return (
      <section
        {...props}
        ref={ref}
        className={mergeClasses(
          "landscape:section-min-height portrait:section-min-height flex w-full scroll-mt-[68px] py-16 md:py-20 xl:py-24",
          isAlternative && "bg-[#f3f4f6] dark:bg-[#181818]",
          className
        )}
      >
        <div className="container mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
