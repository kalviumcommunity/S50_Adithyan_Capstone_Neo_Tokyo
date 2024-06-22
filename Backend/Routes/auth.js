const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();
const GOOGLE_CLIENT_ID = process.env.clientID;
const GOOGLE_CLIENT_SECRET = process.env.clientsecret;
const UserModel = require("../Model/UserModel");

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/callback",
            passReqToCallback: true
        },
        async function(request, accessToken, refreshToken, profile, done) {
            try {
                const existingUser = await UserModel.findOne({ email: profile._json.email });
                if (existingUser) {
                    return done(null, existingUser);
                } else {
                    const user = new UserModel({
                        username: profile._json.name,
                        email: profile._json.email,
                        password: "" 
                    });
                    await user.save(); 
                    return done(null, user); 
                }
            } catch (error) {
                return done(error); 
            }
        }
    )
);

passport.serializeUser(function(user, done) {
    done(null, user.id); 
});

passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
        done(err, user); 
    });
});

module.exports = passport; 
