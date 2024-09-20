import React from "react";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";
import "./LanguageSelector.css";

const languages = [
  { code: "en", lang: "English" },
  { code: "हिं", lang: "Hindi" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  function changeLanguage(lngCode) {
    localStorage.setItem("lang", lngCode);
    i18n.changeLanguage(lngCode);
  }

  function visibleHandler() {
    document.querySelector(".lang-btns").classList.toggle("visible");
  }

  return (
    <div className="lang-top">
      <div className="lang-letter" onClick={visibleHandler}>
        {i18n.language}
      </div>

      <div className="globe-btn">
        <TfiWorld className="world" onClick={visibleHandler}></TfiWorld>
        <div className="lang-btns visible" onClick={visibleHandler}>
          {languages.map((lng) => (
            <button
              className="lang-button"
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
