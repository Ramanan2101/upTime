import React from 'react'
import webMonVid from '../../../assets/website-monitoring.mp4'


const SSL5 = () => {
  return (
    <div className='ssl5 CJ5'>
      <div className='setup'>
        <h2>Set up SSL monitoring <span>in seconds</span>.</h2>
        <div className='vid'>
            <video src={webMonVid} autoPlay loop></video>
        </div>
        <p>Reliable monitoring notifies you before any significant damage is done, saving your reputation and money.</p>
        <div className="btn">
            <a href="">Start monitoring in 30 seconds</a>
        </div>
      </div>
    </div>
  )
}

export default SSL5