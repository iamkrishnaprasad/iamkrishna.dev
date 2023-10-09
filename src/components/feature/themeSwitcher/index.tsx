"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconButton from "../../common/iconButton";
import { LuMoon as MoonIcon, LuSun as SunIcon } from "react-icons/lu";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton>
        <MoonIcon />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</IconButton>
  );
};

export default ThemeSwitcher;
