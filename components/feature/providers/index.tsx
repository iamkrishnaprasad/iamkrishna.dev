"use client";

import { ProvidersProps } from "@/types";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
