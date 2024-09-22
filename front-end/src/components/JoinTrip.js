import React, { useContext, useEffect, useState } from "react";
import "./JoinTrip.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { UserContext } from '../context/userContext';
import images from "../image";

function JoinTrip() {
  const { t } = useTranslation();
  const { currentTrip } = useContext(UserContext);
  const [trip, setTrip] = useState(null);

  async function fetchTrip() {
    if (currentTrip) {
      try {
        const response = await fetch(`http://localhost:8000/api/auth/trips/${currentTrip}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setTrip(data.trip); // Set trip data directly
      } catch (error) {
        console.error('Error fetching trip:', error);
      }
    }
  }
  const [img,setImg] = useState('');

  useEffect(() => {
    fetchTrip();
    const randomNumber = Math.floor(Math.random() * 9);
        if (images[randomNumber]) {
            setImg(images[randomNumber].url);
            console.log("here",img);
        }
  }, [currentTrip]);
  
  // Early return if trip data is not yet loaded
  if (!trip) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return (
    <div className="bg-custom-gradient text-white min-h-screen h-auto">
      <div className="join-container">
        <div className="join-navbar ">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className='join-logo'></div>
          </Link>
          <ul className="join-options mt-4">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <ul className="join-home">{t('home')}</ul>
            </Link>
            <LanguageSelector className='join-lang' />
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <ul className="join-about">{t('about')}</ul>
            </Link>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <ul className="join-contact">{t('contactus')}</ul>
            </Link>
          </ul>
        </div>
        <div className="flex gap-10 pb-14 px-20 w-full ">
          <div className="flex flex-col gap-10 w-[70%]">
            <h1 className="text-5xl font-semibold" >{trip.Destination}</h1>
            <p className="text-[1.5rem]" >{trip.Description}</p>
            <div className="relative flex gap-5">
              <div className="">
                <div className="date-price">
                  <p>
                    {t('date')}
                    <br />
                    <span className="Data">{trip.StartDate.substr(0, 10).replaceAll("-","/").split("/").reverse().join("/")} - {trip.EndDate.substr(0, 10).replaceAll("-","/").split("/").reverse().join("/")}</span>
                  </p>
                  <p>
                    {t('EstimatedBugdet')}
                    <br />
                    <span className="Data">{trip.estimatedBudget} Rs</span>
                  </p>
                </div>

                <p className="text-lg">
                  {t('meetup')} - <span className="Data">{trip.MeetUPLocation}</span>
                </p>
                <p className="text-lg">
                  {t('localguide')} - <span className="Data">{trip.localGuide ? t('yes') : t('no')}</span>
                </p>

                <p className="text-lg">
                  {t('Groupsize')} - <span className="Data">{trip.TravellerCount}</span>
                </p>
                <p className="text-lg">
                  {t('preference')} - <span className="Data">{trip.Gender}</span>
                </p>
                <p className="text-lg">
                  {t('age')} - <span className="Data">{trip.MinAge}-{trip.MaxAge}</span>
                </p>
                <p className="text-lg">
                  {t('tripcreatedby')} - <span className="Data">{trip.createdBy}</span>
                </p>
              </div>
              <div style={{ 
                backgroundImage: `url(${img})`, 
                width: "320px", // Added 'px' for units
                height: "320px", // Added 'px' for units
                borderRadius: "20px", // Changed to camelCase
                objectFit:"contain",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center",
                marginTop:"-20px"

                  }}></div>
            </div>
          </div>
          <div className="w-[30%] mr-16 mt-6">
            <h1 className="text-4xl font-bold text-center mb-4">{t('jointrip')}</h1>
            <div className="bg-[#6e6d6d54] pl-8 py-4 rounded-xl  ">
              <div className="w-full">
                <p className="join-placeholder">{t('name')}</p>
                <input type="text" className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3" />
              </div>
              <div className="w-full">
                <p className="join-placeholder">{t('age')}</p>
                <input type="text" className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3" />
              </div>
              <div className="join-gender">
                <p className="join-placeholder">{t('gender')}</p>
                <div className="flex w-full gap-4">
                  <div className="join-girls">
                    <input type="radio" id="female" name="gender" />
                    <label htmlFor="female" className="join-placeholder">{t('female')}</label>
                  </div>
                  <div className="join-boys">
                    <input type="radio" id="male" name="gender" />
                    <label htmlFor="male" className="join-placeholder">{t('male')}</label>
                  </div>
                  <div className="join-no_pref mb-3">
                    <input type="radio" id="none" name="gender" />
                    <label htmlFor="none" className="join-placeholder">{t('other')}</label>
                  </div>
                </div>
              </div>

              <div className="join-phone">
                <p className="join-placeholder">{t('contact')}</p>
                <input type="number" className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3" />
              </div>

              <div className="join-price mb-3" >
                <p className="join-placeholder">{t('EstimatedBugdet')} - {trip.estimatedBudget} Rs</p>
              </div>

              <button className="join-submit">{t('join')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTrip;
