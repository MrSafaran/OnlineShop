import React, { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setState: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
