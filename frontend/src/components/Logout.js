import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { userContext } from '../App';

function Logout() {
    
  const {state,dispatch}=useContext(userContext)
  
  const navigate=useNavigate()
  useEffect(()=>{
       fetch('/logout',{
       method:"GET",
       headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
       },
       credentials:"include"
      }).then((res)=>{
        dispatch({type:'USER',payload:false})
          navigate('/login')
       }).catch((err)=>{
        console.log(err)
       })
       
  })
  return (
    <div>
      hii
    </div>
  )
}

export default Logout
