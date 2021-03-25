import React from "react";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1>Where in The World?</h1>
        <label htmlFor="theme">
          <input type="checkBox" />
          <span>🌕 Dark Theme</span>
          <span>🌞 Light Theme</span>
        </label>
      </div>
    </header>
  );
}

export default Header;
