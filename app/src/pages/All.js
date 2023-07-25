import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

export default function AllAccounts(props) {
  const [accounts, setAccounts] = useState([]);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const loadAccounts = async () => {
      let results = await fetch(`${baseUrl}/accounts`).then((resp) =>
        resp.json()
      );
      setAccounts(results);
    };

    loadAccounts();
  }, []);

  const handleDeleteAll = async () => {
    if (props.userAdmin) {
      await fetch(`${baseUrl}/accounts/delete`, {
        method: "DELETE",
      });
      // console.log(result);
      props.setUserEmail("");
      props.setUserBalance(-1);
      props.setUserAdmin(false);
      setAccounts([]);
    }
    else {
      handleError();
    }
  };

  function handleError() {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }

  return (
    <Card
      header={"All Accounts"}
      body={
        <>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
            <label className={showError ? "text-danger" : "text-danger invisible"}>&nbsp;&nbsp;Access denied.</label>
            <table className="table">
              <tbody>
                <tr>
                  <th>Admin</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Balance</th>
                </tr>
                {accounts.map((account, index) => {
                  return <AccountRow {...account} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </>
      }
    />
  );
}

function AccountRow(props) {
  const { admin, email, name, password, balance, index } = props;
  return (
    <tr key={index}>
      <td>{String(admin)}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{password}</td>
      <td>${balance}</td>
    </tr>
  );
}
