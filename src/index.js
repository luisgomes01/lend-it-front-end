import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import LendContextProvider from "./contexts/lendContext";
import UserContextProvider from "./contexts/userContext";

ReactDOM.render(
  <UserContextProvider>
    <LendContextProvider>
      <App />
    </LendContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
