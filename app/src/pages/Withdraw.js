import React from "react";

export default function Withdraw() {
  // const [status, setStatus] = React.useState("");
  // const [withdraw, setWithdraw] = React.useState(0);
  // const currUserIndex = React.useContext(UserContext).users.length - 1;
  // const currUser = React.useContext(UserContext).users[currUserIndex];

  // function valid() {
  //   let isValid = true;
  //   if (withdraw < 0) {
  //     setStatus("Withdraw amount cannot be negative.");
  //     isValid = false;
  //   } else if (withdraw > currUser.balance) {
  //     setStatus("Funds not available.");
  //     isValid = false;
  //   }
  //   if (!isValid) setTimeout(() => resetOnError(), 5000);
  //   return isValid;
  // }

  // function resetOnError() {
  //   setStatus("");
  //   setWithdraw(0);
  // }

  // function handleWithdraw() {
  //   console.log("amount to withdraw: " + withdraw);
  //   if (!valid()) return;
  //   // Withdraw amount from the current user's account balance.
  //   console.log("currUser balance before: " + currUser.balance);
  //   currUser.balance = Number(currUser.balance) - Number(withdraw);
  //   console.log("currUser balance after: " + currUser.balance);
  //   setWithdraw(0);
  // }

  return (
    <h1>Withdraw Page</h1>
    // <Card
    //   maxWidth="18rem"
    //   header={"Withdraw | " + currUser.name}
    //   status={status}
    //   body={
    //     <>
    //       <h4 className="text-info">Balance: $ {currUser.balance}</h4>
    //       <br />
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="withdraw"
    //         value={withdraw}
    //         onChange={(e) => setWithdraw(e.currentTarget.value)}
    //       />
    //       <br />
    //       <button
    //         disabled={withdraw == 0}
    //         type="submit"
    //         className="btn btn-primary"
    //         onClick={handleWithdraw}
    //       >
    //         Withdraw Now
    //       </button>
    //       <br />
    //     </>
    //   }
    // />
  );
}
