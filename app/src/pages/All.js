import React from "react";

export default function AllAccounts() {
  return (
    <h1>All Accounts Page</h1>
    // <Card
    //   header={"All User Data"}
    //   body={
    //     <>
    //       <AllAccountsTable />
    //     </>
    //   }
    // />
  );
}

function AllAccountsTable() {
  // const users = React.useContext(UserContext).users;
  // console.log(users);
  // let userHeaders = [];
  // userHeaders.push(
  //   <tr>
  //     <th>Email</th>
  //     <th>Name</th>
  //     <th>Password</th>
  //     <th>Balance</th>
  //   </tr>
  // );

  // let userData = [];
  // users.map((item, index) => {
  //   const { email, name, password, balance } = item;
  //   userData.push(
  //     <tr key={index}>
  //       <td>{email}</td>
  //       <td>{name}</td>
  //       <td>{password}</td>
  //       <td>${balance}</td>
  //     </tr>
  //   );
  // });

  // return (
  //   <div>
  //     <table className="table">
  //       <tbody>
  //         {userHeaders[0]}
  //         {userData}
  //       </tbody>
  //     </table>
  //   </div>
  // );
}
