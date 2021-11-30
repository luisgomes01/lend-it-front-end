import React, { createContext, useState, useContext } from "react";

const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [lends, setLends] = useState([]);
  const [late, setLate] = useState([]);

  function removeLend(id) {
    setLends(lends.filter((e) => e.id !== id));
    setLate(late.filter((e) => e.id !== id));
  }

  return (
    <lendContext.Provider
      value={{
        lends,
        setLends,
        late,
        setLate,
        removeLend,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
