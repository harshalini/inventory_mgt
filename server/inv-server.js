const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

try {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const authrequests = require("./https/auth")

  app.use('/authrequest', authrequests);

  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
} catch (error) {
  console.error(error);
}
