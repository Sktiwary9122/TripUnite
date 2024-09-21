import React, { createContext, useRef } from 'react';

// Create a UserContext to share the user ID across the application
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  // Store user ID using useRef
  const userIdRef = useRef(null);

  return (
    <UserContext.Provider value={userIdRef}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

