"use client";

import SectionHeading from "../sectionHeading";
import Typography from "@/components/common/typography";
import { CONTACT_DETAILS, renderIcon } from "@/helper";
import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "../submitBtn/submit-btn";
import toast from "react-hot-toast";

const ContactMeContent = () => {
  return (
    <>
      <SectionHeading title="Contact Me" />
      <div className="flex h-full  flex-col justify-center md:flex-row">
        <div className="flex h-full w-full flex-col justify-evenly gap-4 rounded-lg bg-[#ffffff] p-4 text-center dark:bg-[#121212] md:w-3/4 md:p-16">
          <Typography variant="body2" className="text-lg md:text-xl ">
            Please contact me directly at{" "}
            <a className="underline" href="mailto:contactme@iamkrishna.dev">
              contactme@iamkrishna.dev
            </a>{" "}
            or through this form.
          </Typography>
          <form
            className="flex w-full flex-col gap-4"
            action={async (formData) => {
              const data = (await sendEmail(formData)) as any;
              if ((data?.statusCode && data?.statusCode >= 400) || data?.message) {
                toast.error(data.message);
              } else {
                toast.success("Email sent successfully!");
              }
            }}
          >
            <input
              autoComplete="off"
              type="email"
              name="senderEmail"
              id="formEmailId"
              placeholder="Your email"
              required
              maxLength={320}
              className="h-14 rounded-lg border border-black/10 px-4"
            />
            <textarea
              autoComplete="off"
              name="message"
              id="formEmailMessage"
              placeholder="Your message"
              required
              maxLength={5000}
              className="h-52 rounded-lg border border-black/10 p-4 md:h-80"
            ></textarea>
            <SubmitBtn />
          </form>
          <hr className="" />
          <div className="flex justify-center gap-16 md:gap-20">
            {CONTACT_DETAILS.map((contactDetail) => {
              return (
                <a
                  href={contactDetail.value}
                  target={contactDetail.isExternalLink ? "_blank" : "_self"}
                  key={contactDetail.type}
                >
                  <div className="flex items-center">{renderIcon(contactDetail.type)}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMeContent;
