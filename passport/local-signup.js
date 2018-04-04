const db = require("../models");
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        bizName: req.body.bizName.trim(),
        bizCategory: req.body.bizCategory.trim(),
        coType: req.body.coType.trim()
    };
    // db.User
    //   .create(userData)
    //   .then(dbModel => done(null))
    //   .catch(err => done(err));

    const newUser = new db.User(userData);
    newUser.save((err) => {
        if (err) { return done(err); }

        return done(null);
    });
});