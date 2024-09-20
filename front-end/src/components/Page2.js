import React from 'react'
import "./Page2.css"
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";
import { FaBookBookmark } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
function Page2() {
  const{ t}=useTranslation()
  return (
    <div className="page" id="page_2">
        
        <div className="features">
          <div className="box">
            <div className="head">{t('discoverplaces')}</div>
            <TfiWorld id="page2-globe"/>
            <p className="description">{t('uncover')}</p>
          </div>
          <div className="box">
            <div className="head">{t('plantrips')}</div>
            <FaBookBookmark id="page2-book"/>
            <p className="description">{t('seameless')}</p>
          </div>
          <div className="box">
            <div className="head">{t('travel')}</div>
            <CiLocationOn id='page2-location'/>
            <p className="description">{t('connect')}</p>
          </div>
          <div className="box">
            <div className="head">{t('share')}</div>
            <AiOutlineLike id='page2-location'/>
            <p className="description">{t('sharejourney')}</p>
          </div>
        </div>

        <p className="upcomingtrips">{t('upcomingtrips')}</p>

        <div className="upcoming_trips">
          <div className="box" id="card1">
            <p>{t('Kashmir')} <br/> {t('july')}12-20</p> 
          </div>
          <div className="box" id="card2">
            <p>{t('Kerela')}<br/>{t('july')} 5-10</p>
          </div>
          <div className="box" id="card3">
            <p>{t('Mumbai')} <br/>{t('july')} 10-15</p>
          </div>
          <div className="box" id="card4">
            <p>{t('Agra')} <br/>{t('july')} 18-22</p>
          </div>
        </div>
      </div>
  )
}

export default Page2