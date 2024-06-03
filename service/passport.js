const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = (env) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: env.GOOGLE_OAUTH_CLIENT_ID,
                clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
                callbackUrl: env.GOOGLE_OAUTH_CALLBACK_URL,
            },
            (accessToken, refreshToken, profile, done) => {
                console.log("Access Token: ", accessToken);
                console.log("Refresh Token: ", refreshToken);
                console.log("Profile: ", profile);
            }
        )
    );
};