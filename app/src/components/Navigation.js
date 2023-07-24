import React from "react";

export default function NavBar() {
  function addNavBorder(e) {
    // Clear all borders first
    document.getElementById("home").style.border = "none";
    const navItems = document.getElementsByClassName("nav-item");
    for (let item of navItems) {
      item.style.border = "none";
    }
    // Add border to current target
    if (e.currentTarget.id === "home") {
      e.currentTarget.style.borderBottom = "solid";
    } else {
      e.currentTarget.style.border = "solid";
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          id="home"
          className="navbar-brand"
          title="Home Page"
          href="#/"
          style={{ borderBottom: "solid" }}
          onClick={addNavBorder}
        >
          Harper Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={addNavBorder}>
              <a
                className="nav-link"
                title="Create New Account"
                href="#/CreateAccount"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item" onClick={addNavBorder}>
              <a className="nav-link" title="Deposit Money" href="#/Deposit">
                Deposit
              </a>
            </li>
            <li className="nav-item" onClick={addNavBorder}>
              <a className="nav-link" title="Withdraw Money" href="#/Withdraw">
                Withdraw
              </a>
            </li>
            <li className="nav-item" onClick={addNavBorder}>
              <a className="nav-link" title="All Accounts" href="#/AllAccounts">
                All Accounts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
