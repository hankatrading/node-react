const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const passport = require("passport");
const key = require("./config/key");
const bodyParser = require("body-parser");

let app = express();

mongoose.connect(key.MONGODB_URI);

app.use(bodyParser.json());
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
require("./routes/auth-routes")(app);
require("./routes/billing-routes")(app);
require("./routes/survey-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  let path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

let PORT = key.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
