import React from "react";
import "./Maincom.css";
import { Icon } from "@iconify/react";
import Home from "../../pages/AdminPages/Home/Home";
import Artist from "../../pages/AdminPages/Artist/Artist";
import Allaritst from "../../components/Allartist/Allartist"
import AdminPayment from "../../pages/AdminPages/AdminPayment/AdminPayment"
import AdminBand from "../../pages/AdminPages/AdminBand/AdminBand"
import AdminCafe from "../../pages/AdminPages/AdminCafe/AdminCafe";
import Allband from "../../components/Allband/Allband"
import Allcafe from "../../components/Allcafe/Allcafe"

const Maincom = () => {
  return (
    <div className="Maincom">
       {/* this is a home page */}
    {/* <Home /> */}
        {/* This is a Artist page */}
    {/* <Artist /> */}
    {/* <Allaritst /> */}

    {/* <AdminBand /> */}
    {/* <Allband /> */}


    {/* <AdminCafe /> */}
    <Allcafe />
    {/* <AdminPayment /> */}
    
    </div>
  );
};

export default Maincom;





