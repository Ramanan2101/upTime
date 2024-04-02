import React from 'react'
import './slide7.css';
import Carousel from 'react-bootstrap/Carousel';
import medal from '../../../../assets/medal.svg'


const Slide7 = () => {
  return (
    <div className='slide7'>
      <div className="slide7-container">
        <div className="img-left">
          {/* <img src={medal} alt="" /> */}
        </div>
        <Carousel controls={false} interval={null}>
          <Carousel.Item>
            <div className="item1">
            <div className="slider">
              <h3>It's the most <span>simple and easy monitoring app</span> I know and it's made my daily life much easier.</h3>
              <a href="">
                <p style={{color:"#3db671"}}>@levelsio, maker of NomadList.com, RemoteOK.io and others</p>
              </a>
            </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider">
              <h3>I use UptimeRobot to <span>get push notifications whenever my website goes DOWN</span> . It's really easy and quick to set up and requires no extra changes to your website</h3>
              <a href="">
                <p style={{color:"#3db671"}}> @marckohlbrugge, maker of BetaList.com, StartUp.jobs and others</p>
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider">
              <h3>It's the most <span style={{color:"green"}}>simple and easy monitoring app</span> I know and it's made my daily life much easier.</h3>
              <a href="">
                <p style={{color:"#3db671"}}>@levelsio, maker of NomadList.com, RemoteOK.io and others</p>
              </a>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="img-right">
          {/* <img src={medal} alt="" /> */}
        </div>
      </div>
      
    </div>
  )
}

export default Slide7