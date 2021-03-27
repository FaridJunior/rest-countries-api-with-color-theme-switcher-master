import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  let [theme, setTheme] = useState("dark");
  const themeValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`app ${theme}-theme`}>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
