import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  let [checked, setChecked] = useState(false);
  let { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme(event) {
    setChecked(!checked);
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="main-header">
      <div className="container">
        <h1 className="heading">Where in The World?</h1>
        <label className="theme-toggler__label" htmlFor="theme-toggler">
          <input
            type="checkBox"
            className="theme-toggler"
            id="theme-toggler"
            onChange={toggleTheme}
            defaultChecked={checked}
          />
          <span className="dark-theme-option">🌕 Dark Theme</span>
          <span className="light-theme-option">🌞 Light Theme</span>
        </label>
      </div>
    </header>
  );
}

export default Header;
