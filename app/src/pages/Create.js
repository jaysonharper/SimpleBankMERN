import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";
import { UserContext } from "../App";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  function validate(field, label) {
    let isValid = true;
    if (!field) {
      setStatus("[" + label + "] required.");
      isValid = false;
    } else if (label === "password" && field.length < 8) {
      setStatus("[password] must be 8 or more characters.");
      isValid = false;
    }
    if (!isValid) setTimeout(() => setStatus(""), 5000);
    return isValid;
  }

  const handleCreate = async () => {
    console.log("name: " + name, ", email: " + email, ", pass: " + password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    await fetch(`${baseUrl}/accounts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        balance: 100
      }),
    }).then((resp) => resp.json());
    console.log(user);
    user.accounts = [];
    user.accounts.push({ name, email, password, balance: 100 });
    setShow(false);
  };

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      maxWidth="18rem"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              disabled={!name && !email && !password}
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
            >
              Create Account
            </button>
            <br />
          </>
        ) : (
          <>
            <h5 className="text-success">Success</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
