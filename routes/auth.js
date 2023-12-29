const express = require('express');
const cookieparser = require("cookie-parser")

require('../db/conn')
const bcrypt = require('bcrypt');

const router = express.Router()   //here instead of app we use router as instanace of express
const User = require('../models/userSchema');
const Authenticate = require('../middleware/authenticate');
router.use(express.json())
router.use(cookieparser())
router.get('/', (req, res) => {
   res.send("I am home page")
})

//----------------------------------Promise------------------------------ */
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body
//     if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
//         res.send("Please fill the complete details")
//     }
//     User.findOne({email:email}).then((userdata)=>{
//         if(userdata){
//             return res.send("User is alraedy exist")
//         }
//         else{
//             var user=new User(req.body)
//             user.save().then(()=>{
//                 res.send("data saved successfully")
//             })

//         }
//     })

// })


//------------------- Async Await --------------------------------
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(402).send("Please fill the complete details")
    }
    try {
        const userdata =await User.findOne({ email: email });
        if (userdata) {
            alert('User existes!!!')
            // return res.status(402).send("User is alraedy exist")
            return
        }
        else if(password!=cpassword){
            return res.status(402).send("enter correct password")
        }
        var user = new User(req.body)
         await user.save();
         res.status(201).send({success:true,message:"data saved successfully"})
    } catch (error) {
         res.status(402).send(error)
    }
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    let token;
    if(!email||!password)
    {
       return res.status(402).send({success:false,message:"enter complete details"})
    }
    try {
        const userdata=await User.findOne({email:email});
        
        if(!userdata){
           return res.status(402).send({success:false,message:"User not found"})
        }
        else{
            const isMathch=await bcrypt.compare(password,userdata.password)
            console.log(isMathch)
            if(!isMathch)
            {
                res.status(402).send({success:false,message:"Invalid user details"})    
            }
            else{
                token =await userdata.generateToken();
                console.log(token)
                res.cookie("Mytoken",token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true,
                })
                res.status(200).send({success:true,message:"login successful"})
            }
        }
    } catch (error) {
        console.log(error)
    }
})


router.get('/about',Authenticate,(req, res) => {
    res.send(req.rootUser)
   })
router.get('/call',(req, res) => {
    res.send("i am snehal")
   })
router.get('/logout',Authenticate,(req, res) => {
    res.clearCookie('Mytoken',{path:'/'})
    res.send(req.rootUser)
   })
router.get('/getdetails',Authenticate,(req, res) => {
    res.send(req.rootUser)
   })

module.exports = router