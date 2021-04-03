import React, { useState } from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Details from "./Components/Details";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  let [theme, setTheme] = useState("dark");
  const themeValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`app ${theme}-theme`}>
        <Header />
        <Router>
          <Main path="/" />
          <Details path="/details/:name" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
