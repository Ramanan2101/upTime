import React from 'react'
import portType from '../../../assets/port-types.svg';
import monitorssl from '../../../assets/monitor-ssl-certificate.svg';
import certificateExpiry from '../../../assets/ssl-certificate-expiry-notification.svg';
import mail from '../../../assets/integration-email-dark.svg'
import sms from '../../../assets/integration-sms-dark.svg'
import phone from '../../../assets/integration-voice-dark.svg'
import slack from '../../../assets/integration-slack.svg'
import discord from '../../../assets/integration-discord.svg'
import zapier from '../../../assets/integration-zapier.svg'
import telegram from '../../../assets/integration-telegram.svg'

const SSL3 = () => {
  return (
    <div className='ssl3 CJ3'>
        <section className='sec1'>
            <div className="img-sec">
                <div className="circle cr1"></div>
                <div className="img-container">
                    <img src={monitorssl} alt="monitor-ssl-certificate" />
                </div> 
            </div>
            <div className="content cnt1">
                <h2>Get alerts about SSL <span>certificate errors</span>.</h2>
                <p>Set up an SSL monitoring within the main HTTPS monitoring of your website and receive notifications regarding any SSL certificate errors automatically.</p>
            </div>
        </section>
        <section className='sec2'>
            <div className="content cnt2">
                <h2>Make sure your <span>email service</span> runs smoothly.</h2>
                <p>Set up a POP3, IMAP and SMTP port monitoring and know about any issues with your essential email services.</p>
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

export default SSL3