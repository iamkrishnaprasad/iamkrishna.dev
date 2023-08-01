"use client";

import { ImageWrapperProps } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageWrapper = ({ src, srcForDarkMode, alt, ...props }: ImageWrapperProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const imageSrc = theme === "dark" ? srcForDarkMode || src : src;

  return <Image src={imageSrc!} alt={alt} {...props} />;
};

export default ImageWrapper;
