import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || process.env.MONGODB_LOCAL;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected to database.");
} catch(e) {
  console.error(e);
}

let dbName = "harper_bank";
let db = conn.db(dbName);

export default db;