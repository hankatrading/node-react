const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
require("./model/User");
require("./service/passport");

let app = express();

require("./service/passport");
require("./routes/auth")(app);

let mongoseURL = "mongodb+srv://cengiztuerkoglu:olda@8009VM!@freecluster.35drwct.mongodb.net/?retryWrites=true&w=majority&appName=FreeCluster";
mongoose.connect(mongoseURL);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
