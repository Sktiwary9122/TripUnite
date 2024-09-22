import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from '../context/userContext';

function Login() {
  // const userIdRef = useContext(UserContext);
  const {userIdRef, userId, setUserId, currentTrip, setCurrentTrip } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  
  useEffect(() => {
      const storedAuth = localStorage.getItem('isAuthenticated');
      const storedUserData = localStorage.getItem('userData');

      if (storedAuth === 'true' && storedUserData) {
        setIsAuthenticated(true);
        const user = JSON.parse(storedUserData);
        setUserData(user);
        console.log(user)
        userIdRef.current = `Welcome ${user.fullName}`; // Set userIdRef
      }
  }, [userIdRef]);

  const handleSwitch1 = () => {
    document.querySelector(".loginMsg").classList.toggle("visibility");
    document.querySelector(".frontbox").classList.add("moving");
    document.querySelector(".signupMsg").classList.toggle("visibility");
    document.querySelector(".signup").classList.toggle("hide");
    document.querySelector(".login").classList.toggle("hide");
  };

  const handleSwitch2 = () => {
    document.querySelector(".loginMsg").classList.toggle("visibility");
    document.querySelector(".frontbox").classList.remove("moving");
    document.querySelector(".signupMsg").classList.toggle("visibility");
    document.querySelector(".signup").classList.toggle("hide");
    document.querySelector(".login").classList.toggle("hide");
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        loginData,
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      toast.success("Login successful!");
      const userId = response.data.Name;
      userIdRef.current = userId;
      setUserId(userId);
      setIsAuthenticated(true);
      setUserData(response.data);
      localStorage.setItem('isAuthenticated', 'true'); // Use sessionStorage
      localStorage.setItem('userData', JSON.stringify(response.data)); // Use sessionStorage
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.errors[0]?.msg || "Login failed!");
    }
  };

  const handleSignup = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/auth/register",
        signupData
      );
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.errors[0]?.msg || "Signup failed!");
    }
  };

  return (
    <div className="background1">
      <ToastContainer />
      <div className="container">
        <div className="backbox">
          <div className="loginMsg ">
            <div className="textcontent" onClick={handleSwitch1} id="switch1">
              <p className="title">{t("donthaveaccount")}</p>
              <Link to="/signup">
                <button>{t("signup")}</button>
              </Link>
            </div>
          </div>
          <div className="signupMsg visibility ">
            <div className="textcontent" onClick={handleSwitch2} id="switch2">
              <p className="title">{t("haveanaaccount")}</p>
              <Link to="/login">
                <button>{t("logg")}</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="frontbox">
          <div className="login">
            <h2>{t("logg")}</h2>
            <div className="inputbox">
              <input
                type="text"
                name="email"
                placeholder={t("email")}
                value={loginData.email}
                onChange={(e) => handleInputChange(e, "login")}
              />
              <input
                type="password"
                name="password"
                placeholder={t("password")}
                value={loginData.password}
                onChange={(e) => handleInputChange(e, "login")}
              />
            </div>
            <p>{t("forgetpass")}</p>
            <button onClick={handleLogin}>{t("logg")}</button>
          </div>

          <div className="signup hide">
            <h2>{t("signup")}</h2>
            <div className="inputbox">
              <input
                type="text"
                name="fullName"
                placeholder={t("fullname")}
                value={signupData.fullName}
                onChange={(e) => handleInputChange(e, "signup")}
              />
              <input
                type="text"
                name="email"
                placeholder={t("email")}
                value={signupData.email}
                onChange={(e) => handleInputChange(e, "signup")}
              />
              <input
                type="password"
                name="password"
                placeholder={t("password")}
                value={signupData.password}
                onChange={(e) => handleInputChange(e, "signup")}
              />
            </div>
            <button onClick={handleSignup}>{t("signup")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
