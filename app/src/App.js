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
  const [userAdmin, setUserAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <HashRouter>
      <NavBar {...{ userEmail, userBalance, userAdmin }} />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CreateAccount"
            element={
              <CreateAccount
                {...{ setUserBalance, setUserEmail, setUserAdmin, setUserName }}
              />
            }
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
          <Route
            path="/AllAccounts"
            element={<AllAccounts {...{ setUserEmail, setUserBalance, userAdmin, setUserAdmin }} />}
          />
          <Route
            path="/Login"
            element={<Login {...{ setUserEmail, setUserBalance, setUserAdmin, setUserName }} />}
          />
          <Route
            path="/Logout"
            element={<Logout {...{ setUserEmail, userEmail, setUserBalance, setUserAdmin, userName, setUserName }} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
