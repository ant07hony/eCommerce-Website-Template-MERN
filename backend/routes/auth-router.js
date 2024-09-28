const express = require('express')
const router = express.Router()

// IMPORT AUTH CONTROLLER FROM ../CONTROLLERS/AUTH-CONTROLLER
const authCtrl = require('../controllers/auth-controller')

// ROUTES FOR REGISTER, LOGIN, LOGOUT
router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/logout', (req, res, next) => res.send('Logging out'))

module.exports = router