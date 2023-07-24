import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

export default function AllAccounts() {
  let [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const loadAccounts = async () => {
      let results = await fetch(`${baseUrl}/accounts`).then((resp) =>
        resp.json()
      );
      setAccounts(results);
    };

    loadAccounts();
  }, []);

  return (
    <Card
      header={"All Accounts"}
      body={
        <>
          <div>
            <table className="table">
              <tbody>
                <tr>
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
  const { email, name, password, balance, index } = props;
  return (
    <tr key={index}>
      <td>{email}</td>
      <td>{name}</td>
      <td>{password}</td>
      <td>${balance}</td>
    </tr>
  );
}

