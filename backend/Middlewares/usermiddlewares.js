const jwt = require("jsonwebtoken");
const Usermodels = require("../Models/Usermodels");
const otpgenerator = require('otp-generator')

module.exports.Verifyuser = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,"secret",async (err,decodedToken)=>{
            if(err){
                res.json({status:false})
                next()
            }
            else{
                const user = await Usermodels.findById(decodedToken.id)
                if(user.verified){
                    res.json({status:true,user:user.name})
                    next()
                }
                else{
                    res.json({status:false})
                    next()
                }
            }

            

        })

    }
    else{
        res.json({status:false})
        next();

    }
}

module.exports.generateotp = async(req,res,next)=>{
    console.log(req.local)
    console.log('reached verify')
    let email = await Usermodels.find({email:req.body.email})
    console.log(email)
    if(email.length){
        console.log('user presente')
        
        next()
    }
    else{
        console.log('usernot present')
        const otp = otpgenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        req.local.otp = otp
        next()
        
    }
}


module.exports.localvariable = (req,res,next)=>{
    req.local = {
        otp:null
    }
    next()
}