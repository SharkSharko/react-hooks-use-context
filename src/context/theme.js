import React, { createContext, useState } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Create a ThemeProvider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // default theme
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
