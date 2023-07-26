import express from "express";
import db from "../db/conn.mjs";

const accounts = express.Router();

// Get all accounts ( http://localhost:5051/accounts GET)
accounts.get("/", async (req, res) => {
  let collection = db.collection("accounts");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

// Login ( http://localhost:5051/accounts/Login/{email}/{password} GET)
accounts.get("/login/:email/:password", async (req, res) => {
  const query = { email: req.params.email };
  let collection = db.collection("accounts");
  let result = await collection.findOne(query);

  if (!result) res.send({ err: "User Not Found" }).status(404);
  else if (result.password !== req.params.password)
    res.send({ err: "Wrong Password" }).status(401);
  else res.send(result).status(200);
});

// Create new account ( http://localhost:5051/accounts POST)
accounts.post("/", async (req, res) => {
  let collection = db.collection("accounts");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// Deposit to balance ( http://localhost:5051/accounts/deposit/{email}/{amount} PATCH)
accounts.patch("/deposit/:email/:amount", async (req, res) => {
  const query = { email: req.params.email };
  const amount = Number(req.params.amount);
  const updates = {
    $inc: { balance: amount },
  };

  let collection = db.collection("accounts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Withdraw from balance ( http://localhost:5051/accounts/withdraw/{email}/{amount} PATCH)
accounts.patch("/withdraw/:email/:amount", async (req, res) => {
  const query = { email: req.params.email };
  const amount = Number(req.params.amount);
  const updates = {
    $inc: { balance: -amount },
  };

  let collection = db.collection("accounts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Update account name && password ( http://localhost:5051/accounts/update/{email}/{name}/{password} PATCH)
accounts.patch("/update/:email/:name/:password", async (req, res) => {
  // console.log("update both");
  const query = { email: req.params.email };
  const updates = {
    $set: { name: req.params.name, password: req.params.password },
  };

  let collection = db.collection("accounts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Update account name ( http://localhost:5051/accounts/updateName/{email}/{name} PATCH)
accounts.patch("/updateName/:email/:name", async (req, res) => {
  // console.log("update name");
  const query = { email: req.params.email };
  const updates = {
    $set: { name: req.params.name },
  };

  let collection = db.collection("accounts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Update account password ( http://localhost:5051/accounts/updatePassword/{email}/{password} PATCH)
accounts.patch("/updatePassword/:email/:password", async (req, res) => {
  // console.log("update password");
  const query = { email: req.params.email };
  const updates = {
    $set: { password: req.params.password },
  };

  let collection = db.collection("accounts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete All Accounts ( http://localhost:5051/accounts/delete DELETE)
accounts.delete("/delete", async (req, res) => {
  let collection = db.collection("accounts");
  let result = await collection.deleteMany({});

  res.send(result).status(200);
});

// Delete account ( http://localhost:5051/accounts/delete/{email} DELETE)
accounts.delete("/delete/:email", async (req, res) => {
  const query = { email: req.params.email };

  let collection = db.collection("accounts");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default accounts;
