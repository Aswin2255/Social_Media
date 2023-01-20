const { register, login, verifyotp,  } = require('../Controllers/Authcontrollers')
const { Verifyuser, localvariable, generateotp } = require('../Middlewares/usermiddlewares')

const router = require('express').Router()
router.post('/',Verifyuser)
router.post('/signup',localvariable,generateotp,register)
router.post('/login',login)
router.post('/verifyotp',verifyotp)
//router.post('/generateotp')

module.exports = router