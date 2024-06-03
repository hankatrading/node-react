const express = require("express");
const cors = require("cors");

require("dotenv").config();

let app = express();
app.use(cors);

require("./service/passport")(process.env);
require("./routes/auth")(app);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
