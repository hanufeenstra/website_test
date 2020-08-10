const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const fs = require('fs');

const ujs = JSON.parse(fs.readFileSync('.pass.json', 'utf8'));

function initialize(passport, getUserByUsername, getUserByUserId){
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username);
        if (user == null){
            return done(null, false, {message:'Username does not exist!'});
        };

        try {
            if (await bcrypt.compareSync(password, ujs.password, {message: 'Password incorrect!'})){
                return done(null, user);
            }else{
                return done(null, false);
            };
        } catch(e) {
            return done(e);
        };
    };
    passport.use(new LocalStrat({usernameField: 'username'}, authenticateUser));
    passport.serializeUser(function(user, done) {done(null, ujs.id)});
    passport.deserializeUser((id, done) => {done(null, getUserByUserId(ujs.id))});
};

module.exports = initialize;