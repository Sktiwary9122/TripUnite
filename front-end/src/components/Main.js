import React, { useEffect, useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trips from './Trips';
import Spinner from './Spinner';

function Main() {
  const { t } = useTranslation();
  const [tripss, setTrips] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/api/auth/allTrips');

        // Check if the response is okay
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const allTrips = await response.json();
        console.log('Fetched trips:', allTrips); // Log the fetched trips
        setTrips(allTrips);
      } catch (error) {
        console.error('Fetch error:', error); // Log the error
        toast.error('Please try again!');
      } finally {
        setLoading(false); // Stop loading whether successful or failed
      }
    }

    fetchData();
  }, []);

  return (
    <div className="background">
      <div className="wrapper1">
        <div className="container1 flex-col">
          <div className="flex w-full justify-between px-20">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <div className="main-logo"></div>
            </Link>
            <div className="flex gap-10 text-white text-xl mt-4">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ul className="home">{t('home')}</ul>
              </Link>
              <ul className="lang">
                <LanguageSelector />
              </ul>
              <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ul className="about">{t('about')}</ul>
              </Link>
              <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ul className="main-contact">{t('contactus')}</ul>
              </Link>
            </div>
          </div>

          <h1 className="mt-5 text-5xl text-white font-semibold">{t('Adventureawaits')}</h1>
          <div className='flex h-[600px] w-full justify-center items-center gap-5'>
            {loading ? (
              <Spinner />
            ) : (
                tripss.trips.map((trip) => (
                  <Trips
                    key={trip._id}
                    title={trip.Destination}
                    count={trip.TravellerCount}
                    budget={trip.estimatedBudget}
                    preference={trip.Gender}
                    
                  />
                ))
              
            )}
          </div>

          <Link to="/create">
            <div className="create-trip">
              <button>{t('createtrip')}</button>
            </div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Main;
