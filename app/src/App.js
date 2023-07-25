import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/Navigation";
import Home from "./pages/Home";
import CreateAccount from "./pages/Create";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllAccounts from "./pages/All";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userBalance, setUserBalance] = useState(-1);
  return (
    <HashRouter>
      <NavBar {...{ userEmail, userBalance }} />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CreateAccount"
            element={<CreateAccount {...{ setUserBalance, setUserEmail }} />}
          />
          <Route
            path="/Deposit"
            element={
              <Deposit {...{ userEmail, userBalance, setUserBalance }} />
            }
          />
          <Route
            path="/Withdraw"
            element={
              <Withdraw {...{ userEmail, userBalance, setUserBalance }} />
            }
          />
          <Route path="/AllAccounts" element={<AllAccounts />} />
          <Route
            path="/Login"
            element={<Login {...{ setUserEmail, setUserBalance }} />}
          />
          <Route
            path="/Logout"
            element={<Logout {...{ setUserEmail, setUserBalance }} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
