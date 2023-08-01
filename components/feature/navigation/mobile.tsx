import React from "react";
import ThemeSwitcher from "../themeSwitcher";
import { NAV_LINKS } from "@/helper";
import Link from "@/components/common/link";

const MobileNavigation = () => {
  return (
    <>
      <div className="flex items-center gap-6 md:hidden">
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
        <div className="h-6 w-0.5 bg-gray-100"></div>
        <div>P</div>
      </div>
      <div className="absolute left-0 top-[68px] flex w-full items-center border-y border-gray-100 bg-white py-3 dark:bg-[#121212] md:hidden">
        <ul className="flex list-none flex-col items-start gap-3 px-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
