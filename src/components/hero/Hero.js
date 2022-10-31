import React, { useState } from 'react'
import './Hero.css'
import Video from '../../videos/video.mp4'
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

const Hero = () => {

const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (

    <div className='hero-container' id='hero'>
        <div className='hero-bg'>
            <video 
                className='hero-video-bg'
                src={Video}
                type='video/mp4'
                autoPlay
                loop
                muted
            />
        </div>
        <div className='hero-content'>
            <h1 className='hero-h1'>Virtual Banking Made Easy</h1>
            <p className='hero-p'>Sign up for a new account today and receive 
                $250 in credit towards your next payment</p>
            <button className='hero-btn' onMouseEnter={onHover} onMouseLeave={onHover}>Get started {hover? <MdArrowForward /> : <MdKeyboardArrowRight />}</button>
        </div>
    </div>
  )
}

export default Hero