import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/Navigation";
import Home from "./pages/Home";
import CreateAccount from "./pages/Create";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllAccounts from "./pages/All";

function App() {
  return (
    <HashRouter>
      <NavBar />
      {/* <UserContext.Provider
        value={{
          users: [
            {
              name: "Jayson Harper",
              email: "jayson@test.com",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      > */}
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/Withdraw" element={<Withdraw />} />
          <Route path="/AllAccounts" element={<AllAccounts />} />
        </Routes>
      </div>
      {/* </UserContext.Provider> */}
    </HashRouter>
  );
}

export default App;
