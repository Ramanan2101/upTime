import React from 'react'
import './setUp.css';
import webMonVid from '../../../../assets/website-monitoring.mp4'

const SetUp = () => {
  return (
    <div className='setup'>
        <h2>Set up website monitoring <span>in seconds</span>.</h2>
        <div className='vid'>
            <video src={webMonVid} autoPlay loop></video>
        </div>
        <p>Be the first who knows that your website is down. Reliable monitoring warns you before any significant troubles and saves you money.</p>
        <div className="btn">
            <a href="">Start monitoring in 30 seconds</a>
        </div>
    </div>
  )
}

export default SetUp