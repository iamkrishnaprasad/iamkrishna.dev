import Section from "@/components/common/section";
import Typography from "@/components/common/typography";
import { TECHNOLOGIES } from "@/helper";
import React from "react";
import TechDetails from "../techDetails";
import SectionHeading from "../sectionHeading";

const SkillsContent = () => {
  return (
    <>
      <SectionHeading
        title="Skills"
        subtitle="The skills, tools and technologies i am really good at:"
      />
      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology) => (
          <TechDetails {...technology} key={technology.label} />
        ))}
      </div>
    </>
  );
};

export default SkillsContent;
