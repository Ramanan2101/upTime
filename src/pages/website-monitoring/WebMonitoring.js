import React from 'react'
import Website from './website-components/website/Website'
import Logo from './website-components/uk-logos/Logo'
import Sections from './website-components/card-sections/Sections'
import AdvFeatures from './website-components/advFeatures/AdvFeatures'
import SetUp from './website-components/setup/SetUp'
import Slide6 from './website-components/slide6/Slide6'
import Slide7 from './website-components/slide7/Slide7'
import Slide8 from './website-components/slide8/Slide8'

const WebMonitoring = () => {
  return (
    <div className='webmonitoring'>
        <Website/>
        <Logo/>
        <Sections/>
        <AdvFeatures/>
        <SetUp/>
        <Slide6/>
        <Slide7/>
        <Slide8/>

    </div>
  )
}

export default WebMonitoring