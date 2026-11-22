
import { createContext, useState } from "react";

// Shared theme context
export const ThemeContext = createContext();

// Dark theme
const darkTheme = {
  // Backgrounds
  background: "#17365D",
  secondaryBackground: "#102844",
  card: "#234B75",
  surface: "#2C5985",
  input: "#102844",

  // Primary colors
  primary: "#73A9D9",
  highlight: "#A8CFF2",

  // Text colors
  text: "#FFFFFF",
  secondaryText: "#D7E8F7",
  placeholder: "#AEC7DD",

  // Buttons
  button: "#FFFFFF",
  buttonText: "#17365D",

  // Borders and separators
  border: "#4F86B4",
  divider: "rgba(255,255,255,0.15)",

  // Navigation
  tabBar: "#102844",
  tabActive: "#FFFFFF",
  tabInactive: "#B7CBDD",

  // Chat background decorations
  chatBubble: "rgba(168,207,242,0.07)",
  chatBubbleDot: "rgba(255,255,255,0.24)",

  // Status colors
  success: "#65D6A0",
  danger: "#FF7777",
};

// Light theme
const lightTheme = {
  // Backgrounds
  background: "#EFF6FC",
  secondaryBackground: "#DDEBF7",
  card: "#FFFFFF",
  surface: "#E8F2FA",
  input: "#FFFFFF",

  // Primary colors
  primary: "#73A9D9",
  highlight: "#3F78A8",

  // Text colors
  text: "#17324D",
  secondaryText: "#5D7892",
  placeholder: "#93AABD",

  // Buttons
  button: "#73A9D9",
  buttonText: "#FFFFFF",

  // Borders and separators
  border: "#BED5EA",
  divider: "#DCEAF4",

  // Navigation
  tabBar: "#FFFFFF",
  tabActive: "#3F78A8",
  tabInactive: "#93AABD",

  // Chat background decorations
  chatBubble: "rgba(63,120,168,0.05)",
  chatBubbleDot: "rgba(63,120,168,0.20)",

  // Status colors
  success: "#218A60",
  danger: "#D94355",
};

// Theme Provider
export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("Dark");

  // Select the correct color palette
  const theme = themeName === "Dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
