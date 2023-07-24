import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <Card
      txtcolor="black"
      header="Harper Bank"
      title="Welcome"
      text="Create an Account or Log In to get started."
      body={<img src={require('../bank.png')} className="img-fluid" alt="Bank" />}
    />
  );
}
