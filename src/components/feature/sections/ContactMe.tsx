import { LuPhone as PhoneIcon, LuMail as MailIcon } from "react-icons/lu";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { SlLocationPin as LocationDotIcon } from "react-icons/sl";
import SectionHeading from "../sectionHeading";
import Typography from "@/components/common/typography";
import { CONTACT_ME } from "@/helper";

const ContactMeContent = () => {
  return (
    <>
      <SectionHeading title="Contact Me" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex h-2/4 w-full justify-center py-4 md:h-full md:w-2/5 md:py-16">
          <div className="flex flex-col items-start justify-center gap-6 ">
            <a href={CONTACT_ME.call.value}>
              <div className="flex flex-row items-center gap-3">
                <PhoneIcon size={36} />
                <Typography variant="h3">{CONTACT_ME.call.label}</Typography>
              </div>
            </a>
            <a href={CONTACT_ME.whatsApp.value} target={true ? "_blank" : "_self"}>
              <div className="flex flex-row items-center gap-3">
                <WhatsappIcon size={36} />
                <Typography variant="h3">{CONTACT_ME.whatsApp.label}</Typography>
              </div>
            </a>
            <a href={CONTACT_ME.email.value}>
              <div className="flex flex-row items-center gap-3">
                <MailIcon size={36} />
                <Typography variant="h3">{CONTACT_ME.email.label}</Typography>
              </div>
            </a>
            <a
              href={CONTACT_ME.map.value}
              target={CONTACT_ME.map.isExternalLink ? "_blank" : "_self"}
            >
              <div className="flex flex-row items-center gap-3">
                <LocationDotIcon size={36} />
                <Typography variant="h3">{CONTACT_ME.map.label}</Typography>
              </div>
            </a>
          </div>
        </div>
        <div className="flex h-2/4 w-full justify-center border border-red-600 py-4 md:h-full md:w-3/5 md:py-16"></div>
      </div>
    </>
  );
};

export default ContactMeContent;
