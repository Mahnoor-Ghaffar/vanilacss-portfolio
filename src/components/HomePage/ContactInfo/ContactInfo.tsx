import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <section id="contactInfo">
    <div className="contactInfo">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon">
            <FaPhoneAlt className='r-icon' />
          </div>
          <div className="contact-info-1">
            <h1>Phone</h1>
            <h2>+92 000 222 333</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon">
            <FaEnvelope className='r-icon' />
          </div>
          <div className="contact-info-1">
            <h1>Email</h1>
            <h2>mahnoorghaffar9@gmail.com</h2>
            <h2>abcd@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon">
          <FaMapMarkerAlt className='r-icon' />
          </div>
          <div className="contact-info-1">
            <h1>Address</h1>
            <h2>abc, Karachi, Pakistan</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactInfo