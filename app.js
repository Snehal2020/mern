const express = require('express'); //to use express framework
const app = express()               // create instance of express for routing
const cors=require('cors')
app.use(cors())
// "proxy": "http://localhost:5000",
const router = express.Router()
require('dotenv').config()          //for .env access
require('./db/conn')                //for mongo connection
const dbs = require('./models/userSchema')   //to import userSchema
app.use(express.json())             // to access req.body in json format
const cookieparser = require("cookie-parser")
app.use(cookieparser())
app.use(require('./routes/auth'))   //link a router file auth.js

//hero
if(process.env.NODE_ENV==="production"){
  app.use(express.static("frontend/build"))
}

const port=process.env.PORT||5000
app.listen(5000, () => {
  console.log('Server running on the port.. '+port);
});