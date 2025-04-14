// src/context/user.js
import React, { createContext, useState } from 'react';

// Create a UserContext to manage the user state
export const UserContext = createContext();

// UserProvider component to wrap around the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Default is null (not logged in)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


