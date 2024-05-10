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
                // Check if user already exists in the database
                const existingUser = await UserModel.findOne({ email: profile._json.email });
                if (existingUser) {
                    // If user already exists, return the existing user
                    return done(null, existingUser);
                } else {
                    // If user doesn't exist, create a new user
                    const user = new UserModel({
                        username: profile._json.name,
                        email: profile._json.email,
                        password: "" 
                    });
                    await user.save(); // Save the new user to the database
                    return done(null, user); // Return the newly created user
                }
            } catch (error) {
                return done(error); // Return error if any
            }
        }
    )
);

passport.serializeUser(function(user, done) {
    done(null, user.id); // Serialize user ID into session
});

passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
        done(err, user); // Deserialize user object from user ID
    });
});

module.exports = passport; // Export Passport instance for use in other modules
