import { mergeClasses } from "@/utils";
import { TimelinePosition } from ".";

export const TimelineContentWrapper = ({
  position = "right",
  children
}: {
  children: React.ReactNode;
  position?: TimelinePosition;
}) => {
  return (
    <div
      className={mergeClasses(
        "relative pt-4 md:w-1/2 md:pt-0",
        position === "right" && "md:ml-auto md:mr-0 md:pl-9 md:pr-0",
        position === "left" && "md:ml-0 md:mr-auto md:pl-0 md:pr-9"
      )}
    >
      <div
        aria-hidden="true"
        className={mergeClasses(
          "absolute inset-0 left-10 top-2 h-4 w-4 rotate-45 transform bg-white md:top-10",
          position === "right" && "md:left-7 md:right-auto",
          position === "left" && " md:left-auto md:right-7"
        )}
      ></div>
      {children}
    </div>
  );
};
