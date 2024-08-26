import mysql from "mysql2";

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "noeun",
  password: "noeun-admin",
  database: "library",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Export the connection for use in other modules
export default connection;
