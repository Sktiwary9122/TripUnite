import React from "react";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {
  const{ t}=useTranslation()
  return (
    <div className="Footer">
      <div className="column1">
      <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='footer-logo'></div></Link>
        <p>{t('discoverwith')}</p>
      </div>
      <div className="contact">
        <div className="column2">
          <h3>{t('help')}</h3>
          <div>
            <p>FAQs </p>
            <p>{t('contactus')}</p>
            <p>{t('getassistance')}</p>
          </div>
        </div>
        <div className="column3">
          <h3>{t('more')}</h3>
          <div>
            <p>{t('about')}</p>
            <p> {t('Destinationfoot')}</p>
            <p> {t('tripsfoot')}</p>
          </div>
        </div>
        <div className="column4">
          <h3>{t('contactus')}</h3>
          <div>
            <p>xyz@gmail.com</p>
            <p>1234567890</p>
            <div className=" flex icons">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>
        <div className="column 5">
          <div className="column5-div"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
