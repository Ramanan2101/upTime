import React from 'react'
import './style.css';
import CJ1 from './cron-components/CJ1';
import CJ2 from './cron-components/CJ2';
import CJ3 from './cron-components/CJ3';
import CJ4 from './cron-components/CJ4';
import CJ5 from './cron-components/CJ5';
import CJ6 from './cron-components/CJ6';
import CJ7 from './cron-components/CJ7';
import CJ8 from './cron-components/CJ8';


const CronJob = () => {
  return (
    <div className='cronjob'>
      <CJ1/>
      <CJ2/>
      <CJ3/>
      <CJ4/>
      <CJ5/>
      <CJ6/>
      <CJ7/>
      <CJ8/>
    </div>
  )
}

export default CronJob