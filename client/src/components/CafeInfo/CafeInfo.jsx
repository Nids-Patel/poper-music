import React from "react";
import "./CafeInfo.css";
import { Icon } from "@iconify/react";
import { Cafe } from "../../Data/CafeData";

const Artistinfo = () => {
  return (
    <div className="ArtistInformation">
      <div className="Artistinfo">
        {Cafe.map((artist, id) => {
          return (
            <div className="Art">
              <span className="pin">{artist.pin}</span>
              <div className="con-A">
               <img
                  src={artist.img}
                  alt="profilepic"
                  className="artistImage"
              />
                <div className="name">
                  <span className="username">{artist.name}</span>
                  <span className="Profetion">Owner:-{artist.Art}</span>
                  
                  <span className="location"><Icon icon="akar-icons:location" id="space"/>{artist.location}</span>
                </div>
              </div>
              <button className="button fc-button">More info</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artistinfo;
