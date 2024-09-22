import React from 'react'
import "./About.css"
import LanguageSelector from "./LanguageSelector"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
function About() {
    const{ t}=useTranslation()
  return (
    <div className="about-wrapper">
        <div className="about-container">
            <div className="flex justify-between w-full text-white">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className='about-logo'></div></Link>
                <ul className="flex gap-20 text-xl mt-4 ">
                <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}> <ul className="about-home">{t('home')}</ul></Link>
                  
                  <LanguageSelector className=''/>
                  <Link to={"/contact"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <ul className="about-contact">{t('contact')}</ul>
                  </Link>
                </ul>
            </div>

            <div className="about-about">
                <h1>{t('AboutUs')}</h1>
                <br/>
                <p>{t('WelcometoTripUnite')}</p>
            </div>

            <div className="about-section">
                <h2>{t('MeetOurdevelopers')}</h2>
                <div className="about-dev">
                    <div className="about-developers">
                        <div className='about-photo1'></div>
                        <h3>{t('AyushSah')}</h3>
                        
                        <div className="about-icon">
                            <FaLinkedin className='about-icons'/>
                            <FaGithub className='about-icons'/>
                        </div>
                    </div>
                    <div className="about-developers">
                    <div className='about-photo1'></div>
                        <h3>{t('Shudhanshu')}</h3>
                      
                        <div className="about-icon">
                            <FaLinkedin className='about-icons'/>
                            <FaGithub className='about-icons'/>
                        </div>
                    </div>
                    <div className="about-developers">
                    <div className='about-photo1'></div>
                        <h3>{t('AnishaKumari')}</h3>
                        
                        <div className="about-icon">
                        <FaLinkedin className='about-icons'/>
                        <FaGithub className='about-icons'/>
                        </div>
                    </div>
                    <div className="about-developers">
                        <div className='about-photo1'></div>
                        <h3>{t('SanyaSingh')}</h3>
                        <div className="about-icon">
                            <FaLinkedin className='about-icons'/>
                            <FaGithub className='about-icons'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About