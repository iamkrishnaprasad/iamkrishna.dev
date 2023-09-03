import Typography from "@/components/common/typography";
import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {/* {new Date().getFullYear()} | coded with ❤️ by Krishnaprasad M. */}
          {new Date().getFullYear()} | Made with ❤️ by Krishnaprasad M.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
