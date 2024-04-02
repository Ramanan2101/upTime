import React from 'react'
import './sections.css';
import monitor from '../../../../assets/monitor-intervals.svg'
import mail from '../../../../assets/integration-email-dark.svg'
import sms from '../../../../assets/integration-sms-dark.svg'
import phone from '../../../../assets/integration-voice-dark.svg'
import slack from '../../../../assets/integration-slack.svg'
import discord from '../../../../assets/integration-discord.svg'
import zapier from '../../../../assets/integration-zapier.svg'
import telegram from '../../../../assets/integration-telegram.svg'
import appPreview from '../../../../assets/app-preview.png'
import playstore from '../../../../assets/google-playstore-badge.svg'
import appstore from '../../../../assets/appstore-badge.svg'

const Sections = () => {
  return (
    <div className='sections'>
        <section className='sec1'>
            <div className="img-sec">
                <div className="circle cr1"></div>
                <div className="img-container">
                    <img src={monitor} alt="monitor" />
                </div> 
            </div>
            <div className="content cnt1">
                <h2>Sleep well thanks to our reliable <span>30-sec checks</span>.</h2>
                <p>Your website can be checked every 30 seconds so you can get an instant notification in case things go wrong.</p>
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
        <section className='sec3'>
            <div className="img-sec">
                <div className="circle cr3"></div>
                <div className="img-container">
                    <img src={appPreview} alt="monitor" />
                </div> 
            </div>
            <div className="content cnt3">
                <h2>Stay notified on the go with our <span>Android/iOS app</span>.</h2>
                <p>Get instant notifications, manage monitors and check your uptime statistics on the go with our slick mobile app.</p>
                <div className="appStore">
                    <a href=""><img src={playstore} alt="" /></a>
                    <a href=""><img src={appstore} alt="" /></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Sections