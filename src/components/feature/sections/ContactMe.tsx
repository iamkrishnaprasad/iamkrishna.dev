"use client";

import SectionHeading from "../sectionHeading";
import Typography from "@/components/common/typography";
import { CONTACT_DETAILS, renderIcon } from "@/helper";

import SubmitBtn from "../submitBtn/submit-btn";
import toast from "react-hot-toast";
import { useState } from "react";
import { isEmail } from "@/utils";

type FormData = {
  senderEmail: string;
  message: string;
};

const initialState: FormData = {
  senderEmail: "",
  message: ""
};

const validateFormData = (data: FormData, elementName: string = "all"): FormData => {
  let errors = {} as FormData;

  const requiredMessage = "This field is required.";

  if (elementName === "senderEmail" || elementName === "all") {
    if (!data?.senderEmail?.trim() || data?.senderEmail?.trim() === "") {
      errors.senderEmail = requiredMessage;
    } else if (!isEmail(data?.senderEmail)) {
      errors.senderEmail = "Please enter a valid email address.";
    }
  }

  if (elementName === "message" || elementName === "all") {
    if (!data?.message?.trim() || data?.message?.trim() === "") {
      errors.message = requiredMessage;
    }
  }

  return errors;
};

const ContactMeContent = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormData>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidatingEmail, setIsValidatingEmail] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    setErrors(errors);

    if (Object.keys(errors).length) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/email/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json"
        }
      });
      const result = await response.json();
      if (result?.statusCode && result?.statusCode >= 400) {
        toast.error(result?.message);
      } else {
        toast.success(result?.message);
        setFormData(initialState);
      }
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    setErrors(validateFormData(newFormData, name));
  };

  const handleFocus = async (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name } = event.target;
    const errors = validateFormData(formData, name);
    setErrors(errors);

    if (name === "senderEmail") {
      if (errors?.senderEmail === "" || errors?.senderEmail === undefined) {
        setIsValidatingEmail(true);
        try {
          const { senderEmail } = formData;
          const response = await fetch("/api/email/validate", {
            method: "POST",
            body: JSON.stringify({ senderEmail }),
            headers: {
              "content-type": "application/json"
            }
          });
          const result = await response.json();
          if (!result?.isValid) {
            setErrors({
              ...errors,
              [name]: ["Likely typo,", "Timeout"].reduce(
                (accumulator, currentValue) =>
                  result?.message.startsWith(currentValue) || accumulator,
                false
              )
                ? result?.message === "Timeout"
                  ? "Timeout: Failed to validate email address, please try again later."
                  : result?.message
                : "Email address is not valid. Please provide a valid email address."
            });
          }
        } catch (error) {
          console.log("error: ", error);
        } finally {
          setIsValidatingEmail(false);
        }
      }
    }
  };

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
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div className="flex w-full flex-col gap-1">
              <div className="relative flex w-full flex-col gap-1">
                {isValidatingEmail ? (
                  <div className="absolute bottom-[18px] right-4 top-[18px] h-5 w-5 animate-spin rounded-full border-b-2 border-black dark:border-white"></div>
                ) : null}
                <input
                  autoComplete="off"
                  type="email"
                  name="senderEmail"
                  id="formEmailId"
                  placeholder="Your email"
                  maxLength={320}
                  value={formData.senderEmail}
                  onChange={handleChange}
                  onBlur={handleFocus}
                  disabled={isValidatingEmail || isLoading}
                  className="h-14 rounded-lg border border-black/10 px-4"
                />
              </div>
              {errors?.senderEmail && (
                <span className="font px-4 text-left text-sm text-red-600">
                  {errors.senderEmail}
                </span>
              )}
            </div>
            <div className="flex w-full flex-col gap-1">
              <textarea
                autoComplete="off"
                name="message"
                id="formEmailMessage"
                placeholder="Your message"
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleFocus}
                disabled={isLoading}
                className="h-52 rounded-lg border border-black/10 p-4 md:h-80"
              />
              {errors?.message && (
                <span className="font px-4 text-left text-sm text-red-600">{errors.message}</span>
              )}
            </div>
            <div className="flex justify-center md:justify-end ">
              <SubmitBtn
                disabled={
                  isValidatingEmail ||
                  isLoading ||
                  (formData?.senderEmail?.length === 0 && formData?.message?.length === 0)
                }
                pending={isLoading}
              />
            </div>
          </form>
          <hr className="" />
          <div className="flex justify-center gap-8 sm:gap-16 md:gap-20">
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
