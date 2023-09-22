import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { LuPhone as PhoneIcon, LuMail as MailIcon } from "react-icons/lu";
import { SlLocationPin as LocationDotIcon } from "react-icons/sl";
import SectionHeading from "../sectionHeading";
import Typography from "@/components/common/typography";
import { CONTACT_DETAILS, renderIcon } from "@/helper";

const ContactMeContent = () => {
  return (
    <>
      <SectionHeading title="Contact Me" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex h-2/4 w-full justify-center py-4 md:h-full md:w-2/5 md:py-16">
          <div className="flex flex-col items-start justify-center gap-6 ">
            {CONTACT_DETAILS.map((contactDetail) => {
              return (
                <a
                  href={contactDetail.value}
                  target={contactDetail.isExternalLink ? "_blank" : "_self"}
                  key={contactDetail.type}
                >
                  <div className="flex flex-row items-center gap-3">
                    {renderIcon(contactDetail.type)}
                    <Typography variant="h3">{contactDetail.label}</Typography>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex h-2/4 w-full justify-center border border-red-600 py-4 md:h-full md:w-3/5 md:py-16"></div>
      </div>
    </>
  );
};

export default ContactMeContent;
