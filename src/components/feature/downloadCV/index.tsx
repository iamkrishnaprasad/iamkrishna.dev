"use client";

import Button from "@/components/common/button";
import React from "react";

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open("/files/krishnaprasad-m_cv.pdf", "_blank")}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
