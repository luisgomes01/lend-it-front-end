import React, { createContext, useState, useContext } from "react";

const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [lends, setLends] = useState([]);
  const [late, setLate] = useState([]);
  const [object, setObject] = useState([]);
  const [lentDate, setLentDate] = useState([]);
  const [objectReturnDate, setObjectReturnDate] = useState([]);
  const [whoLent, setWhoLent] = useState([]);
  const [emailWhoLent, setEmailWhoLent] = useState([]);
  const [cellphoneWhoLent, setCellphoneWhoLent] = useState([]);

  return (
    <lendContext.Provider
      value={{
        lends,
        setLends,
        late,
        setLate,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
