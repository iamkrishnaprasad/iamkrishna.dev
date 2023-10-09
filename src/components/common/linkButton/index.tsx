"use client";

import Button from "@/components/common/button";
import { LinkButtonProps } from "@/types";

const LinkButton = ({ url = "", target, label }: LinkButtonProps) => {
  return <Button onClick={() => window?.open(url, target)}>{label}</Button>;
};

export default LinkButton;
