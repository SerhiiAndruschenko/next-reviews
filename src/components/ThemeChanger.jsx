"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <FiSun />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <FiMoon />
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
