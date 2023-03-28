import { useState , createContext} from "react";
import "./App.scss";

const ThemeContext = createContext({
  theme: "",
  setTheme: (theme: string) => {},
});

function App() {
  const getDefaultTheme = (): string => {
    const isBrowserDefaultDark =  window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const localStorageTheme = localStorage.getItem('theme-mode');
    const browserDefault = isBrowserDefaultDark ? 'dark' : 'light';
    
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <section className={`container theme-${theme}`}>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
