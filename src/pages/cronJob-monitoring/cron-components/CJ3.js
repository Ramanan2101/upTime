import React from 'react'
import './cj3.css';
import monitor from '../../../assets/monitor-cronjob-completions.svg'
import monitorIntranet from '../../../assets/monitor-intranet-devices.svg'
import windowsTask from '../../../assets/windows-task-scheduler.svg'
import mail from '../../../assets/integration-email-dark.svg'
import sms from '../../../assets/integration-sms-dark.svg'
import phone from '../../../assets/integration-voice-dark.svg'
import slack from '../../../assets/integration-slack.svg'
import discord from '../../../assets/integration-discord.svg'
import zapier from '../../../assets/integration-zapier.svg'
import telegram from '../../../assets/integration-telegram.svg'

const CJ3 = () => {
  return (
    <div className='CJ3'>
        <section className='sec1'>
            <div className="img-sec">
                <div className="circle cr1"></div>
                <div className="img-container">
                    <img src={monitor} alt="monitor" />
                </div> 
            </div>
            <div className="content cnt1">
                <h2>Monitor <span>cron job</span> completions.</h2>
                <p>Get instant alerts when a cron job fails or never starts. The setup will only take you a couple of minutes.</p>
            </div>
        </section>
        <section className='sec2'>
            <div className="content cnt2">
                <h2>Monitor <span>intranet devices</span> connected to the internet.</h2>
                <p>Cron job monitoring is a great choice if you want to know whether your device is connected to the internet all the time.</p>
            </div>
            <div className="img-sec">
                <div className="circle cr2"></div>
                <div className="img-container">
                    <img src={monitorIntranet} alt="intranet logo" />
                </div> 
            </div>
            
        </section>
        <section className='sec3'>
            <div className="img-sec">
                <div className="circle cr3"></div>
                <div className="img-container">
                    <img src={windowsTask} alt="windows-task" />
                </div> 
            </div>
            <div className="content cnt3">
                <h2>Use Windows <span>task scheduler </span>for monitoring.</h2>
                <p>Use Powershell to send HTTP requests to us and we’ll notify you if they don’t arrive on time.</p>
            </div>
        </section>
        <section className='sec2'>
        <div className="content cnt2">
                <h2>Choose your preferred type of <span>notifications</span>.</h2>
                <p>Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)</p>
            </div>
            <div className="img-sec">
                <div className="circle cr2"></div>
                <div className="cards">
                    <div className="card card1">
                        <div className="cd">
                            <img src={mail} alt="mail logo" />
                            <h3>E-mail</h3>
                        </div>
                        <div className="hov">
                            <p>E-mail is a basic form of outages notifications. Get alerted!</p>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="cd">
                            <img src={sms} alt="sms logo" />
                            <h3>SMS</h3>
                        </div>
                        <div className="hov">
                            <p>Get alerted instantly by SMS, even when you are offline!</p>
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="cd">
                            <img src={phone} alt="phone logo" />
                            <h3>Voice call</h3>
                        </div>
                        <div className="hov">
                            <p>Get an automatic voice call alert whenever your website is down.</p>
                        </div>
                    </div>
                    <div className="card card4">
                        <div className="cd">
                            <img src={slack} alt="slack logo" />
                            <h3>Slack</h3>
                        </div>
                        <div className="hov">
                            Slack messages are a great way to inform the entire team of a downtime.
                        </div>
                    </div>
                    <div className="card card5">
                        <div className="cd">
                            <img src={discord} alt="discord logo" />
                            <h3>Discord</h3>
                        </div>
                        <div className="hov">
                            <p>Get important monitor status updates in your Discord messages.</p>
                        </div>
                    </div>
                    <div className="card card6">
                        <div className="cd">
                            <div className='multiLogo'>
                                <img src={zapier} alt="zapier logo" />
                                <img src={telegram} alt="telegram logo" />
                                <img src={discord} alt="discord logo" />
                                <p>...</p>
                            </div>
                            <h3>and 10 more</h3>
                        </div>
                        <div className="hov">
                            <p>We got integration for every popular service.</p>
                        </div>
                    </div>
                </div>  
            </div>
            
        </section>
    </div>
  )
}

export default CJ3