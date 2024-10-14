const bcrypt = require('bcrypt')
const { createUserToken } = require('../middleware/auth')
const { User } = require('../models')


function testMessage() {
    console.log("Peek A Boo")
    res.status(200)
};

async function index(req, res, next) {
    try {

        const data = await User.find({})

        if (data[0]) {

            res.send(data)

        } else {

            res.send("There are no users!")

        }

    } catch (error) {

        console.log(error)
        res.status(400).json({ error: error.message })

    }
};

async function register(req, res, next) {
    try {

        const { username, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = await User.create({ username, password: passwordHash })
        await newUser.save()

        if (newUser) {

            const authenticatedUser = createUserToken(req, newUser)
            console.log( ` user: ${newUser}, token: ${token} ` )
            res.status(200).json({

                user: newUser,
                token: authenticatedUser

            })
        } else {

            throw new Error('Something went wrong with authentication')

        }

    } catch (error) {

        console.log(error)
        res.status(400).json({ error: error.message })

    }
}

async function login(req, res, next) {
    try {

        const { username, password } = req.body
        const foundUser = await User.findOne({ username: username })

        if (foundUser) {

            const token = createUserToken(req, foundUser)
            console.log( ` user: ${foundUser}, token: ${token} ` )
            res.status(200).json({

                user: foundUser,
                token: token

            })

        } else {
            throw new Error('Login Failed. Try Again!')
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    testMessage,
    index,
    register,
    login
}