import ImageWrapper from "@/components/common/imageWrapper";
import Typography from "@/components/common/typography";
import { IEducationDetails, IWorkDetails } from "@/types";
import React from "react";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short"
};

const WorkDetailsContent = ({
  logo,
  name,
  position,
  startDate,
  endDate,
  isCurrentlyWorkHere = false,
  summary
}: IWorkDetails) => {
  return (
    <>
      <div className="w-32">
        <ImageWrapper
          src={logo}
          alt={`${name} logo`}
          className="max-h-full min-w-[128px] max-w-[128px]"
        />
      </div>
      <div className="flex w-full flex-col">
        <Typography variant="subtitle">{name}</Typography>
        <Typography variant="body2">{position}</Typography>
        <Typography variant="body3">{`${new Intl.DateTimeFormat("en-us", dateFormatOptions).format(
          startDate
        )} - ${
          isCurrentlyWorkHere
            ? "Present"
            : endDate
            ? new Intl.DateTimeFormat("en-us", dateFormatOptions).format(endDate)
            : "N/A"
        }`}</Typography>
        <div>
          <ul className="flex list-disc flex-col gap-2 pt-6 md:gap-1">
            {summary?.map((sentence, index) => {
              if (sentence.length) {
                return (
                  <Typography component="li" key={index}>
                    {sentence}
                  </Typography>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const EducationDetailsContent = ({
  logo,
  name,
  degree,
  startDate,
  endDate,
  isCurrentlyStudyingHere = false
}: IEducationDetails) => {
  return (
    <>
      <div className="w-32">
        <ImageWrapper
          src={logo}
          alt={`${name} logo`}
          className="max-h-full min-w-[128px] max-w-[128px]"
        />
      </div>
      <div className="flex w-full flex-col">
        <Typography variant="subtitle">{name}</Typography>
        <Typography variant="body2">{degree}</Typography>
        <Typography variant="body3">{`${new Intl.DateTimeFormat("en-us", dateFormatOptions).format(
          startDate
        )} - ${
          isCurrentlyStudyingHere
            ? "Present"
            : endDate
            ? new Intl.DateTimeFormat("en-us", dateFormatOptions).format(endDate)
            : "N/A"
        }`}</Typography>
      </div>
    </>
  );
};

const renderContent = (data: IWorkDetails | IEducationDetails) => {
  switch (data.type) {
    case "work":
      return <WorkDetailsContent {...data} />;
    case "education":
      return <EducationDetailsContent {...data} />;
    default:
      return null;
  }
};

const TimelineContent = (data: IWorkDetails | IEducationDetails) => {
  return (
    <div className="flex gap-6 rounded-md bg-white p-6 text-black shadow-md">
      {renderContent(data)}
    </div>
  );
};

export default TimelineContent;
