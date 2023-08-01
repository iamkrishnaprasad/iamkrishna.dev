"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconButton from "../../common/iconButton";
import { Moon, Sun } from "lucide-react";

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
        <Moon />
      </IconButton>
    );
  }

  return <IconButton onClick={toggleTheme}>{theme === "dark" ? <Sun /> : <Moon />}</IconButton>;
};

export default ThemeSwitcher;
