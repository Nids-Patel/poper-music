import React from 'react'
import { Icon } from "@iconify/react";
import './Home.css'

const Home = () => {
  return (
    <div>
         <div className="con">
        <div className="dashbord">
          <span id="dash">
            Hello <span id="username">Poper 👋</span>
            <Icon 
            icon="ci:notification-dot" className="dash-i" />
            <Icon icon="clarity:chat-bubble-solid-badged" className="dash-i1"  />
          </span>
        </div>
        <div className="holder">
          <div className="artist">
          <Icon icon="zondicons:music-artist"  className="bg-img"/>
            <Icon icon="bx:user" className="maincon-i" />
            <br />
            <br />
            <span className="lable-a"> Artists </span>
            <div className="info">
              <div className="register">
                <span className="artist-info">New Registed</span>
                <span className="artist-number"> 12</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Regular</span>
                <span> 120</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Active</span>
                <span> 20</span>
              </div><br/>
              <hr /><br />
              <div className="register">
                <span className="artist-info">Total Artist</span>
                <span> 310</span>
              </div>
            </div>
          </div>
          <div className="artist">
          <Icon icon="emojione-monotone:musical-score"   className="bg-img"/>
            <Icon icon="arcticons:bandsintown"  style={{fontSize: '85px',fontWeight:600, }} className="maincon-i" />
            <br />
            <br />
            <span className="lable-a"> Bands </span>
            <div className="info">
              <div className="register">
                <span className="artist-info">New Created</span>
                <span className="artist-number"> 17</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Fulled Space</span>
                <span> 30</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Available Space</span>
                <span> 20</span>
              </div><br/>
              <hr /><br />
              <div className="register">
                <span className="artist-info">Total Bands</span>
                <span> 57</span>
              </div>
            </div>
          </div>
          <div className="artist">
          <Icon icon="line-md:coffee-loop"   className="bg-img"/>
          <Icon icon="carbon:cafe"  className="maincon-i" />
            <br />
            <br />
            <span className="lable-a"> Café </span>
            <div className="info">
              <div className="register">
                <span className="artist-info">New Registed</span>
                <span className="artist-number"> 12</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Regular</span>
                <span> 120</span>
              </div>
              <br />
              <div className="register">
                <span className="artist-info">Active</span>
                <span> 20</span>
              </div><br/>
              <hr /><br />
              <div className="register">
                <span className="artist-info">Total Café</span>
                <span> 140</span>
              </div>
            </div>
          </div>
        </div>
        <div className="latest">
            HELLO ,   Latest  News Shows  heare.....</div>
      </div>
    </div>
  )
}

export default Home
