import React, { useState } from "react";
import "../css/style.css"
function DarkModeSide() {
  const [darkMode, setDarkMode] = useState(false);

// function to toggle the dark mode
const toggleDarkMode = () => {
setDarkMode(!darkMode);
};


  return (
    <div className="DarkModeSide">
        <div className={darkMode ? "dark-mode" : "light-mode"}>
    <a onClick={toggleDarkMode}>
    <i class="fa-moon" style={{paddingRight: "5px"}}></i>
    Toggle Dark Mode</a>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </div>
    </div>
  );
}

export default DarkModeSide;