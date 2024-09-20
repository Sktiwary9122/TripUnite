import React from "react";
import "./Main.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
function Main() {
  const{ t}=useTranslation()
  return (
    <div className="background">
      <div className="wrappper1">
        <div className="container1">
          <div className="navbar">
          <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className='main-logo'></div></Link>
            <div className="options">
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

          <h1 className="title1">{t('Adventureawaits')}</h1>

          <div className="places">
            <div className="Mumbai">
              <p className="heading">{t('Mumbai')}</p>
              <div className="bottom">
                <div className="left">
                  <FaUser color="white" />
                  <p className="person">15</p>
                </div>
                <div className="right">
                  <div className="price">Rs.5000</div>
                  <div className="book">{t('book')}</div>
                </div>0
              </div>
            </div>
            <div className="Jaipur">
              <p className="heading">{t('jaipur')}</p>
              <div className="bottom">
                <div className="left">
                  <FaUser color="white" />
                  <p className="person">15</p>
                  <p className="gender">
                    <br />
                    {t('onlyfemale')}
                  </p>
                </div>
                <div className="right">
                  <div className="price">Rs.5000</div>
                  <div className="book">{t('book')}</div>
                </div>
              </div>
            </div>
            <div className="Kashmir">
              <p className="heading">{t('Kashmir')}</p>
              <div className="bottom">
                <div className="left">
                  <FaUser color="white" />
                  <p className="person">15</p>
                </div>
                <div className="right">
                  <div className="price">Rs.5000</div>
                  <Link to={"/join"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <div className="book">{t('book')}</div></Link>
                </div>
              </div>
            </div>
            <div className="Kerala">
              <p className="heading">{t('Kerela')}</p>
              <div className="bottom">
                <div className="left">
                  <FaUser color="white" />
                  <p className="person">15</p>
                </div>
                <div className="right">
                  <div className="price">Rs.5000</div>
                  <div className="book">{t('book')}</div>
                </div>
              </div>
            </div>
            <div className="Agra">
              <p className="heading">{t('Agra')}</p>
              <div className="bottom">
                <div className="left">
                  <FaUser color="white" />
                  <p className="person">15</p>
                </div>
                <div className="right">
                  <div className="price">Rs.5000</div>
                  <div className="book">{t('book')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <Link to={"/create"}>
            <div className="create-trip">
                <button>{t('createtrip')}</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
