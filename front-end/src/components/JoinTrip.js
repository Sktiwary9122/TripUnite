import React, { useContext, useEffect, useState } from "react";
import "./JoinTrip.css";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { UserContext } from '../context/userContext';
import images from "../image";
import axios from 'axios'; // Import axios
import { toast } from 'react-toastify'; // Import toast notifications

function JoinTrip() {
  const { t } = useTranslation();
  const { currentTrip } = useContext(UserContext);
  const [trip, setTrip] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const [userData, setData] = useState({
    Name: '',
    Age: '',
    Gender: '',
    Contact: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submithandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/joinTrips/${currentTrip}`,{
          ...userData,
          // Name: parseString(userData.Name),
          Age: parseInt(userData.Age),
          // Gender: parseString(userData.Gender),
          // Contact: parseString(userData.Contact),
      },{ withCredentials: true}// Send userData directly
      );

      toast.success("Trip Successfully joined");
      navigate('/main');
    } catch (error) {
      toast.error("Error Joining trip");
      console.error("Error joining trip:", error.errors || error); // Log detailed error from Zod
    }
  }

  async function fetchTrip() {
    if (currentTrip) {
      try {
        const response = await fetch(`http://localhost:8000/api/auth/trips/${currentTrip}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrip(data.trip);
      } catch (error) {
        console.error('Error fetching trip:', error);
      }
    }
  }

  const [img, setImg] = useState('');

  useEffect(() => {
    console.log("current trip id",currentTrip)
    fetchTrip();
    const randomNumber = Math.floor(Math.random() * 9);
    if (images[randomNumber]) {
      setImg(images[randomNumber].url);
    }
  }, [currentTrip]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-custom-gradient text-white min-h-screen h-auto">
      <div className="join-container">
        <div className="join-navbar">
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

        <div className="flex gap-10 pb-14 px-20 w-full">
          <div className="flex flex-col gap-10 w-[70%]">
            <h1 className="text-5xl font-semibold uppercase">{trip.Destination}</h1>
            <p className="text-[1.5rem] text-justify">{trip.Description}</p>
            <div className="relative flex gap-5">
              <div>
                <div className="date-price">
                  <p>{t('date')}<br />
                    <span className="Data">
                      {trip.StartDate.substr(0, 10).replaceAll("-", "/").split("/").reverse().join("/")} - 
                      {trip.EndDate.substr(0, 10).replaceAll("-", "/").split("/").reverse().join("/")}
                    </span>
                  </p>
                  <p>{t('EstimatedBugdet')}<br />
                    <span className="Data">{trip.estimatedBudget} Rs</span>
                  </p>
                </div>

                <p className="text-lg">{t('meetup')} - <span className="Data">{trip.MeetUPLocation}</span></p>
                <p className="text-lg">{t('localguide')} - <span className="Data">{trip.localGuide ? t('yes') : t('no')}</span></p>
                <p className="text-lg">{t('Groupsize')} - <span className="Data">{trip.TravellerCount}</span></p>
                <p className="text-lg">{t('preference')} - <span className="Data">{trip.Gender}</span></p>
                <p className="text-lg">{t('age')} - <span className="Data">{trip.MinAge}-{trip.MaxAge}</span></p>
                <p className="text-lg">{t('tripcreatedby')} - <span className="Data">{trip.createdBy}</span></p>
              </div>
              <div 
                style={{ 
                  backgroundImage: `url(${img})`, 
                  width: "320px", 
                  height: "320px", 
                  borderRadius: "20px", 
                  objectFit: "contain", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  marginTop: "-20px" 
                }}>
              </div>
            </div>
          </div>

          <div className="w-[30%] mr-16 mt-6">
            <h1 className="text-4xl font-bold text-center mb-4">{t('jointrip')}</h1>
            <form onSubmit={submithandler}>
              <div className="bg-[#6e6d6d54] pl-8 py-4 rounded-xl">
                <div className="w-full">
                  <p className="join-placeholder">{t('name')}</p>
                  <input
                    type="text"
                    name="Name"
                    value={userData.Name}
                    onChange={handleInputChange}
                    className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3"
                  />
                </div>
                <div className="w-full">
                  <p className="join-placeholder">{t('age')}</p>
                  <input
                    type="number"
                    name="Age"
                    value={userData.Age}
                    onChange={handleInputChange}
                    className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3"
                  />
                </div>
                <div className="join-gender">
                  <p className="join-placeholder">{t('gender')}</p>
                  <div className="flex w-full gap-4">
                    <div className="join-girls">
                      <input
                        type="radio"
                        id="female"
                        name="Gender"
                        value="Female"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="female" className="join-placeholder">{t('female')}</label>
                    </div>
                    <div className="join-boys">
                      <input
                        type="radio"
                        id="male"
                        name="Gender"
                        value="Male"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="male" className="join-placeholder">{t('male')}</label>
                    </div>
                    <div className="join-no_pref mb-3">
                      <input
                        type="radio"
                        id="none"
                        name="Gender"
                        value="Other"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="none" className="join-placeholder">{t('other')}</label>
                    </div>
                  </div>
                </div>

                <div className="join-phone">
                  <p className="join-placeholder">{t('contact')}</p>
                  <input
                    type="number"
                    name="Contact"
                    value={userData.Contact}
                    onChange={handleInputChange}
                    className="bg-[#ceb8f3] rounded-lg h-10 w-[90%] mb-3"
                  />
                </div>

                <div className="join-price mb-3">
                  <p className="join-placeholder">{t('EstimatedBugdet')} - {trip.estimatedBudget} Rs</p>
                </div>

                <button className="join-submit" type="submit">{t('join')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTrip
