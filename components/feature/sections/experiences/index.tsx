import Typography from "@/components/common/typography";
import SectionHeading from "../../sectionHeading";
import { EXPERIENCES } from "@/helper";
import { TimelineContainer } from "./TimelineContainer";
import { Timeline } from "./Timeline";

export type TimelinePosition = "right" | "left";

const ExperiencesContent = () => {
  return (
    <>
      <SectionHeading title="Experiences" />
      <TimelineContainer>
        {EXPERIENCES?.map((experience, index) => (
          <Timeline
            key={experience.name}
            position={Boolean(index % 2) ? "left" : "right"}
            data={experience}
          />
        ))}
      </TimelineContainer>
    </>
  );
};

export default ExperiencesContent;
