import React from 'react';
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <h1 className='pb-3 mt-5'>About</h1>
      <div className='container pl-3 pr-3'>
        <p>Weather apps provide us with one of the most basic but essential tasks, giving us a forecast to plan out our days and weeks. Depending on which weather app you choose to download, you may also get additional information like monthly forecasts, humidity levels and precipitation totals.</p>
        
      </div>
      <div className="container ">
        <div className="row mb-4">
          <h1 > Our team</h1>
            
          
        </div>

        <div className="row text-center">
        <div className="col-xl-3 col-sm-6 mb-5">
            <div className="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 className="mb-0">Ch. Lokesh</h5><span className="small text-uppercase text-muted">Team Member</span>
             
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 className="mb-0">T. Poorna</h5>
              <span className="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 className="mb-0">MD. Faizan</h5><span className="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 className="mb-0">M. Sai</h5><span className="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default AboutUs