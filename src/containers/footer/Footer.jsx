import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

function Footer () {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      
      <div className='gpt3__footer-btn'>
        <button type='button'> Request Early Access</button>
      </div>

      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-container_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__footer-container_div'>
          <h4>Links</h4>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-container_div'>
          <h4>Company</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-container_div'>
          <h4>Get in touch</h4>
          <ul>
            <li>Rabat</li>
            <li>065-155-1085</li>
            <li>mustachgata@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023&nbsp;<span className='footer_err'><a href="https://github.com/oussa-err" target='_blank'>Err.</a></span></p>
      </div>
    </div>
  )
}

export default Footer