import React from "react";
import "./Feedback.css";
import { IoStarSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
function Feedback() {
  const { t } = useTranslation();
  return (
    <div className="page" id="page_3">
      <div className="container3">
        <div className="left_side2">
          <h1 className="heading3">{t("valuablefeedback")}</h1>
          <p>{t("reviewsandrating")}</p>
          <div className="rating">
            <div className="rating1">
              <p className="name">{t("joy")}</p>
              <div className="stars">
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
              </div>
              <p className="feedback">{t("joyreview")}</p>
            </div>
            <div className="rating1">
              <p className="name">{t("sneha")}</p>
              <div className="stars">
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp className="color" />
                <IoStarSharp />
              </div>
              <p className="feedback">{t("joyreview")} </p>
            </div>
          </div>
        </div>
        <div className="right_side">
          <form action="" className="form">
            <h1>{t("feedbacktitle")}</h1>
            <input type="text" placeholder={t("name")} id="name" />
            <input type="text" placeholder={t("email")} id="email" />
            <textarea placeholder={t("message")} id="Message" />
            <div className="rate flex">
              {t("Rate")} :
              <span className="flex">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
            </div>
            <button className="Submit">{t("Submit")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
