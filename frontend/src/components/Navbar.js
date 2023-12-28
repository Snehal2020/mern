import React,{useEffect,useContext} from 'react'
import 'bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { userContext } from '../App';

function Navbar() {

  const {state,dispatch}=useContext(userContext)
   
  const Rendermenu=()=>{
    if(state){
      return(
        <>
            <li className="nav-item ">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/logout'>Logout</Link>
        </li>
       
        </>
      )
    }
    else{
      return(
        <>
          <li className="nav-item ">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
        </li>
        </>
      )

    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
         <Rendermenu></Rendermenu>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
