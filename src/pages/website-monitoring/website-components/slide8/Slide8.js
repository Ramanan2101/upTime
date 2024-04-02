import React from 'react'
import './slide8.css';
import playstore from '../../../../assets/google-playstore-badge.svg'
import appstore from '../../../../assets/appstore-badge.svg'

const Slide8 = () => {
  return (
    <div className='slide8'>
        <div className="slide8-container">
            <h2>Get your <span>FREE account</span> now, <br />50 monitors included!</h2>
            <div className="btn">
                <a href="">Start monitoring in 30 seconds</a>
            </div>
            <p>No credit card required!</p>
            <h3>Available also on:</h3>
            <div className="appStore">
                <a href=""><img src={playstore} alt="" /></a>
                <a href=""><img src={appstore} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Slide8