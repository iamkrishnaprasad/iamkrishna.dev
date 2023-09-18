import { LuPhone as PhoneIcon, LuMail as MailIcon } from "react-icons/lu";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { SlLocationPin as LocationDotIcon } from "react-icons/sl";
import SectionHeading from "../sectionHeading";
import ImageWrapper from "@/components/common/imageWrapper";
import Link from "@/components/common/link";
import Typography from "@/components/common/typography";

const ContactMeContent = () => {
  return (
    <>
      <SectionHeading title="Contact Me" />
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex h-2/4 w-full justify-center py-4 md:h-full md:w-2/5 md:py-16">
          <div className="flex flex-col items-start justify-center gap-6 ">
            <div className="flex flex-row items-center gap-3">
              <PhoneIcon size={36} />
              <Link href="tel:+918848333943">
                <Typography variant="h3">+91 884 833 3943</Typography>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-3">
              <WhatsappIcon size={36} />
              <Link href="http://wa.me/918848333943?text=Hi" isExternalLink>
                <Typography variant="h3">+91 884 833 3943</Typography>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-3">
              <MailIcon size={36} />
              <Link href="mailto:contactme@iamkrishna.dev">
                <Typography variant="h3">contactme@iamkrishna.dev</Typography>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-3">
              <LocationDotIcon size={36} />
              <Typography variant="h3">Malappuram, Kerala, India</Typography>
            </div>
          </div>
        </div>
        <div className="flex h-2/4 w-full justify-center border border-red-600 py-4 md:h-full md:w-3/5 md:py-16">
          {/* <div className="flex w-full md:w-2/4">
            <ImageWrapper
              src="/assets/svg/contact_me_2.svg"
              alt="Contact Me"
              width={128}
              height={128}
              className="max-h-full max-w-full"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactMeContent;
