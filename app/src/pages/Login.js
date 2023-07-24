import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";
import { UserContext } from "../App";

export default function Login() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  const handleLogin = async () => {
    let result = await fetch(`${baseUrl}/accounts/Login/${email}/${password}`).then(
      (resp) => resp.json()
    );
    user.accounts = [];
    user.accounts.push(result);
    // console.log(user);
    setShow(false);
  };

  return (
    <Card
      maxWidth="18rem"
      header="Login"
      body={
        show ? (
          <>
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
              disabled={!email && !password}
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
            <br />
          </>
        ) : (
          <>
            <h5 className="text-success">Successful Login!</h5>
          </>
        )
      }
    />
  );
}
