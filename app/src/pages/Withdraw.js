import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";
import { UserContext } from "../App";

export default function Withdraw() {
  const [status, setStatus] = useState("");
  const [withdraw, setWithdraw] = useState(0);
  const currUser = useContext(UserContext).accounts[0];

  function valid() {
    let isValid = true;
    if (withdraw < 0) {
      setStatus("Withdraw amount cannot be negative.");
      isValid = false;
    } else if (withdraw > currUser.balance) {
      setStatus("Funds not available.");
      isValid = false;
    }
    if (!isValid) setTimeout(() => resetOnError(), 5000);
    return isValid;
  }

  function resetOnError() {
    setStatus("");
    setWithdraw(0);
  }

  const handleWithdraw = async () => {
    // console.log("amount to withdraw: " + withdraw);
    if (!valid()) return;
    // Withdraw amount from the current user's account balance.
    // console.log("currUser balance before: " + currUser.balance);
    await fetch(`${baseUrl}/accounts/withdraw/${currUser.email}/${withdraw}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    currUser.balance = Number(currUser.balance) - Number(withdraw);
    // console.log("currUser balance after: " + currUser.balance);
    setWithdraw(0);
  }

  return (
    <Card
      maxWidth="18rem"
      header={"Withdraw | " + currUser.name}
      status={status}
      body={
        <>
          <h4 className="text-info">Balance: $ {currUser.balance}</h4>
          <br />
          <input
            type="number"
            className="form-control"
            id="withdraw"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
          />
          <br />
          <button
            disabled={withdraw === 0}
            type="submit"
            className="btn btn-primary"
            onClick={handleWithdraw}
          >
            Withdraw Now
          </button>
          <br />
        </>
      }
    />
  );
}
