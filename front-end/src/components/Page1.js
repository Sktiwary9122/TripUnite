import React, { useState, useEffect,useContext } from "react";
import "./Page1.css";

import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import axios from "axios";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from '../context/userContext';
function Page1() {
  const [userName,setUsername] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    const storedLocalData = localStorage.getItem('userData');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true' && storedLocalData) {
      const userData = JSON.parse(storedLocalData);// Parse the stored JSON data
      setLoggedInUser(true);
      setUsername(userData.user.fullName); // Use the parsed data
    }
  }, []);
  function visibleHandler1() {
    document.querySelector(".buttons").classList.toggle("visible");
  }
  const handleLogOut = async () => {
    try {
      setLoggedInUser(null);
      await axios.post("http://localhost:8000/api/auth/logout", {}, { withCredentials: true });
      localStorage.clear();
      toast.success("Logged out successfully");
      navigate("/login");
    } 
    catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="page">
      <nav className="navbar1">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="about-logo"></div>
        </Link>
        <div className="options1">
          <div className="lang1">
            <LanguageSelector />
          </div>
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="about1">{t("about")}</div>
          </Link>
          {loggedInUser ? (
            <div className="contact1" onClick={visibleHandler1}>
              {t("Welcome")} {userName}
            </div>
          ) : (
            <Link
              to={"/login"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="contact1">{t("login")}</div>
            </Link>
          )}
          <div className="buttons flex flex-col gap-2 absolute top-20 right-16 visible">
            <button className="bg-[#a767e3] rounded-xl p-2" onClick={handleLogOut}>
              Log Out
            </button>
            <button className="bg-[#a767e3] rounded-xl p-2 ">
              Dashboard
            </button>
           
          </div>
          
        </div>
      </nav>
      <div className="mainbody">
        <h1 className="title1">{t("discover")}</h1>
        <p className="TripUnite">TripUnite</p>

        <div className="start">
          <button>{t("getStarted")}</button>
        </div>

        <input
          type="text"
          placeholder={t("search")}
          className="search_bar"
        ></input>
      </div>

      <Link to={"/main"}>
        <div className="explore">
          <button>{t("explore")}</button>
        </div>
      </Link>
    </div>
  );
}

export default Page1;
