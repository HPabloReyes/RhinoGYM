import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export default async function dbConnect() {
  if (conn.isConnected) return;

  const DB_URI = process.env.DB_URI;
  const db = await connect(DB_URI);
  conn.isConnected = db.connections[0].readyState;

  console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("Atlas succesful conection");
});

connection.on("error", (err) => {
  console.log(err);
});
