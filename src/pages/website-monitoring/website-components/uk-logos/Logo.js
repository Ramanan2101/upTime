import React from 'react'
import './logo.css';
import goDaddyLogo from '../../../../assets/godaddy-logo.svg'
import nasaLogo from '../../../../assets/nasa.svg'
import moodyLogo from '../../../../assets/moodys-logo.svg'
import IBMLogo from '../../../../assets/ibm-logo.svg'
import expediaLogo from '../../../../assets/expedia-logo.svg'

const Logo = () => {
  return (
    <div className='logo'>
        <div className="logo-container">
            <ul>
                <li><img src={goDaddyLogo} alt="GoDaddy logo" /></li>
                <li><img src={nasaLogo} alt="NASA logo" /></li>
                <li><img src={moodyLogo} alt="Moody's logo" /></li>
                <li><img src={IBMLogo} alt="IBM logo" /></li>
                <li><img src={expediaLogo} alt="Expedia logo" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Logo