"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${
        isDark ? "bg-primary" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        } flex items-center justify-center`}
      >
        {isDark ? (
          <Sun size={16} className="text-primary" />
        ) : (
          <Moon size={16} className="text-gray-700" />
        )}
      </div>
    </button>
  );
}
