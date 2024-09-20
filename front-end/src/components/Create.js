import React from 'react'
import "./Create.css"
import { Link } from "react-router-dom"
import { TfiWorld } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
import LanguageSelector from './LanguageSelector';
function Create() {
    const{ t}=useTranslation()
  return (
    <div class="create-wrapper">
        <div class="create-container">
            <div class="create-navbar">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className='create-logo'></div></Link>
                <ul class="create-options">
                <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <ul class="crea
                te-home">{t('home')}</ul>
                </Link>
                  
                  <ul class="create-lang"><LanguageSelector/>
                  </ul>
                  <Link to={"/about"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <ul class="create-about">{t('about')}</ul></Link>
                  <Link to={"/contact"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <ul class="create-contact">{t('contact')}</ul></Link>
                  
                </ul>
            </div>
            <form class="create-section">
                <div class="create-left">
                    <h1>{t('tailored')}</h1>
                </div>
                <div class="create-right">
                    <h2 class="create-head">{t('createtrip')}</h2>
                    <div class="create-name">
                        <div class="create-placeholder">
                            <p>{t('nameoftrip')}</p>
                            <input type="text" class="create-tripinput1" required/>
                        </div>
                        <div class="create-input">
                            <p>{t('Destinationfoot')}</p>
                            <input type="text" class="create-tripinput1" required/>
                        </div>
                    </div>
                    <div class="create-description">
                        <p>{t('desc')}</p>
                        <input type="text" id="create-description" class="create-tripinput1" required/>
                    </div>
                    <div>
                        <p>{t('date')}</p>
                        <div class="create-date">
                            <div class="create-start">
                                <p>{t('start')}</p>
                                <input type="date" placeholder="Start" class="create-tripinput1" required/>
                            </div>
                            <div class="create-end">
                                <p>{t('end')}</p>
                                <input type="date" placeholder="End" class="create-tripinput1" required/>
                            </div>
                        </div>
                    </div>
                    <div class='budget-meet'>
                    <div class="create-budget">
                        <p>{t('estimatedbudget')}</p>
                        <input type="text" class="create-tripinput1" required/>
                    </div>
                    <div class="create-meetup">
                        <p>{t('meetup')}</p>
                        <input type="text" class="create-tripinput1" placeholder="Enter Location" required/>
                    </div>
                    </div>
                    

                    <div class="create-guide">
                        <p>{t('NeedaLocalGuide')}</p>
                        <div class="create-radio">
                            <div class="create-yes">
                                <input type="radio" id="yes" value="yes"
                                name="local"  checked/>
                                <label for="yes" >{t('yes')}</label>
                            </div>
                            <div class="create-no">
                                <input type="radio" id="no" value="no" 
                                name="local"
                                />
                                <label for="no">{t('no')}</label>
                            </div>
                        </div>
                    </div>

                    <div class="create-members">
                        <p>{t('travellers')}</p>
                        <input type="number" class="create-tripinput1" required/>
                    </div>

                    <div>
                        <p>{t('preference')}</p>
                        <div class="create-radio">
                            <div class="create-girls">
                                <input type="radio" id="female" name='pref' />
                                <label for="female">{t('onlyfemale')}</label>
                            </div>
                            <div class="create-boys">
                                <input type="radio" id="male" name='pref'/>
                                <label for="male">{t('onlymale')}</label>
                            </div>
                            <div class="create-no_pref">
                                <input type="radio" id="none" name='pref' checked/>
                                <label for="none">{t('nopreference')}</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>{t('agerange')}</p>
                        <div class="create-age">
                            <input type="number" class="create-tripinput1" placeholder={t('min')} required/>
                            <input type="number" class="create-tripinput1" placeholder={t('max')} required/>
                        </div>
                    </div>
                    
                    <div class="create-remark">
                        <p>{t('remarks')}</p>
                        <input type="text" class="create-tripinput1" id="remarkstext"/>
                    </div>
                    
                    <button class="create-button">
                    {t('create')}
                    </button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Create