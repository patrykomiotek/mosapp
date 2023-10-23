import { createContext, useContext, useState } from "react";
// 1. context
// 2. Provider
// 3. custom hook

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  theme: Theme;
  toggle: Function;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside ThemeProvider");
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggle = () => {
    if (theme === Theme.LIGHT) {
      document.body.classList.add("dark");
      setTheme(Theme.DARK);
    } else {
      document.body.classList.remove("dark");
      setTheme(Theme.LIGHT);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
