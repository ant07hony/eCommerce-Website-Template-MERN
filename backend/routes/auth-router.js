const express = require('express')
const router = express.Router()

// IMPORT AUTH CONTROLLER FROM ../CONTROLLERS/AUTH-CONTROLLER
const authCtrl = require('../controllers/auth-controller')

// ROUTE TO REGISTER A NEW USER
router.post('/register', authCtrl.register)

// ROUTE FOR EXISTING USER TO LOGIN
router.post('/login', authCtrl.login)

// ROUTE TO LOGOUT CURRENT USER
router.get('/logout', (req, res, next) => res.send('Logging out'))

// THIS IS A TEST ROUTE TO TEST SYNTAX
// router.get('/test', (req, res, next) => res.send('This is a test message!'))
router.get('/test', authCtrl.testMessage)

// ROUTE TO SEE ALL SAVED USERS
router.get('/', authCtrl.index)

module.exports = router