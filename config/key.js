if (process.env.NOTE_ENV === "production") {
  module.exports = require("./prod");
} else {
  if (require.resolve("./dev")) {
    module.exports = require("./dev");
  }
}
