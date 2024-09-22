import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Trips from './Trips';

function Dashboard() {
  const [finalData, setFinalData] = useState([]); // initialize as an object
  const[userName,setuseName] = useState('');

  async function fetchuserTrips() {
    const response = await axios.get("http://localhost:8000/api/auth/userTrips", {
      withCredentials: true,
    });
    setFinalData(response.data); // set the data from the response
    //ab name add krna hai jisme local storage se pura user data fetch kr k fullName ko nikal rahe hai
    const storedLocalData = localStorage.getItem('userData');
    const userData = JSON.parse(storedLocalData);
    console.log(userData.user.fullName)
    setuseName(userData.user.fullName)
  }

  useEffect(() => {
    fetchuserTrips();
    const storedLocalData = localStorage.getItem('userData');
    const userData = JSON.parse(storedLocalData);

    console.log(userData.user.fullName)
    setuseName(userData.user.fullName)
  }, []);

  // Ensure finalData.trips exists and is an array before rendering
  if (!finalData.trips || finalData.trips.length === 0) {
    return <div>No trips available.</div>; 
  }

  return (
    <div className="bg-custom-gradient text-white h-[100vh] flex flex-col">
      <h1 className="text-5xl p-10 uppercase">Welcome {userName}</h1>
      <div className="border-t-2 w-[80%] mx-auto flex">
        <div className="border-r-2 w-[20%] p-7 gap-10 flex flex-col">
          <div onClick={fetchuserTrips} className="text-xl p-5">Created trips</div>
          <div className="text-xl p-5 pt-7">Joined trips</div>
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
  );
}

export default Dashboard;
