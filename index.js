const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

let app = express();

mongoose.connect(process.env.MONGODB_URI);

require("./model/User");
require("./service/passport");
require("./routes/auth")(app);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
