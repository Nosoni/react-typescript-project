import { createContext, useContext, useState } from "react";

const context = createContext({
  theme: "",
  changeTheme: () => {},
  isLightTheme: (): boolean => {
    return false;
  },
});

const themeProvider = () => {
  const getDefaultTheme = (): string => {
    const isBrowserDefaultDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const localStorageTheme = localStorage.getItem("theme-mode");
    const browserDefault = isBrowserDefaultDark ? "dark" : "light";

    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isLightTheme = (): boolean => {
    return theme === "light";
  };

  return {
    theme,
    changeTheme,
    isLightTheme,
  };
};

type Props = { children: JSX.Element };
export const ThemeContext = ({ children }: Props) => {
  return (
    <context.Provider value={themeProvider()}>{children}</context.Provider>
  );
};

export const useTheme = () => {
  return useContext(context);
};
