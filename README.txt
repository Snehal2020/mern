****************** Complete Description Of this Project *************************

1. Npm init
 ## note => npm i nodemon   to run => npx nodemon app.js
2. Create file app.js
3. __app.js__  =>  require express and app
                   do routing i.e  app.get('/',(req,res)=>{      })
--------------------------------------------------------
4. main two folders  db,model  for connection and schemas
5. while trying to get req.body  first app.use(express.json())

-------------------------------------------------------
6.   Router
     app.use(require(location of auth))
     then inside auth create express instance router and do routing

     -----------------------------------------------------
7.   Registration
     import userschema in auth as User
     use findOne to check user already exist or not
     post a req
     const user=new User(req.body)
     user.save

     inside postman post a req in body json format 

  -----------------------------------------------------------------
8.   Login
     post a req
     check whethe user exist or not
     if exist then check password matching or not

------------------------------------------------------------------------
9. Password encryption
   install bcrypt package
   our password is stored in the database in encoded form
   so before storing restered data we do hashing of password and then we will store the details by save method
   we use pre(save,()) middleware 
----------------------------------------------------------------------------
 10.   password decryption for login
    while login we have to compare the password with registered password for that we should decrypt the
   hashed password by using  bcrypt.compare()

   ------------------------------------------------------------------------------
11.  JWT (jasonwebtoken)
    install jsonwebtoken
    ###  Note  ### :- this keyword not work with fatarrow function so we use normal function

    inside userscema.js create a functin say generatetoken => userschema.methods.generatetoken=function(){}
    inside function body let gtoken=jwt.sign({_id:this._id},secretkey)    provide secretkey to generate token store it in gtoken
                            this.token=this.token.concat({token:gtoken})  append the token in token list of register/usershcema
                            this.save()                                   save in userschema doc
                            return gtoken                                 return token

    in login post rout before login successfull call the above function save the token in a variable
    then    res.cookie("Mytoken",token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true,
                })

--------------------------------------------------------------------------------------------

12.    Now to protect about rout we use middleware
       router.get('/about',authenticate,(res,req))

       create authenticate function

       onst Authenticate=async (req,res,next)=>{
    try {
      //read the token from cookies   
      //verify token with SECRET_KEY and store userdetails in a var
        const rootUser=await User.findOne({_id:verifyToken._id})
        if(!rootUser){
            throw new Error("User not found")
        }
        req.rootUser=rootUser;
        req.token=token;
        req.userId=rootUser._id;

        next()
    } catch (error) {}
}
-----------------------------------------------------------------------------------------------
13.  *********************  Client Side   ******************************
----------------------------------------------------------------------------------
   create react app
   create components
   in app.js-use routes  ||  index-use browser router  ||  navbar-use Link
---------------------------------------------------------------------------------------
14. __________________Registration __________________
   create form
   create  a useState for user and provide "" value to all fields 
   create two 
   1) function handleIN -Onchange
      setUser({...user,[name]:value})    target the event store in name and value variable
   2) handleOP-onPost
        e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user;
    const res1 = await fetch('/register',{
      method:'POST',
      headers:{
        'content-type':'application/json '
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })
   // fetch the api rout  with the attributes-method,headers,body
    const data=await res1.json()
    if(res1.status===402 || !data){
      window.alert("Invalid Registration")
   else  navigate to login

  ___________________- Login ____________________
  same as Registration but only for email and password