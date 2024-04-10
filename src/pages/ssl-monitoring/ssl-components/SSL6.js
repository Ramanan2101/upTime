import React from 'react'
import websiteMonitoring from '../../../assets/website-monitoring.svg'
import cron from '../../../assets/cron-job-monitoring.svg'
import port from '../../../assets/port-monitoring.svg'
import keyword from '../../../assets/keyword-monitoring.svg'
import ping from '../../../assets/ping-monitoring.svg'
import domain from '../../../assets/domain-monitoring.svg'
import statuspage from '../../../assets/status-page.svg'
import subusers from '../../../assets/subusers.svg'


const SSL6 = () => {
  return (
    <div className='ssl6 CJ6'>
        <div className='slide6'>
            <div className="container-6">
                <h2>All you really care about <br /><span>monitored</span> in one place.</h2>
                <div className="cards">
                    <div className="card card0">
                        <a href="">
                            <img src={websiteMonitoring} alt="" />
                            <h3>Website monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="card card1">
                        <a href="">
                            <img src={cron} alt="" />
                            <h3>Cron job monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="card card1">
                        <a href="">
                            <img src={port} alt="" />
                            <h3>Port monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="card card1">
                        <a href="">
                            <img src={keyword} alt="" />
                            <h3>Keyword monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="card card1">
                        <a href="">
                            <img src={ping} alt="" />
                            <h3>Ping monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="card card1">
                        <a href="">
                            <img src={domain} alt="" />
                            <h3>Domain expiration monitoring</h3>
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>
                <hr style={{color:'lightgray'}}/>
                <div className='sec2'>
                    <div className="content cnt2">
                        <h2>Inform your customers about incidents with <span>status pages</span>.</h2>
                        <p>Be transparent. Inform customers of planned outages. Show them that you strive to keep your service 100% online.</p>
                        <div className="ct2">
                            <a href="">Check LIVE demo</a> 
                            <span>or</span>
                            <a href="">Explore Status Pages</a>
                        </div>
                    </div>  
                    <div className="img-sec">
                        <div className="circle cr2"></div>
                        <div className="img-container">
                            <img src={statuspage} alt="monitor" />
                        </div>
                    </div> 
                </div>
                <hr style={{color:'lightgray'}}/>
                <div className='sec3'>
                    <div className="img-sec">
                        <div className="circle cr3"></div>
                        <div className="img-container">
                            <img src={subusers} alt="subusers" />
                        </div> 
                    </div>
                    <div className="content cnt3">
                        <h2>Add your <span>team members</span> to keep them notified.</h2>
                        <p>You can invite all your team members to access your monitors, keep them notified and manage incidents. Choose from three levels of user access: read, write and notify-only.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SSL6