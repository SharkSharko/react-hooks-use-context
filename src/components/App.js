import React from 'react';
import Header from './Header';
import Profile from './Profile';
import { UserProvider } from '../context/user'; // Import UserContext provider
import { ThemeProvider } from '../context/theme'; // Import ThemeContext provider

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;


