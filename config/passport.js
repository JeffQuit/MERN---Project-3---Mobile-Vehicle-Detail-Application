const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user.js");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
  // Our user will sign in using an email, rather than a "username"
  usernameField: "username",
  passwordField: 'password',
},
  function (username, password, done) {
    User.findOne({ 'username' : username },
      function (err, user) {
        // console.log(`passport user`,user)

      // if there are any errors, return the error before anything else
      if (err)
        return done(err);

      // if no user is found, return the message
      if (!user)
        return done(null, {message: "User not Found"}); // req.flash is the way to set flashdata using connect-flash
      // console.log(` anything doesn't matter`)
      // if the user is found but the password is wrong
      if (!user.verifyPassword(password))
        return done(null, {message: "Invalid Password"}); // create the loginMessage and save it to session as flashdata

      // all is well, return successful user
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Exporting our configured passport
module.exports = passport;