import { useTheme } from "@/config/theme-provider";

export default function useChangeTheme() {
 const { setTheme, theme } = useTheme();
    const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };


  return {
    toggle,
    theme
  }
}