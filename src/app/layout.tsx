import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/feature/header";
import Footer from "@/components/feature/footer";
import Providers from "@/components/feature/providers";
import Script from "next/script";
import { RootLayoutProps } from "@/types";
import { inter } from "@/utils/fonts";

const creator = "Krishnaprasad M.";
const title = `${creator} | Full-Stack Developer`;
const description =
  "A skilled and dynamic full-stack developer specializing in ReactJS and NodeJS.";
const url = "https://iamkrishna.dev";

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  title,
  description,
  creator,
  keywords: ["Full-Stack Developer", "JavaScript", "ReactJS", "NodeJS", "PostgresSQL"]
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-analytics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} no-scrollbar overflow-y-scroll antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

