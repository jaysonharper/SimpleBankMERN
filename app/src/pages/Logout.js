import React, { useState } from "react";
import Card from "../components/Card";

export default function Logout(props) {
  const [show, setShow] = useState(true);

  const handleLogout = () => {
    props.setUserEmail("");
    props.setUserBalance(-1);
    props.setUserAdmin(false);
    setShow(false);
  };

  return (
    <Card
      maxWidth="18rem"
      header="Logout"
      body={
        show ? (
          <>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
            <br />
          </>
        ) : (
          <>
            <h5 className="text-success">Successful Logout!</h5>
          </>
        )
      }
    />
  );
}
