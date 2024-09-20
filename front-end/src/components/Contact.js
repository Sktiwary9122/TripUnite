import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
import LanguageSelector from './LanguageSelector'
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
    const{ t}=useTranslation()
  return (
    <div className="contact-wrapper">
        <div className="contact-container">
        <div className="contact-navbar">
          <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className='main-logo contact-logo'></div></Link>
            <div className="contact-options">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <ul className="home">{t('home')}</ul></Link>
              <ul className="lang">
                <LanguageSelector/>
              </ul>
              <Link to={"/about"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <ul className="about">{t('about')}</ul></Link>
              <Link to={"/contact"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <ul className="main-contact">{t('contactus')}</ul></Link>
              
            </div>
          </div>


            <h1 className="contact-heading">{t('contactus')}</h1>
            <h3 className="contact-subheading">{t('Reachouttous')}</h3>

            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-name">
                        <p className="contact-text">{t('name')}</p>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="contact-email">
                        <p className="contact-text">{t('email')}</p>
                        <input type="text" className="contact-input"/>
                    </div>
                    <div className="contact-contact">
                        <p className="contact-text">{t('Phonenumber')}</p>
                        <input type="tel" className="contact-input" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                    </div>
                    <div className="contact-message">
                        <p className="contact-text">{t('message')}</p>
                        <input type="text" className="contact-input"/>
                    </div>
                    <button className="contact-submit">{t('submit')}</button>
                </div>
                <div className="contact-right">
                    <h2>{t('ContactInformation')}</h2>
                    <div className="contact-information">
                        <p>{t('Phno')}: +91 1234567854</p>
                        <p>{t('email')}: abc12@gmail.com</p>
                    </div>
                    <div className="contact-icons">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaXTwitter/>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact