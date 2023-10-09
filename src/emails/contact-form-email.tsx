import React from "react";
import {
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message = "",
  senderEmail = ""
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from your portfolio site</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>You received the following message from your portfolio site</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>{`The sender's email is: ${senderEmail}`}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
