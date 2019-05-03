const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "josh",
  password: "abc123",
  database: "acme"
});

db.connect();

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users"; //enter sql queries here

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => console.log("Server stared"));
