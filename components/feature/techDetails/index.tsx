import ImageWrapper from "@/components/common/imageWrapper";
import Link from "@/components/common/link";
import Typography from "@/components/common/typography";
import { TechnologyDetails } from "@/types";
import React from "react";

const TechDetails = ({ logo, darkModeLogo, label, url }: TechnologyDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} isExternalLink>
        <div className="flex h-16 w-16 items-center justify-center">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            width={64}
            className="max-h-full max-w-full transition-transform duration-300 md:hover:scale-110"
          />
        </div>
      </Link>
      <Typography variant="body1" className="text-center">
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;
