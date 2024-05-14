const express = require("express");
const passport = require("passport");
const cors = require("cors");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(cors);

require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackUrl: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

let PORT = process.env.PORT || 5000;

app.listen(PORT);
