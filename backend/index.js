const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// make an API for default localhost
const app = express();
app.use(cors()); // error can be generated if any other DOM/ from diff url is used here hence use cors()

const PORT = process.env.PORT || 8080;
// during deployment, 8080 port number is explicitly mentioned so it is recognised

app.get("/", (req, res) => {
  //pass a callby fn which is imp for request/response
  res.send("taste-from-home server is running");
});

app.listen(PORT, () =>
  // pass port number and callable fn
  console.log("taste-from-home server is running at port: " + PORT)
);
