import React from "react";
import "./AdminPayment.css";
import { Icon } from "@iconify/react";
import PaymentCon from "../../../components/PaymentCon/PaymentCon";

const AdminPayment = () => {
  return (
    <div className="AdminPayment">
      <div className="mainContainer-P">
      <div className="dashboard">
        <div className="searchbar">
          <Icon icon="bx:search-alt" className="SearchIcon" />
          <input type="text" className="PaySearch" placeholder="Search.." />
        </div>
        <div className="dateSelect">
        <Icon icon="uil:calender" className="date-input"/>
          <select className="dateselect">
            <option selected value="date" className="option">
              <span>
              December - January 2022</span>
            </option>
            <option value="date">
              <span>
              December - January 2021</span>
            </option>
            <option value="date">
              <span>
              December - January 2020</span>
            </option>
          </select>
          
        </div>
      </div>
    <div className="contant">
      <PaymentCon />
    </div>
    </div>
    </div>
  );
};

export default AdminPayment;
