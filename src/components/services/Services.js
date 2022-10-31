import React from 'react'
import './Services.css'
import Icon1 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon5 from '../../images/svg-5.svg'

const Services = () => {
  return (
    <div className='services-container' id='services'>
        <div className='services-h1'>
            Our Services
        </div>
        <div className='services-wrapper'>
            <div className='services-card'>
                <div>
                    <img className='services-icon' src={Icon1} alt='services'/>
                </div>
                <h2 className='services-h2'>Reduce expenses</h2>
                <div className='services-p'>We help reduce your fees and increase your overall revenue</div>
            </div>
            <div className='services-card'>
                <div>
                    <img className='services-icon' src={Icon5} alt='services'/>
                </div>
                <h2 className='services-h2'>Virtual offices</h2>
                <div className='services-p'>You can access our platform online anywhere in the world</div>
            </div>
            <div className='services-card'>
                <div>
                    <img className='services-icon' src={Icon3} alt='services'/>
                </div>
                <h2 className='services-h2'>Premium benefits</h2>
                <div className='services-p'>Unlock our special membership card that returns 5% cash back</div>
            </div>
        </div>
    </div>
  )
}

export default Services