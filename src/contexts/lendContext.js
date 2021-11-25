import React, { createContext, useState, useContext } from "react";

const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [leans, setLeans] = useState([]);
  const [late, setLate] = useState([]);

  return (
    <lendContext.Provider
      value={{
        leans,
        setLeans,
        late,
        setLate,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
