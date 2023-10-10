import ContactFormEmail from "@/emails/contact-form-email";
import { deepCopy, isEmail } from "@/utils";
import validate from "deep-email-validator";
import { Resend } from "resend";

const resendEmail: {
  apiKey: string;
  from: string;
  to: string;
} = {
  apiKey: `${process.env.RESEND_API_KEY}`,
  from: `${process.env.RESEND_EMAIL_FROM}`,
  to: `${process.env.RESEND_EMAIL_TO}`
};

const generateResponse = (message: string = "", statusCode: number = 200) => {
  return new Response(
    JSON.stringify({
      message,
      statusCode
    }),
    {
      status: statusCode,
      headers: {
        "content-type": "application/json"
      }
    }
  );
};

export async function POST(request: Request) {
  const { senderEmail, message } = await request.json();

  if (!senderEmail.trim() || senderEmail.trim() === "") {
    return generateResponse("Email address in required.", 400);
  } else if (!isEmail(senderEmail.trim())) {
    return generateResponse("Please enter a valid email address.", 400);
  }
  if (!message.trim() || message.trim() === "")
    return generateResponse("Message is required.", 400);

  if (
    !resendEmail.apiKey.trim() ||
    resendEmail.apiKey.trim() === "" ||
    resendEmail.apiKey === "undefined"
  )
    return generateResponse(
      "Missing: Resend API key is not configured correctly. Please configure it manually and try again.",
      400
    );

  if (!resendEmail.to.trim() || resendEmail.to.trim() === "" || resendEmail.to === "undefined")
    return generateResponse(
      "Missing: Receiver email address is not configured correctly. Please configure it manually and try again.",
      400
    );

  if (
    !resendEmail.from.trim() ||
    resendEmail.from.trim() === "" ||
    resendEmail.from === "undefined"
  )
    return generateResponse(
      "Missing: Mailer address is not configured correctly. Please configure it manually and try again.",
      400
    );

  // uncomment these commented part after testing
  // const { valid, validators, reason } = await validate(senderEmail);

  // if (valid) {
  const data: { id?: string; statusCode?: number; message?: string } = await new Resend(
    resendEmail.apiKey
  ).emails.send({
    from: `Contact Form <${resendEmail.from}>`,
    to: resendEmail.to,
    subject: `Message from ${senderEmail}`,
    reply_to: senderEmail,
    react: ContactFormEmail({ message, senderEmail })
  });

  if ((data?.statusCode && data?.statusCode >= 400) || data?.message) {
    return generateResponse(data?.message, data?.statusCode);
  } else if (data?.id) {
    return generateResponse("Email sent successfully!", 200);
  }
  // } else {
  //   // let emailErrorReason;
  //   // if (reason) {
  //   //   emailErrorReason = deepCopy(validators)[reason as string].reason;
  //   // }
  //   return generateResponse(
  //     "Email address is not valid. Please provide a valid email address.",
  //     400
  //   );
  // }
}
