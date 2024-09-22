import React,{useContext} from "react";
import "./JoinTrip.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { UserContext } from '../context/userContext';
function JoinTrip() {
    const{ t}=useTranslation()
    const {userIdRef, userId, setUserId, currentTrip, setCurrentTrip } = useContext(UserContext);
    console.log("yuhuuuuuuuuu",currentTrip);
  return (
    <div class="join-wrapper">
      <div class="join-container">
        <div class="join-navbar">
        <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className='join-logo'></div></Link>
          <ul class="join-options">
          <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ul class="join-home">{t('home')}</ul>
            </Link>
            <LanguageSelector class='join-lang'/>
            <Link to={"/about"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <ul class="join-about">{t('about')}</ul></Link>
                  <Link to={"/contact"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <ul class="join-contact">{t('contactus')}</ul></Link>
            
          </ul>
        </div>
        <div class="join-section">
          <div class="join-left">
            <h1>{t('Kashmir')}</h1>
            <p>
              {t('Joinus')}
            </p>
            <div class="join-abouttrip">
              <div class="join-details">
                <div class="date-price">
                  <p>
                    {t('date')}
                    <br />
                    <span class="Data">20 {t('july')} - 25{t('july')}</span>{" "}
                  </p>
                  <p>
                  {t('EstimatedBugdet')}
                    <br />
                    <span class="Data">5000 Rs</span>{" "}
                  </p>
                </div>

                <p>
                {t('meetup')}
                  -
                  <span class="Data">{t('Newdelhi')}</span>
                </p>
                <p>
                {t('localguide')}-<span class="Data">{t('yes')}</span>
                </p>
                
                
                <p>
                {t('Groupsize')} - <span class="Data">20</span>
                </p>
                <p>
                {t('preference')} - <span class="Data">{t('onlyfemale')}</span>
                </p>
                <p>
                {t('age')} - <span class="Data">20-30</span>
                </p>
                <p>
                {t('tripcreatedby')}- <span class="Data">abc</span>
                </p>
                <p>
                {t('contact')} - <span class="Data">1234567890</span>
                </p>
              </div>
              <div class="join-photo"></div>
            </div>
          </div>
          <div class="join-right">
            <h1>{t('jointrip')}</h1>
            <div class="join-join">
              <div class="join-name">
                <p class="join-placeholder">{t('name')}</p>
                <input type="text" class="join-input" />
              </div>
              <div class="join-age">
                <p class="join-placeholder">{t('age')}</p>
                <input type="text" class="join-input" />
              </div>
              <div class="join-gender">
                <p class="join-placeholder">{t('gender')}</p>
                <div class="join-radio">
                  <div class="join-girls">
                    <input type="radio" id="female" name="gender" />
                    <label for="female" class="join-placeholder">
                    {t('female')}
                    </label>
                  </div>
                  <div class="join-boys">
                    <input type="radio" id="male" name="gender" />
                    <label for="male" class="join-placeholder">
                    {t('male')}
                    </label>
                  </div>
                  <div class="join-no_pref">
                    <input type="radio" id="none" name="gender" />
                    <label for="none" class="join-placeholder">
                    {t('other')}
                    </label>
                  </div>
                </div>
              </div>

              <div class="join-phone">
                <p class="join-placeholder">{t('contact')}</p>
                <input type="text" class="join-input" />
              </div>

              <div class="join-price">
                <p class="join-placeholder">{t('EstimatedBugdet')} - 5000 Rs</p>
              </div>

              <button class="join-submit">{t('join')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTrip;
