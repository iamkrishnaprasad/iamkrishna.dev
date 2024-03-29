import { EducationDetails, WorkDetails } from "@/types";
import { TimelinePointer } from "./TimelinePointer";
import { TimelineContentWrapper } from "./TimelineContentWrapper";
import { TimelinePosition } from ".";
import TimelineContent from "./TimelineContent";

export const Timeline = ({
  position = "right",
  data
}: {
  position?: TimelinePosition;
  data: EducationDetails | WorkDetails;
}) => {
  return (
    <div className="relative z-10">
      <TimelinePointer type={data.type} />
      <TimelineContentWrapper position={position}>
        <TimelineContent {...data} />
      </TimelineContentWrapper>
    </div>
  );
};
