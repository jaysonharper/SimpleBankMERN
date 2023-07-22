import express from "express";
import db from "../db/conn.mjs";

const accounts = express.Router();

// Get all accounts (use http://localhost:5051/accounts to test)
accounts.get("/", async (req, res) => {
  //   let collection = await db.collection("accounts");
  //   let results = await collection.find({}).limit(50).toArray();

  //   res.send(results).status(200);
  res.send("hello world.").status(200);
});

export default accounts;
