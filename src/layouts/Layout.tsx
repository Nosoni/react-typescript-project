import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import "./Layout.scss";
const Layout = () => {
  const { theme, changeTheme, isLightTheme } = useTheme();

  return (
    <section className={`layout theme-${theme}`}>
      <aside className={`sidebar sidebar-${theme}`}>
        <div className={`sidebar-header`}>
          <span>My Company</span>
          <button style={{ background: "transparent" , height: "30px"}} onClick={changeTheme}>
            <img src={isLightTheme() ? iconMoon : iconSun} />
          </button>
        </div>
        <ul></ul>
      </aside>
    </section>
  );
};

export default Layout;