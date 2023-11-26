import React from 'react'
import backGround from '../Asset/cafeback.png';
import { Image } from 'react-bootstrap'

export const Hero = () => {

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Image src={backGround} alt="cafe" style={{ height: '100%', width: '100%' }} />
      <div style={{ position: 'absolute', right: '30%', left: '25%', top: '30%' }}>
        <span className='text-light d-flex justify-content-center' style={{ fontSize: '5vh' }}>Take-Out & Delivery</span>
        <span className='text-light d-flex justify-content-center' style={{ fontSize: '5vh' }}>Breakfast, Lunch & Brunch</span><br />
        <span className='text-light d-flex justify-content-center'>832 Anzac Parade, Maroubra NSW 2035, Australia</span>
        <div className='d-flex justify-content-between' style={{width: '50%', position: 'absolute', top: '150%', left: '25%'}}>
          
            <div className="d-flex flex-column text-light fw-bold">
              <span style={{ fontSize: '2.5vh'}}>Monday to Firday</span>
              <span style={{ fontSize: '2.5vh'}}>Saturday</span>
              <span style={{ fontSize: '2.5vh'}}>Sunday</span>
            </div>
            <div style={{background: 'white', width: '0.5vh'}}/>
            <div className="d-flex flex-column text-light fw-bold">
              <span style={{ fontSize: '2.5vh'}}>8am - 3pm</span>
              <span style={{ fontSize: '2.5vh'}}>8am - 3pm</span>
              <span style={{ fontSize: '2.5vh'}}>9am - 3pm</span>
            </div>
          

        </div>

      </div>

    </div>
  )
}
