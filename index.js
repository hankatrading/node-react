const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

let PORT = process.env.PORT || 5000;

app.listen(PORT);
