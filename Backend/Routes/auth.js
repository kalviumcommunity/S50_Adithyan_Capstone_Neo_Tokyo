const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();
const GOOGLE_CLIENT_ID = process.env.clientID;
const GOOGLE_CLIENT_SECRET = process.env.clientsecret;

passport.use(
    new GoogleStrategy(
        {
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    })
//   }
);

passport.serializeUser(function(user,done){
    done(null,user);
})

passport.deserializeUser(function(user,done){
    done(null,user);
})


    