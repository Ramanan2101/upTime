import React from 'react'
import './website.css';

const Website = () => {
  return (
    <div className='website'>
        <div className="container">
            <div className="left-content">
                <h1>Downtime happen. Get notified with <span>website monitoring</span>.</h1>
                <p>Don't be last one to notice that your website is down. Try UptimeRobot - the world's leading website monitoring service!</p>
                <div className="btn">
                    <a href="">Start monitoring for FREE</a>
                </div>
            </div>
            <div className="right-content">
                <div className="circle"></div>
            </div>
        </div>
    </div>
  )
}

export default Website