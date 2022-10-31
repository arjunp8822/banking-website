import React from 'react'
import './Info.css'
import {Link} from 'react-scroll'

const Info = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, light}) => {
  return (
    <div className={lightBg ? 'info-container': 'info-container-d'} lightBg={lightBg} id={id}>
        <div className='info-wrapper'>
            <div className='info-row' imgStart={imgStart}>
                <div className='info-column-1'>
                    <div className='info-topline'>{topLine}</div>
                    <div className={lightText? 'info-heading' : 'info-heading-d'} lighttext={lightText}>{headLine}</div>
                    <div className={darkText? 'info-subtitle' : 'info-subtitle-d'} darkText={darkText}>{description}</div>
                    <Link 
                        className={light? 'info-button' : 'info-button-d'}
                        to='signup'
                        >{buttonLabel}</Link>
                </div>
                <div className='info-column-2'>
                    <div className='info-img-wrap'>
                        <img src={img} alt={alt} className='info-img'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info