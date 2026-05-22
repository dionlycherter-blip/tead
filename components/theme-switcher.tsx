"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  // บังคับใช้ธีมมืดเสมอ
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
      <MoonIcon />
    </Button>
  );
}
