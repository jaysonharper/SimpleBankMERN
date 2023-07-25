import React, { useState } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

export default function Withdraw(props) {
  const [status, setStatus] = useState("");
  const [withdraw, setWithdraw] = useState(0);

  function valid() {
    let isValid = true;
    if (withdraw < 0) {
      setStatus("Withdraw amount cannot be negative.");
      isValid = false;
    } else if (withdraw > props.userBalance) {
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
    await fetch(`${baseUrl}/accounts/withdraw/${props.userEmail}/${withdraw}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    props.setUserBalance(Number(props.userBalance) - Number(withdraw));
    setWithdraw(0);
  }

  return (
    <Card
      maxWidth="18rem"
      header={"Withdraw"}
      status={status}
      body={
        <>
          <h4 className="text-info">Balance: $ {props.userBalance > -1 ? props.userBalance : "[n/a]"}</h4>
          <br />
          <input
            disabled={!props.userEmail}
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
