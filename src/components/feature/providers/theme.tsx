"use client";

import { ProvidersProps } from "@/types";
import { ThemeProvider as NextJSThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextJSThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </NextJSThemeProvider>
  );
};

export default ThemeProvider;
