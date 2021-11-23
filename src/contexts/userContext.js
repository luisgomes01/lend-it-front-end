import React, { createContext, useState, useEffect, useContext } from 'react';


const userContext = createContext({})

export default function UserContextProvider({children}) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("@lendit/user_id"));
  }, []);

  return (
    <userContext.Provider value={{
      isLogged,
      setIsLogged
    }}>
    {children}
    </userContext.Provider>
  )
}

export const useUsers = () => useContext(userContext);