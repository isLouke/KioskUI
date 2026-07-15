// app/components/theme-switcher.tsx
"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleThemeChange() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Button isIconOnly variant="ghost" onPress={() => handleThemeChange()}>
      {activeTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
