import React, { createContext, useState, useContext } from 'react';


const userContext = createContext({})

export default function UserContextProvider({children}) {
  const [isLogged, setIsLogged] = useState(false);

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