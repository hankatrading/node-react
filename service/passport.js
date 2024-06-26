const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const key = require("../config/key");

let User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: key.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: key.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: key.GOOGLE_OAUTH_CALLBACK_URL,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      }

      let user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
