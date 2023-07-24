import db from "./conn.mjs";

// create user account
export default function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("accounts");
    const doc = { name, email, password, balance: 0 };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}
