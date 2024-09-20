import React, { useState, useEffect } from "react";
import "./Page1.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
function Page1() {
  const { t } = useTranslation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log({ user });
    if (user && user !== "undefined" && user !== "") {
      setLoggedInUser(user); // Assuming fullName is stored in localStorage
    } else {
      setLoggedInUser(null);
    }
  }, []);
  function visibleHandler1() {
    document.querySelector(".logout").classList.toggle("visible");
  }
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLoggedInUser(null);
    visibleHandler1();
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
              {t("Welcome")} {t(loggedInUser)}
            </div>
          ) : (
            <Link
              to={"/login"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="contact1">{t("login")}</div>
            </Link>
          )}
          <div className="logout visible " onClick={handleLogOut}>
            Log Out
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
