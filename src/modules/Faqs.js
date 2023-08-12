import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./Faqs.css"
import {Link} from "react-router-dom"

function Faqs() {
  return (
    <div>
      <div className='text-center text-light mt-5 mb-5'>
        <h3><span>Frequently </span> Asked Questions</h3>
        <p className='mt-2 mb-5'>Our Weather App is one of the Top Forecasting website</p>
      </div>
      <Accordion className='mx-auto mt-5 w-50'>
        <Accordion.Item eventKey="0" className='xyz p-1 mt-5 mb-4'>
          <Accordion.Header>Is this website show correct weather information</Accordion.Header>
          <Accordion.Body>
            Yes sir/madam, we fetch the weather from openweathermap and it is one of the finest weather forecasting site. so, the weather reports we show is very accurate.Thank you!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='xyz p-1 mb-4'>
          <Accordion.Header>Can I see Weather forecast of my current location? </Accordion.Header>
          <Accordion.Body>
            Yes sir/madam, You can see your current location weather just by allowing gps. so that we can get you the weather
            or You can search for any city
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2" className='xyz p-1 mb-4'>
          <Accordion.Header>I dont't have inbuilt GPS.Can I see the current weather</Accordion.Header>
          <Accordion.Body>
            No sir/madam, You cannot see the weather forecast of  your location until you have GPS. But, you can search the city of your current Location Then you can see
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className='xyz p-1 mb-4'>
          <Accordion.Header>Will You give Future Forecasting?</Accordion.Header>
          <Accordion.Body>
            Yes sir/madam, But it'll take sometime. But once finish the update we will notify you and you can access future forecasting of any location.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h3 className='abcx'>Can't find your answers? <Link to="/contactus">Contact us</Link></h3>
    </div>
  )
}

export default Faqs