import React,{useContext, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { userContext } from '../App';

function Login() {

  const {state,dispatch}=useContext(userContext)

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const loginUser=async(e)=>{
    e.preventDefault();

    const res = await fetch('https://snehalmern.onrender.com/login',{
      method:'POST',
      headers:{
        'content-type':'application/json '
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data=await res.json()
    if(res.status===402 || !data){
      window.alert("Invalid user")
    }
   else{
    window.alert("Login Succesfull")
    dispatch({type:'USER',payload:true})
    navigate("/");
   }
  }

  return (
    <div>
      <section className="vh-100" style={{backgroundcolor: '#9A616D'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderradius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderradius: '1rem 0 0 1rem'}}/>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form method='POST'>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterspacing: '1px'}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value) } } id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" onClick={loginUser} type="button">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/register"
                      style={{color: '#393f81'}}>Register__here</Link></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
