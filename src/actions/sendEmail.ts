"use server";

import { validateString } from "@/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const receiverEmail = process.env.RESEND_EMAIL_TO;
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(receiverEmail, 320)) {
    return {
      message:
        "Receiver email address is not configured correctly. Please configure it manually and try again."
    };
  }

  if (!validateString(senderEmail, 320)) {
    return {
      message: "Invalid email address."
    };
  }

  if (!validateString(message, 5000)) {
    return {
      message: "Invalid message"
    };
  }
  try {
    return await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL_TO as string,
      subject: "Message from contact form.",
      reply_to: senderEmail as string,
      text: message as string
    });
  } catch (err: unknown) {
    console.log(err.message);
  }
};
