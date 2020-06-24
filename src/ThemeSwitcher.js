import React from "react";

const ThemeSwitcher = ({ switchTheme, theme, buttonTheme }) => {
  return (
    <button
      onClick={switchTheme}
      className={"themeSwitcher " + theme}
      id="themeSwitcher"
    >
      <div className="light">
        <i className="fas fa-sun fa-2x"></i>
      </div>
      <div className="dark">
        <i className="fas fa-moon fa-2x"></i>
      </div>
      <div className={buttonTheme} id="current"></div>
    </button>
  );
};

export default ThemeSwitcher;