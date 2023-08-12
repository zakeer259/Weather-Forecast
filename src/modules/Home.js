import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className=' d-flex mt-5 flex-row'>
      <div className='w-75 mt-5'>
        <h1 className='mx-auto ms-5 mt-5'>Provide you a world<br /> wide weather forecast</h1>
        <button className='button green-btn bs d-block mt-5 mx-auto' ><Nav.Link className="text-light" as={NavLink} to="signup">Get Started</Nav.Link></button>
      </div>
      <div className='w-50 mx-auto mt-5 '>
        <h5 className='me-5 mx-auto mt-5'>The World's Most Accurate Forecaster.With extreme Weather on the rise.It's so easy to recieve the weather conditions in your current location</h5>

      </div>
    </div>
  )
}

export default Home