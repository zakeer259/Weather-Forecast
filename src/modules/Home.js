import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className=' d-flex mt-5 flex-row'>
      <div className='w-75 mt-5'>
        <h1 className='mx-auto ms-5 mt-5'>Provide you a world<br /> wide weather forecast</h1>
        <button className='button green-btn bs d-block mt-5 mx-auto' ><Nav.Link className="text-black" as={NavLink} to="signup">Get Started</Nav.Link></button>
      </div>
      <div className='w-50 mx-auto mt-5 '>
        <h5 className='me-5 mx-auto mt-5'>Come and experience Unmatched Weather Precision. With the increasing frequency of extreme weather, staying informed about your current weather conditions has never been easier</h5>

      </div>
    </div>
  )
}

export default Home