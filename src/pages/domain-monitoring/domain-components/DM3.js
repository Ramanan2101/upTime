import React from 'react'
import monitordomain from '../../../assets/monitor-domain-expiration.svg';
import certificateExpiry from '../../../assets/ssl-certificate-expiry-notification.svg';
import mail from '../../../assets/integration-email-dark.svg'
import sms from '../../../assets/integration-sms-dark.svg'
import phone from '../../../assets/integration-voice-dark.svg'
import slack from '../../../assets/integration-slack.svg'
import discord from '../../../assets/integration-discord.svg'
import zapier from '../../../assets/integration-zapier.svg'
import telegram from '../../../assets/integration-telegram.svg'


const DM3 = () => {
  return (
    <div className='dm3 CJ3'>
        <section className='sec1'>
            <div className="img-sec">
                <div className="circle cr1"></div>
                <div className="img-container">
                    <img src={monitordomain} alt="domain-monitoring" />
                </div> 
            </div>
            <div className="content cnt1">
                <h2><span>Prevent</span> incidents caused by expired domain.</h2>
                <p>Take your website monitoring to the next level with additional domain expiration monitoring. Keep track of your domain expiration and prevent domain expiry issues with automatic notifications.</p>
            </div>
        </section>
        <section className='sec2'>
            <div className="content cnt2">
                <h2>Get <span>notified</span> about the domain expiration date.</h2>
                <p>Use domain monitoring to receive alerts 30, 14, 7, and 1 day before your domain name expiration, and view the domain expiration date anytime in your dashboard.</p>
            </div>
            <div className="img-sec">
                <div className="circle cr2"></div>
                <div className="img-container">
                    <img src={certificateExpiry} alt="ssl-certificate-expiry-notification" />
                </div> 
            </div>
            
        </section>
        <section className='sec3'>
            <div className="img-sec">
                <div className="circle cr3"></div>
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
            <div className="content cnt3">
                <h2>Choose your preferred type of <span>notifications</span>.</h2>
                <p>Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)</p>
            </div>
        </section>
    </div>
  )
}

export default DM3