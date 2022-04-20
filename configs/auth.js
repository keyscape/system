const localStrategy = require('passport-local'),
        bcrypt = require('bcryptjs')

const User = require('../app/models/User.model')

module.exports = (passport) => {
    passport.use(new localStrategy({usernameField: 'username', passwordField: 'password'}, (username, password, done) => {
        User.findOne({username: username}).then(oneUser => {
            if(!oneUser) return done(null, false)
            
            if(!bcrypt.compareSync(password, oneUser.passwordHash)) return done(null, false)

            return done(null, oneUser)
        })
    }))

    passport.serializeUser((oneUser, done) => {
        done(null, oneUser._id)
    })

    passport.deserializeUser((_id, done) => {
        User.findById(_id).then(oneUser => {
            done(null, oneUser)
        }).catch(err => {
            done(err, null)
        })
    })
}