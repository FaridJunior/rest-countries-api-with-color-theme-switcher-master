import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function ThemeToggler() {
  let { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const preferredDarkColorSchemeListener = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (
      (preferredDarkColorSchemeListener.matches && theme === null) ||
      theme === "dark"
    ) {
      enableDarkMode();
    }

    preferredDarkColorSchemeListener.addEventListener(
      "change",
      handleThemePreferenceChange
    );

    return () => {
      preferredDarkColorSchemeListener.removeEventListener(
        "change",
        handleThemePreferenceChange
      );
    };
  }, []);

  function handleThemePreferenceChange(e) {
    if (e.matches) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }

  function enableDarkMode() {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }
  function enableLightMode() {
    localStorage.setItem("theme", "light");
    setTheme("light");
  }

  function toggleTheme() {
    if (theme === "dark") {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  }

  return (
    <label className="theme-toggler__label" htmlFor="theme-toggler">
      <input
        type="checkBox"
        className="theme-toggler"
        id="theme-toggler"
        onChange={toggleTheme}
        defaultChecked={theme == "dark" ? true : false}
      />
      <span className="dark-theme-option">🌕 Dark Theme</span>
      <span className="light-theme-option">🌞 Light Theme</span>
    </label>
  );
}

export default ThemeToggler;
