const validator = require('validator')
const User = require('../models/User')

module.exports = {
    getSignup: (req, res) => {
        console.log('User logged in?', !!req.user, req.user)
        res.render('signup.ejs')
    },
    postSignup: (req, res) => {
        console.log(req.body)
        const validationErrors = []
        if (validator.isEmpty(req.body.firstName))
            validationErrors.push({msg: "Please enter a first name."})
        if (!validator.isEmail(req.body.email))
            validationErrors.push({msg: "Please enter a valid email address."})
        if (!validator.isLength(req.body.password, {min: 8}))
            validationErrors.push({msg: "Password must be at least 8 characters long."})
        if (req.body.password !== req.body.confirmPassword) {
            validationErrors.push({msg: "Passwords do not match."})
        }
        // console.log(validationErrors)
        if (validationErrors.length) {
            req.flash("errors", validationErrors)
            return res.redirect("/signup")
        }

        req.body.email = validator.normalizeEmail(req.body.email, {
            gmail_remove_dots: false
        })

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        

        User.findOne({ email: req.body.email}, (err, existingUser) => {
            if (err)
                return next(err)
            if (existingUser) {
                req.flash('errors', {
                    msg: 'Account with that email address already exists.'
                })
                return res.redirect('/signup')
            }
            user.save((err) => {
                if (err)
                    return next(err)
                req.logIn(user, (err) => {
                    if (err)
                        return next(err)
                    res.redirect('/') // Fix redirect to /profile
                })
            })
        })
    },
    logout: (req, res) => {
        req.logout(() => {
            console.log('User has logged out.')
        })
        req.session.destroy((err) => {
            if (err)
                console.log('Error: Failed to destroy the session during logout.', err)
            req.user = null
            res.redirect('/')
        })
    }
}