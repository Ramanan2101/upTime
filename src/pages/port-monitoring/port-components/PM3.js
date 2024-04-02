import React from 'react'
import portType from '../../../assets/port-types.svg';
import emailPort from '../../../assets/email-port.svg';
import dnsPort from '../../../assets/dns-port.svg';
import mail from '../../../assets/integration-email-dark.svg'
import sms from '../../../assets/integration-sms-dark.svg'
import phone from '../../../assets/integration-voice-dark.svg'
import slack from '../../../assets/integration-slack.svg'
import discord from '../../../assets/integration-discord.svg'
import zapier from '../../../assets/integration-zapier.svg'
import telegram from '../../../assets/integration-telegram.svg'


const PM3 = () => {
  return (
    <div className='PM3 CJ3'>
        <section className='sec1'>
            <div className="img-sec">
                <div className="circle cr1"></div>
                <div className="img-container">
                    <img src={portType} alt="port-type" />
                </div> 
            </div>
            <div className="content cnt1">
                <h2>Monitor <span>any port</span> on your server.</h2>
                <p>Make sure databases and other services running on different ports on your server are always available. We support any port, including HTTPS, FTP, SSH, ...</p>
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
                    <img src={emailPort} alt="email-port" />
                </div> 
            </div>
            
        </section>
        <section className='sec3'>
            <div className="img-sec">
                <div className="circle cr3"></div>
                <div className="img-container">
                    <img src={dnsPort} alt="dns-port" />
                </div> 
            </div>
            <div className="content cnt3">
                <h2>Port monitoring for your <span>DNS</span> server.</h2>
                <p>With port monitor watching your DNS port you always know whether essential DNS connection is okay.</p>
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
                        <img src={mail} alt="mail logo" />
                        <h3>E-mail</h3>
                    </div>
                    <div className="card card2">
                        <img src={sms} alt="sms logo" />
                        <h3>SMS</h3>
                    </div>
                    <div className="card card3">
                        <img src={phone} alt="phone logo" />
                        <h3>Voice call</h3>
                    </div>
                    <div className="card card4">
                        <img src={slack} alt="slack logo" />
                        <h3>Slack</h3>
                    </div>
                    <div className="card card5">
                        <img src={discord} alt="discord logo" />
                        <h3>Discord</h3>
                    </div>
                    <div className="card card6">
                        <div>
                            <img src={zapier} alt="zapier logo" />
                            <img src={telegram} alt="telegram logo" />
                            <img src={discord} alt="discord logo" />
                            <p>...</p>
                        </div>
                        <h3>and 10 more</h3>
                    </div>
                </div> 
            </div>
            
        </section>
    </div>
  )
}

export default PM3