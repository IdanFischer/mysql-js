
import mysql from "mysql2"; // import library of mysql tools
import { dbConnection } from "./secrets.js";

const db = mysql.createConnection(dbConnection)

console.log('we are connected...')


db.query('UPDATE users SET first_name = "Idan" WHERE first_name = "Idan"', (err) => {
if (err) console.log("UPDATE ERROR ->", err);
else console.log("UPDATE DONE!")
})


db.query("SELECT * FROM users", (err, results) => {
    if (err) console.log("ERROR ->", err);
    console.table(results);
})

db.end()
