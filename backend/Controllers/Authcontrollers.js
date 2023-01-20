const Usermodels = require("../Models/Usermodels");
const jwt = require('jsonwebtoken')


const maxage = 3 * 24 * 60 * 60
const createtoken = (id) =>{
    return jwt.sign({id},"secret",{
        expiresIn:maxage
    })
}

const handeleerrors = (err) =>{
   // console.log(err)
    let errors = {name:'',email:'',password:''}
    if(err.message === 'incorect email'){
        errors.email = 'email is not registered'
    }
    else if(err.message === 'incorect password' ){
        errors.password = 'incorect email or password'
    }
    else if(err.code === 11000){
        errors.email = 'email already registered'
    }
    else
    if(err. _message.includes("Users validation failed")){
           Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
           })
    }
    return errors
}


module.exports.register = async (req,res,next)=>{
    try {
        console.log(req.body)
        
        console.log('reached')
        const {name,email,password} = req.body;
        const otp = req.local.otp
        const verified = false
        console.log({name,email,password,otp,verified})
        const user = await Usermodels.create({name,email,password,otp,verified})
        const token = createtoken(user._id)
        res.cookie('jwt',token,{
            withCredentials:true,
            httpOnly:false,
            maxage:maxage * 1000

        });
        res.status(201).json({user:user._id,created:true})
    } catch (error) {
        console.log(error.message)
      const errors =  handeleerrors(error)
      res.json({creted:false,errors:errors})
    }
}
module.exports.login = async(req,res,next)=>{
    try {
        console.log(req.body)
        console.log('reached')
        const {email,password} = req.body;
        const user = await Usermodels.login(email,password)
        const token = createtoken(user._id)
        res.cookie('jwt',token,{
            withCredentials:true,
            httpOnly:false,
            maxage:maxage * 1000

        });
        res.status(200).json({user:user.name,userid:user._id,created:true})
    } catch (error) {
        console.log(error.message)
      const errors =  handeleerrors(error)
      res.json({creted:false,errors:errors})
    }
   
}
module.exports.verifyotp = async(req,res,next)=>{
    const user = await Usermodels.findById(req.body.id)
    if(user.otp === req.body.otp){
        const updateduser = await Usermodels.updateOne({_id:req.body.id},{verified:true})
        console.log(updateduser)
        res.json({verified:true,error:false})
    }
    else{
        console.log('reached elseddddd')
        res.json({verified:false,error:'otp verification failed'})
    }
   
}