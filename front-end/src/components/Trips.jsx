import React, { useEffect,useState,useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from '../context/userContext';
import images from '../image';
function Trips(props) {
  const {userIdRef, userId, setUserId, currentTrip, setCurrentTrip } = useContext(UserContext);
    
    const [img,setImg] = useState('');
    useEffect(() => { 
        const randomNumber = Math.floor(Math.random() * 9);
        if (images[randomNumber]) {
            setImg(images[randomNumber].url);
        }
        
    }, []);


  return (
    <div className=''>
        <div className=""
            style={{ 
                backgroundImage: `url(${img})`, 
                width: "250px", // Added 'px' for units
                height: "320px", // Added 'px' for units
                borderRadius: "20px", // Changed to camelCase
                objectFit:"contain",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center"

            }}
        >
            
            <p className="heading capitalize">{props.title}</p>
            <div className="bottom">
                <div className="flex flex-col ">
                  <div className='flex items-center gap-2'>
                  <FaUser color="white" className='' />
                  <p className="text-white">{props.count}</p>
                  </div>
                  <div className='text-white text-xl'>
                    <p>{props.preference}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="text-white text-xl">₹{props.budget}</div>
                  <Link to={"/join"}>
                  <div onClick={()=>{setCurrentTrip(props.id)}} className="book">Explore</div>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trips