import express from "express";
import db from "../db/conn.mjs";

const accounts = express.Router();

// Get all accounts (use http://localhost:5051/accounts to test)
accounts.get("/", async (req, res) => {
  let collection = db.collection("accounts");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

// Create new account
accounts.post("/", async (req, res) => {
  let collection = db.collection("accounts");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default accounts;
