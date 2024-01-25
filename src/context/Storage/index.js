import { createContext, useState } from 'react';

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [currentUser, setCurrentUser] = useState(false);

  const states = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
  };

  return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default GlobalStates;
