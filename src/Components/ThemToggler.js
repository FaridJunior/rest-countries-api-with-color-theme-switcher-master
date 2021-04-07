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
        defaultChecked={theme == "dark" ? false : true}
      />
      {/*  svg from https://phosphoricons.com/ */}
      <span className="dark-theme-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path d="M224.30762,150.29346a8.00288,8.00288,0,0,0-10.01416-5.28955A84.03122,84.03122,0,0,1,111.01514,41.6377a8.00207,8.00207,0,0,0-9.96582-9.96192,100.01386,100.01386,0,1,0,123.29,123.2207A8.0018,8.0018,0,0,0,224.30762,150.29346Z"></path>
        </svg>{" "}
        Dark Mode
      </span>
      <span className="light-theme-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <g>
            <circle cx="128" cy="128" r="68"></circle>
            <path d="M128,44a8.00008,8.00008,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8.00008,8.00008,0,0,0,128,44Z"></path>
            <path d="M57.28955,68.603A7.99984,7.99984,0,1,0,68.603,57.28955L54.46094,43.14746A7.99984,7.99984,0,1,0,43.14746,54.46094Z"></path>
            <path d="M44,128a8.00008,8.00008,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8.00008,8.00008,0,0,0,44,128Z"></path>
            <path d="M57.28955,187.397,43.14746,201.53906a7.99984,7.99984,0,1,0,11.31348,11.31348L68.603,198.71045A7.99984,7.99984,0,1,0,57.28955,187.397Z"></path>
            <path d="M128,212a8.00008,8.00008,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8.00008,8.00008,0,0,0,128,212Z"></path>
            <path d="M198.71045,187.397A7.99984,7.99984,0,1,0,187.397,198.71045l14.14209,14.14209a7.99984,7.99984,0,1,0,11.31348-11.31348Z"></path>
            <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"></path>
            <path d="M193.05371,70.94629a7.97507,7.97507,0,0,0,5.65674-2.34326l14.14209-14.14209a7.99984,7.99984,0,1,0-11.31348-11.31348L187.397,57.28955a7.99976,7.99976,0,0,0,5.65674,13.65674Z"></path>
          </g>
        </svg>{" "}
        Light Mode
      </span>
    </label>
  );
}

export default ThemeToggler;
