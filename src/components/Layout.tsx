import { useTheme } from "./ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  return <section className={`container theme-${theme}`}>Layout</section>;
};

export default Layout;
