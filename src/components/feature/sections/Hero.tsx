import ImageWrapper from "@/components/common/imageWrapper";
import Link from "@/components/common/link";
import Typography from "@/components/common/typography";
import { FaLinkedin as LinkedinIcon, FaGithub as GithubIcon } from "react-icons/fa";
import { EXTERNAL_LINKS } from "@/helper";
import LinkButton from "@/components/common/linkButton";

const HeroContent = () => {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="order-2 flex h-2/3 w-full flex-col md:relative md:order-1 md:h-full md:w-1/2">
        <div className="flex h-full flex-col items-center justify-center gap-3 md:absolute md:left-0 md:right-0 ">
          <Typography variant="h3" className={`text-gray-600`}>
            Hello, I&#39;m
          </Typography>
          <Typography variant="h2" className="text-gray-900">
            Krishnaprasad M.
          </Typography>
          <Typography variant="h3" className="text-gray-600">
            Fullstack Developer
          </Typography>
          <LinkButton url="/files/krishnaprasad-m_cv.pdf" target="_blank" label="Download CV" />
        </div>
        <div className="flex h-[20%] items-center justify-center gap-9 md:absolute md:bottom-0 md:left-0 md:right-0">
          <Link href={`${EXTERNAL_LINKS.LINKEDIN}`} isExternalLink>
            <LinkedinIcon size={36} />
          </Link>
          <Link href={`${EXTERNAL_LINKS.GITHUB}`} isExternalLink>
            <GithubIcon size={36} />
          </Link>
        </div>
      </div>
      <div className="order-1 flex h-1/3 w-full justify-center md:order-2 md:h-full md:w-1/2 ">
        <div className="flex w-4/5">
          <ImageWrapper
            src="/assets/svg/profile.svg"
            alt="Contact Me"
            width={128}
            height={128}
            className="max-h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
