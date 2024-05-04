import passport from 'passport';
import local from 'passport-local';
import User from '../models/user.model';

passport.use(new local.Strategy({
  usernameField: 'uName'
},
  (username, password, done) => {
    User.findOne({ uName: username })
      .then((user) => {
        if (!user || !user.checkpasswd(password)) {
          return done(null, false, {
            message: 'Incorrect username or password'
          });
        }
        return done(null, user);
      })
      .catch((err) => {
        return done(null, false, err);
      })
  }
));
