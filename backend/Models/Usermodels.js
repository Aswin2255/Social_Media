const mongose = require('mongoose')
const bcrypt = require('bcrypt')
const userschema = new mongose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"password is required"]
    },
    verified:{
        type:Boolean,
        require:false
    },
    otp:{
        type:String,
        require:false
    }
})
userschema.pre('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userschema.statics.login = async function (email,password){
    const user = await this.findOne({email})
    console.log(user)
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user
        }
        else{
        throw Error("incorect password")
        }
    }
    else{
        console.log('reached here')
    throw Error ('incorect email')
    }
}

module.exports = mongose.model("Users",userschema)