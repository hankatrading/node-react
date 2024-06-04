const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
    googleId: String
});

mongoose.model("User", userSchema);