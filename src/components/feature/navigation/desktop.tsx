import React from "react";
import ThemeSwitcher from "../themeSwitcher";
import { SECTIONS_AND_NAV_LINKS } from "@/helper";
import Link from "@/components/common/link";
import { Section } from "@/types";

const DesktopNavigation = () => {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <ul className="flex list-none items-center gap-6">
        {SECTIONS_AND_NAV_LINKS?.filter(
          (section: Section) => Boolean(section?.isInActive) === false
        )
          ?.filter((section: Section) => Boolean(section?.hideNav) === false)
          ?.map((link) => (
            <li key={link.label}>
              <Link href={`#${link.id}`}>{link.label}</Link>
            </li>
          ))}
      </ul>
      <div className="h-6 w-0.5 bg-gray-100"></div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default DesktopNavigation;
