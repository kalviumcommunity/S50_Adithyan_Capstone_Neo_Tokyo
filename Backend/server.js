const express = require("express");
require('dotenv').config();
const port = process.env.PORT ;
const connectDb = require("./config/connect"); 
const app = express();
const userrouter = require("./Routes/userRoute");
const blogrouter = require("./Routes/blogRoute");
const cors = require('cors');
const passport = require("passport");
const session = require("express-session"); 

app.use(express.json());

const sessionSecret = process.env.SESSION_SECRET;
app.use(session({ secret: sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }
))
const MONGO = process.env.MONGO_URI;

connectDb(MONGO);

require("./Routes/auth");


app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
});
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:5173/Landing',
        failureRedirect: 'http://localhost:5173/Signup'
}));

app.get('/auth/google/success', (req, res) => {
  res.send('<p>success</p>')
})
app.get('/auth/google/faliure', (req, res) => {
  res.send('<p>failure</p>')
})


app.use("/users", userrouter);
app.use("/blog", blogrouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);  
});

module.exports = app;
