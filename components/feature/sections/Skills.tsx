import Section from "@/components/common/section";
import Typography from "@/components/common/typography";
import { TECHNOLOGIES } from "@/helper";
import React from "react";
import TechDetails from "../techDetails";

const SkillsContent = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Typography variant="body1" className="font-medium">
            Skills
          </Typography>
        </div>
        <Typography variant="subtitle" className="text-center">
          The skills, tools and technologies i am really good at:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology) => (
          <TechDetails {...technology} key={technology.label} />
        ))}
      </div>
    </>
  );
};

export default SkillsContent;
