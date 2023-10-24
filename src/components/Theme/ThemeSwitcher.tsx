import { Text, Button } from "../../ui";
import { useThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  return (
    <div>
      <Text>Theme: {context.theme || "null"}</Text>
      <Button label="Toggle" onClick={() => context.toggle()} />
    </div>
  );
};
