import React, { useEffect ,useState} from 'react'
import {useNavigate} from 'react-router-dom';

function Contact() {

    const [userd,setUserd]=useState({});
    const navigate=useNavigate()

    const callContact=async ()=>{
     
      try {
        const res =  await fetch('/getdetails',{
          method:"GET",
          headers:{
            // Accept:"application/json",
            "Content-Type":"application/json"
          }
        })
        if(res.status===200){
          console.log("helllllllllllllo")
          const data=await res.json()
          setUserd(data);
          console.log(data)
        }
        console.log("hello")
       
      
      } catch (error) {
        console.log(error)
        navigate('/login')
      }
    }
    useEffect(()=>{
      
       callContact();
    },[])

  return (
    <div>
      Contact
      <br /><h2>{userd.email}</h2>
    </div>
  )
}

export default Contact
