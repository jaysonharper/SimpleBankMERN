import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";
import { UserContext } from "../App";

export default function Deposit() {
  const [status, setStatus] = useState("");
  const [deposit, setDeposit] = useState(0);
  const currUser = useContext(UserContext).accounts[0];
  console.log(currUser.name);
  // console.log(currUser);

  function valid() {
    if (deposit < 0) {
      setStatus("Deposit amount cannot be negative.");
      setTimeout(() => resetOnError(), 5000);
      return false;
    }
    return true;
  }

  function resetOnError() {
    setStatus("");
    setDeposit(0);
  }

  const handleDeposit = async () => {
    // console.log("amount to deposit: " + deposit);
    if (!valid()) return;
    // Deposit amount to the current user's account balance.
    // console.log("currUser balance before: " + currUser.balance);
    await fetch(`${baseUrl}/accounts/deposit/${currUser.email}/${deposit}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    currUser.balance = Number(currUser.balance) + Number(deposit);
    // console.log("currUser balance after: " + currUser.balance);
    setDeposit(0);
  };

  return (
    <Card
      maxWidth="18rem"
      header={"Deposit | " + currUser.name}
      status={status}
      body={
        <>
          <h4 className="text-info">Balance: $ {currUser.balance}</h4>
          <br />
          <input
            type="number"
            className="form-control"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <button
            disabled={deposit === 0}
            type="submit"
            className="btn btn-primary"
            onClick={handleDeposit}
          >
            Deposit Now
          </button>
          <br />
        </>
      }
    />
  );
}
