import React, { useEffect ,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function About() {
  const [userd,setUserd]=useState({});
  const navigate=useNavigate()
  const callAbout=async ()=>{
   
    try {
      const res =  await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data=await res.json()
      setUserd(data);
      console.log("hi")
      console.log(data)
      if(!res.status===200){
        throw new Error(res.error)
      }
    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }
  useEffect(()=>{
    
     callAbout();
  },[])
  return (
    <div>
      <form method="GET">
           <h1 className='text-center'>This is about page</h1>
           <h1> {userd.name}</h1>
      </form>
    </div>
  )
}

export default About
