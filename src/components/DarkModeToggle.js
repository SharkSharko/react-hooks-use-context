import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default DarkModeToggle;
