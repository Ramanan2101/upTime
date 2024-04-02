import React from 'react'
import './advFeatures.css';

const AdvFeatures = () => {
  return (
    <div className='adv-container'>
        <h2><span>Advanced features</span> for advanced users</h2>
        <div className="adv-grid">
            <div className="grd">
                <h3>Multi-location checks</h3>
                <p>We verify incidents from various geo-locations to prevent false-positives.</p>
            </div>
            <div className="grd">
                <h3>Recurring notifications</h3>
                <p>Set threshold and recurrence parameters so that you don't miss any serious outage.</p>
            </div>
            <div className="grd">
                <h3>Maintenance windows</h3>
                <p>Set up maintenance windows to pause the monitoring during the maintenance.</p>
            </div>
            <div className="grd">
                <h3>Incidents with root causes</h3>
                <p>Reduce the risk of incident recurrence by analyzing the issue closely.</p>
            </div>
            <div className="grd">
                <h3>Response times</h3>
                <p>See your response times in a chart and reveal performance hiccups.</p>
            </div>
            <div className="grd">
                <h3>Custom HTTP requests</h3>
                <p>Need to set an advanced HTTP header? We've got you covered!</p>
            </div>
        </div>
    </div>
  )
}

export default AdvFeatures