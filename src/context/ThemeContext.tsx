import { useState, createContext, useContext, useEffect } from "react";

export type ThemeContextType = 'light' | 'dark';
const ThemeContext = createContext<ThemeContextType>('light');

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<ThemeContextType>('light');

  const toggleTheme = () => {
    setDarkMode(prevState => prevState == "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute(
        "data-theme",
        darkMode == 'dark' ? "dark" : "cupcake"
    );
  }, [darkMode]);

  return (
      <ThemeContext.Provider value={ darkMode }>
        {children}
      </ThemeContext.Provider>
  );
};