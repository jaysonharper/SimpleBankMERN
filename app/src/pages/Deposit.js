import React, { useState } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

export default function Deposit(props) {
  const [status, setStatus] = useState("");
  const [deposit, setDeposit] = useState(0);

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
    await fetch(`${baseUrl}/accounts/deposit/${props.userEmail}/${deposit}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    props.setUserBalance(Number(props.userBalance) + Number(deposit));
    setDeposit(0);
  };

  return (
    <Card
      maxWidth="18rem"
      header={"Deposit"}
      status={status}
      body={
        <>
          <h4 className="text-info">
            Balance: $ {props.userBalance > -1 ? props.userBalance : "[n/a]"}
          </h4>
          <br />
          <input
            disabled={!props.userEmail}
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
