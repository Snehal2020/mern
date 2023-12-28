import React, { useState } from 'react'
import { Link, json,useNavigate } from 'react-router-dom'
function Register() {
  const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""})
  const navigate = useNavigate();
  let name,value1;
  const handleIp=(e)=>{
    console.log(e)
      name=e.target.name;
      value1=e.target.value;
      setUser({...user,[name]:value1})
  }
  const postData=async(e)=>{
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

    const data=await res1.json()
    console.log(data)
    if(res1.status===402 || !data){
      window.alert("Invalid Registration")
    }
   else{
    window.alert("Registration Succesfull")
    navigate("/login");
   }
  }
  return (
    <div>
      <section>
        <div className="title text-center my-4">Register</div>
        <section className='lsection m-5'>
          <form method='POST'>
            <div className="mb-1">
             
              <input type="text" name="name" className="form-control" autoComplete='off'
              value={user.name} onChange={handleIp}
              placeholder='Enter your name' id="name" />
            </div>
            <div className="mb-1">
              
              <input type="email" name="email" className="form-control " autoComplete='off'
              value={user.email} 
              onChange={handleIp}
              placeholder='Email Address' id="email" />
            </div>
            <div className="mb-1">
              
              <input type="number" name="phone" className="form-control" autoComplete='off'
              value={user.phone} onChange={handleIp}
              placeholder='Phone' id="phone" />
            </div>
            <div className="mb-1">
             
              <input type="text" name="work" className="form-control" autoComplete='off'
              value={user.work} onChange={handleIp}
              placeholder='Enter your Profession' id="work" />
            </div>
            <div className="mb-1">
            
              <input type="password" name="password" className="form-control" autoComplete='off'
              value={user.password} onChange={handleIp}
              placeholder='Password' id="password" />
            </div>
            <div className="mb-3">
             
              <input type="password" name="cpassword" className="form-control" autoComplete='off'
              value={user.cpassword} onChange={handleIp}
              placeholder='Confirm password' id="cpassword" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
          </form>
          <div className="abc">
           <Link to="/login"> click here if already registered</Link>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Register
