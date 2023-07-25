import React from "react";

export default function NavBar(props) {
  function addNavBorder(e) {
    // Clear all borders first
    document.getElementById("home").style.border = "none";
    const navItems = document.getElementsByClassName("nav-item");
    for (let item of navItems) {
      item.style.border = "none";
    }
    // Add border to current target
    // console.log(e.currentTarget.id);
    if (e.currentTarget.id === "home") {
      e.currentTarget.style.borderBottom = "solid";
    } else if (!e.currentTarget.id) {
      e.currentTarget.style.border = "solid";
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <ul className="navbar-nav text-white">
          <li className="nav-item">
            <a
              id="home"
              className="navbar-brand text-white"
              title="Home Page"
              href="#/"
              style={{ borderBottom: "solid" }}
              onClick={addNavBorder}
            >
              Harper Bank
            </a>
          </li>
          <li className="nav-item" onClick={addNavBorder}>
            <a
              className="nav-link text-white"
              title="Create New Account"
              href="#/CreateAccount"
            >
              Create Account
            </a>
          </li>
          <li className="nav-item" onClick={addNavBorder}>
            <a
              className="nav-link text-white"
              title="Deposit Money"
              href="#/Deposit"
            >
              Deposit
            </a>
          </li>
          <li className="nav-item" onClick={addNavBorder}>
            <a
              className="nav-link text-white"
              title="Withdraw Money"
              href="#/Withdraw"
            >
              Withdraw
            </a>
          </li>
          <li className="nav-item" onClick={addNavBorder}>
            <a
              className="nav-link text-white"
              title="All Accounts"
              href="#/AllAccounts"
            >
              All Accounts
            </a>
          </li>
        </ul>
        <div
          className="navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav text-white">
            <li className="nav-item">
              <a
                id="login"
                className="nav-link text-white"
                title="Log In"
                href="#/Login"
                onClick={addNavBorder}
              >
                {props.userEmail === "" ? "Log In" : ""}
              </a>
            </li>
            <li className="nav-item">
              <a
                id="logout"
                className="nav-link text-white"
                title="User Name"
                href="#/Logout"
                onClick={addNavBorder}
              >
                {props.userBalance > -1
                  ? ("$ " + props.userBalance + " | " + props.userEmail + (props.userAdmin ? " (admin)" : ""))
                  : (props.userEmail)}
              </a>
            </li>
            <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
