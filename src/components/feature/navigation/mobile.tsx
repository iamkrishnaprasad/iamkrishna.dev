"use client";

import React, { useState } from "react";
import ThemeSwitcher from "../themeSwitcher";
import { SECTIONS_AND_NAV_LINKS } from "@/helper";
import Link from "@/components/common/link";
import IconButton from "@/components/common/iconButton";
import { LuMenu as MenuIcon, LuX as MenuCloseIcon } from "react-icons/lu";
import { Section } from "@/types";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-6 md:hidden">
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
        <div className="h-6 w-0.5 bg-gray-100"></div>
        <div>
          <IconButton onClick={toggleIsOpen}>
            {isOpen ? <MenuCloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute left-0 top-[68px] flex w-full items-center border-y border-gray-100 bg-white py-3 dark:bg-[#121212] md:hidden">
          <ul className="flex list-none flex-col items-start gap-3 px-4">
            {SECTIONS_AND_NAV_LINKS?.filter(
              (section: Section) => Boolean(section?.isInActive) === false
            )
              ?.filter((section: Section) => Boolean(section?.hideNav) === false)
              ?.map((link) => (
                <li key={link.label}>
                  <Link onClick={() => handleClick()} href={`#${link.id}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileNavigation;
