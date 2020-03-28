const express = require("express");
const graphQLHttp = require("express-graphql");
const cors = require("cors");
const schema = require("./data/schema");
const db = require("./config/db");
// INIT APP
const app = express();

// Cross Orgin requests
app.use(cors());

// End Point
app.use(
  "/graphql",
  graphQLHttp({
    graphiql: true,
    schema
  })
);

// Testing the Database Connection
db.authenticate()
  .then(() => {
    console.log("Connection to MySQL");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Sync Models with Database
db.sync();

// Listen to PORT
const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`App is Listening to PORT ${port}`));
