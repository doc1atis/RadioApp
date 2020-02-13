const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
// local strategy starts here
// use the username property of req.body as the usernameField
const localLogin = new LocalStrategy(
  { usernameField: "username" },
  async function(username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false);
      const passwordsMatched = await bcrypt.compare(password, user.password);
      if (passwordsMatched) return done(null, user);
      done(null, false);
    } catch (error) {
      done(error);
    }
  }
);
// jwt strategy starts here
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization-x-token"),
  secretOrKey: process.env.JWT_SECRET
};
const jwtLogin = new JwtStrategy(jwtOptions, async function(payload, done) {
  try {
    const user = await User.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    done(null, false);
  } catch (error) {
    done(error, false);
  }
});
passport.use(jwtLogin);
passport.use(localLogin);
// that's the requiredAuth midlleware that is placed in any route that requires auth.
module.exports = strategy => {
  return passport.authenticate(strategy, { session: false });
};
