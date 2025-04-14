import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';  // Access theme from context
import { UserContext } from '../context/user';    // Access user from context

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);  // Use theme context
  const { user, setUser } = useContext(UserContext);    // Use user context

  function handleLogin() {
    if (user) {
      setUser(null);  // Log out
    } else {
      setUser({ name: 'Emmanuel' }); // Log in with a test user
    }
  }

  return (
    <header className={theme}>
      <h1>React Context</h1>
      <button onClick={handleLogin}>{user ? 'Logout' : 'Login'}</button>
      {/* Add more components or actions here */}
    </header>
  );
}

export default Header;


