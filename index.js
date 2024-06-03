const express = require("express");

require("dotenv").config();

let app = express();

require("./service/passport");
require("./routes/auth")(app);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
