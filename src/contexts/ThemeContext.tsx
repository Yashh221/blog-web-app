"use client";
import React, { createContext } from "react";

export const ThemeContext = createContext({ });

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value;
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(() => {
    return getFromLocalStorage() || "light";
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  React.useEffect(() => {
    theme && localStorage.setItem("theme", theme);
  }, [theme]);
  console.log(theme)
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
