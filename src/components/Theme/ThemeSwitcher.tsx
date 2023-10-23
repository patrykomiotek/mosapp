import { useTheme } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const context = useTheme();

  return (
    <div>
      <button onClick={() => context.toggle()}>Toggle</button>
    </div>
  );
};
