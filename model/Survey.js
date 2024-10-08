const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recipient = require("./Recipient");

let surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("Survey", surveySchema);
