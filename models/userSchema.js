const mongoose = require('mongoose');
require('dotenv').config()
const Jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    token:[{
        token:{
            type:String
        }
    }]
})

userSchema.pre('save',async function(next){
     if(this.isModified('password')){
          this.password=await bcrypt.hash(this.password,12)
          this.cpassword= await bcrypt.hash(this.cpassword,12)
     }
     next()
})

userSchema.methods.generateToken=async function(){
      try {
        const gToken=Jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.token=this.token.concat({token:gToken});
        await this.save()
        return gToken
      } catch (error) {
        console.log(error)
      }
}

// const User=mongoose.model('User',userSchema)
module.exports=mongoose.model('User',userSchema)

