"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from 'react';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Or render a placeholder
  }

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <span><FiSun /></span>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <span><FiMoon /></span>
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
