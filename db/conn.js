require('dotenv').config()
const mongoose = require('mongoose');
const db=process.env.DATABASE
try {
  mongoose.connect(db,{ useNewUrlParser: true }).then(()=>{
    console.log('connected successfully')
  })
} catch (error) {
  console.log(error)
}