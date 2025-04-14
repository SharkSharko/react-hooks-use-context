// src/App.js
import React from 'react';
import { UserProvider } from './context/user';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;
