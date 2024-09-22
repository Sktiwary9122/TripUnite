import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Trips from './Trips';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import Spinner from './Spinner';

function Dashboard() {
  const { t } = useTranslation();
  const [finalData, setFinalData] = useState({ trips: [] }); // initialize as an object
  const [who, setWho] = useState(true);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true); // Loading state

  async function fetchUserTrips() {
    setLoading(true); // Start loading
    try {
      const response = await axios.get("http://localhost:8000/api/auth/userTrips", {
        withCredentials: true,
      });
      setFinalData(response.data); // Set the data from the response

      const storedLocalData = localStorage.getItem('userData');
      const userData = JSON.parse(storedLocalData);
      setUserName(userData.user.fullName);
      setWho(true);
    } catch (error) {
      console.error("Error fetching user trips:", error);
      // Handle error if necessary
    } finally {
      setLoading(false); // End loading
    }
  }

  useEffect(() => {
    fetchUserTrips();
  }, []);

  // Show spinner while loading
  if (loading) {
    return <div className="bg-custom-gradient h-screen w-screen flex justify-center items-center"><Spinner /></div>;
  }

  return (
    <div className="bg-custom-gradient text-white h-auto flex flex-col">
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
      <h1 className="text-5xl p-10 uppercase">Welcome {userName}</h1>
      <div className="border-t-2 w-[80%] mx-auto flex">
        <div className="border-r-2 w-[20%] p-7 gap-10 flex flex-col">
          <div onClick={fetchUserTrips} className="text-xl p-5">Created trips</div>
          <div className="text-xl p-5 pt-7">Joined trips</div>
        </div>
        <div>
          <div className="text-xl mx-5 mt-5">
            {who ? `Trips Created by ${userName}` : `Trips Joined by ${userName}`}
          </div>
          <div className='flex gap-5 flex-wrap p-5'>
            {finalData.trips.map((trip) => (
              <Trips
                key={trip._id}
                title={trip.Destination}
                count={trip.TravellerCount}
                budget={trip.estimatedBudget}
                preference={trip.Gender}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
