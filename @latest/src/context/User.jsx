import { createContext, useState, useContext } from "react";

// Create context
const UserContext = createContext(undefined);

// Provider component
export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Fariza Shakir",
    email: "farizashakir13@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// Custom hook for consuming context
export const useUser = () => useContext(UserContext);
