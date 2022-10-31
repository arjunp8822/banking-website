import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube,FaTwitter  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-wrap'>
            <div className='footer-link-countainer'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h1 className='footer-link-title'>About Us</h1>
                        <div className='footer-link'>How it works</div>
                        <div className='footer-link'>Testimonials</div>
                        <div className='footer-link'>Careers</div>
                        <div className='footer-link'>Terms of service</div>
                    </div>
                    <div className='footer-link-items'>
                        <h1 className='footer-link-title'>Videos</h1>
                        <div className='footer-link'>Submit Video</div>
                        <div className='footer-link'>Ambassadors</div>
                        <div className='footer-link'>Agency</div>
                        <div className='footer-link'>Influencer</div>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h1 className='footer-link-title'>Contact Us</h1>
                        <div className='footer-link'>Contact</div>
                        <div className='footer-link'>Support</div>
                        <div className='footer-link'>Destinations</div>
                        <div className='footer-link'>Sponsorships</div>
                    </div>
                    <div className='footer-link-items'>
                        <h1 className='footer-link-title'>Social Media</h1>
                        <div className='footer-link'>Instagram</div>
                        <div className='footer-link'>Facebook</div>
                        <div className='footer-link'>Youtube</div>
                        <div className='footer-link'>Twitter</div>
                    </div>
                </div>
            </div>
            <div className='social-media-wrap'>
                <div className='social-logo'>AP Banking</div>
                <div className='website-rights'>&copy; 2022 All rights reserved</div>
                <div className='social-icon-links'>
                    <FaInstagram className='social-individual-icon'/>
                    <FaFacebook className='social-individual-icon'/>
                    <FaYoutube className='social-individual-icon'/>
                    <FaTwitter className='social-individual-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer