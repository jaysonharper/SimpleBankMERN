import React, { useState } from "react";
import Card from "../components/Card";
import { baseUrl } from "../config";

export default function Logout(props) {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogout = () => {
    props.setUserEmail("");
    props.setUserBalance(-1);
    props.setUserAdmin(false);
    props.setUserName("");
    setMessage("Successful Logout!");
    setShow(false);
  };

  const handleUpdate = async () => {
    // console.log(newName, newPassword);
    if (newName !== "" && newPassword !== "") {
    //   console.log("update");
      await fetch(
        `${baseUrl}/accounts/update/${props.userEmail}/${newName}/${newPassword}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      props.setUserName(newName);
    } else if (newName !== "") {
    //   console.log("updateName");
      await fetch(
        `${baseUrl}/accounts/updateName/${props.userEmail}/${newName}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      props.setUserName(newName);
    } else {
      //   console.log("updatePassword");
      await fetch(
        `${baseUrl}/accounts/updatePassword/${props.userEmail}/${newPassword}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
    setMessage("Successful Update!");
    setShow(false);
  };

  return (
    <Card
      maxWidth="18rem"
      header="Profile"
      body={
        show ? (
          <>
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder={props.userName}
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.currentTarget.value)}
            />
            <br />
            <button
              disabled={!newName && !newPassword}
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              type="submit"
              className="btn btn-primary float-end"
              onClick={handleLogout}
            >
              Logout
            </button>
            <br />
          </>
        ) : (
          <>
            <h5 className="text-success">{message}</h5>
          </>
        )
      }
    />
  );
}
