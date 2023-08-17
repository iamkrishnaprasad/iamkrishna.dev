import { GraduationCap, Laptop } from "lucide-react";
import { ExperienceType } from "@/types";

export const TimelinePointer = ({ type = "work" }: { type?: ExperienceType }) => {
  return (
    <div className="ml-7 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#f3f4f6] object-cover shadow-md dark:bg-[#181818] md:absolute md:left-0 md:right-0 md:top-[28px] md:mx-auto">
      {type === "education" ? <GraduationCap /> : <Laptop />}
    </div>
  );
};
