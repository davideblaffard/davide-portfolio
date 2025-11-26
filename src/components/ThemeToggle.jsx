import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
    >
      <span className="theme-toggle__track">
        <span
          className={`theme-toggle__thumb ${
            isDark ? "theme-toggle__thumb--right" : ""
          }`}
        />
      </span>
      <span className="theme-toggle__icon">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
};

export default ThemeToggle;
