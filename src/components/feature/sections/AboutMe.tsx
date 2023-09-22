import Typography from "@/components/common/typography";
import SectionHeading from "../sectionHeading";
import moment from "moment";
import ImageWrapper from "@/components/common/imageWrapper";

const calculateYearOfExperiences = () => {
  const joiningDate = moment("2019-04-01");
  const presentDate = moment(new Date());

  const years = presentDate.diff(joiningDate, "years");
  const months = presentDate.diff(joiningDate, "months") % 12;

  return `${years && `${years ?? 0}${months ?? 0 ? "+" : ""}`}`;
};

const AboutMeContent = () => {
  const name = "Krishnaprasad M.";
  const yearOfExperiences = calculateYearOfExperiences();
  return (
    <>
      <SectionHeading title="About Me" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex h-4/5 w-full items-center justify-center p-4 md:h-full md:w-1/3 md:py-16">
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
        <div className="flex h-auto w-full flex-col items-start justify-center p-4 md:h-full md:w-2/3 md:items-center md:p-16">
          {/* <Typography variant="body1">
            I am a full-stack developer offering {yearOfExperiences} of experience
            providing high-impact web solutions for diverse industry organizations. Skilled in
            designing, developing and testing multiple web-based applications incorporating a range
            of technologies.
          </Typography> */}
          <Typography variant="body1">
            Welcome to my portfolio website! I&#39;m {name}, a seasoned full-stack developer with{" "}
            {yearOfExperiences} years of experience in crafting digital solutions that bring ideas
            to life. With a strong foundation in both front-end and back-end development, I
            specialize in creating seamless, user-friendly web applications and websites.
          </Typography>
          <br />
          <Typography variant="body1">
            My journey in the world of web development began with a fascination for technology and a
            determination to make a difference. Over the years, I&#39;ve honed my skills in a
            variety of programming languages and frameworks, including but not limited to HTML, CSS,
            JavaScript, Node.js and React.
          </Typography>
          <br />
          <Typography variant="body1">
            What sets me apart is my commitment to not only writing clean and efficient code but
            also my dedication to understanding the unique needs of each project. Whether it&#39;s
            designing an intuitive user interface, optimizing database performance, or building
            robust server-side applications, I take pride in delivering solutions that exceed
            expectations.
          </Typography>
          <br />
          {/* <Typography variant="body1">
            With {yearOfExperiences} years of experience, I&#39;ve had the privilege of working with
            diverse teams on projects ranging from e-commerce platforms to content management
            systems. My adaptability and problem-solving mindset have enabled me to tackle complex
            challenges head-on and find innovative solutions.
          </Typography>
          <br /> */}
          <Typography variant="body1">
            As you explore my portfolio, you&#39;ll find a collection of projects that showcase my
            skills and creativity. From responsive web designs to interactive web applications, each
            project represents a journey of learning and growth. I&#39;m excited to share my work
            with you, and I hope it inspires you as much as it has inspired me.
          </Typography>
          <br />
          {/* <Typography variant="body1">
            If you have a project in mind or if you&#39;d like to connect and discuss how we can
            work together to bring your ideas to fruition, please don&#39;t hesitate to reach out.
            With {yearOfExperiences} years of experience under my belt, I&#39;m always up for new
            challenges and opportunities to collaborate.
          </Typography>
          <br /> */}
          <Typography variant="body1">
            Thank you for visiting my portfolio, and I look forward to connecting with you!
          </Typography>
        </div>
      </div>
    </>
  );
};

export default AboutMeContent;
