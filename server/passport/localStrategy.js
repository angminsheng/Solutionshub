const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');
var GitHubStrategy = require('passport-github').Strategy;
 
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));




// passport.use(new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password'
// },
//   (username, password, done) => {
//     User.findOne({ username })
//       .then(foundUser => {
//         if (!foundUser) {
//           done(null, false, { message: 'Incorrect username' });
//           return;
//         }

//         if (!bcrypt.compareSync(password, foundUser.password)) {
//           done(null, false, { message: 'Incorrect password' });
//           return;
//         }

//         done(null, foundUser);
//       })
//       .catch(err => done(err));
//   }
// ));
