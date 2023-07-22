import React from "react";

export default function Deposit() {
  // const [status, setStatus] = React.useState("");
  // const [deposit, setDeposit] = React.useState(0);
  // const currUserIndex = React.useContext(UserContext).users.length - 1;
  // const currUser = React.useContext(UserContext).users[currUserIndex];

  // function valid() {
  //   if (deposit < 0) {
  //     setStatus("Deposit amount cannot be negative.");
  //     setTimeout(() => resetOnError(), 5000);
  //     return false;
  //   }
  //   return true;
  // }

  // function resetOnError() {
  //   setStatus("");
  //   setDeposit(0);
  // }

  // function handleDeposit() {
  //   console.log("amount to deposit: " + deposit);
  //   if (!valid()) return;
  //   // Deposit amount to the current user's account balance.
  //   console.log("currUser balance before: " + currUser.balance);
  //   currUser.balance = Number(currUser.balance) + Number(deposit);
  //   console.log("currUser balance after: " + currUser.balance);
  //   setDeposit(0);
  // }

  return (
    <h1>Deposit Page</h1>
    // <Card
    //   maxWidth="18rem"
    //   header={"Deposit | " + currUser.name}
    //   status={status}
    //   body={
    //     <>
    //       <h4 className="text-info">Balance: $ {currUser.balance}</h4>
    //       <br />
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="deposit"
    //         value={deposit}
    //         onChange={(e) => setDeposit(e.currentTarget.value)}
    //       />
    //       <br />
    //       <button
    //         disabled={deposit == 0}
    //         type="submit"
    //         className="btn btn-primary"
    //         onClick={handleDeposit}
    //       >
    //         Deposit Now
    //       </button>
    //       <br />
    //     </>
    //   }
    // />
  );
}
