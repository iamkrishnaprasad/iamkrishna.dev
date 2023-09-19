import Typography from "@/components/common/typography";
import SectionHeading from "../sectionHeading";
import moment from "moment";
import ImageWrapper from "@/components/common/imageWrapper";

const calculateYearOfExperiences = () => {
  const joiningDate = moment("2019-04-01");
  const presentDate = moment(new Date());

  const years = presentDate.diff(joiningDate, "years");
  const months = presentDate.diff(joiningDate, "months") % 12;

  return `${years && `${years}${months ? "+" : ""} years`}`;
};

const AboutMeContent = () => {
  return (
    <>
      <SectionHeading title="About Me" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex h-3/5 w-full items-center justify-center p-4 md:h-full md:w-1/3 md:py-16">
          <div className="flex h-full w-auto md:h-auto md:w-[85%]">
            <ImageWrapper
              src={"/assets/images/profile-01.jpg"}
              alt="Profile Image"
              width={128}
              height={128}
              className="max-h-full max-w-full"
            />
          </div>
        </div>
        <div className="flex h-2/5 w-full items-start justify-center p-4 md:h-full md:w-2/3 md:items-center md:p-16">
          <Typography variant="body1">
            I am a full-stack developer offering {calculateYearOfExperiences()} of experience
            providing high-impact web solutions for diverse industry organizations. Skilled in
            designing, developing and testing multiple web-based applications incorporating a range
            of technologies.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default AboutMeContent;
