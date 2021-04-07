import React from "react";
import { Link } from "@reach/router";
import ThemeToggler from "./ThemToggler";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="heading">
          <Link to="/">Where in The World?</Link>
        </h1>
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
