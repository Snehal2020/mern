import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div>
      <h1 className='text-center'>Sorry page not found</h1>
      <div  className='text-center'>
      <Link to='/' style={{color:'black',textDecoration:'none',fontSize:'24px'}}>Back to home page</Link>
      </div>
    </div>
  )
}

export default Notfound
