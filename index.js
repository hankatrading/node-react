const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const passport = require("passport");
const key = require("./config/key");

require("dotenv").config();

let app = express();

mongoose.connect(process.env.MONGODB_URI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.COOKIEKEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./model/User");
require("./service/passport");
require("./routes/auth")(app);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
