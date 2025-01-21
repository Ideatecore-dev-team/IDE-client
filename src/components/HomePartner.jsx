/* eslint-disable no-unused-vars */
import React from "react";
import "./HomePartner.css";
import Partner1 from "../assets/images/partner-1.png";
import Partner2 from "../assets/images/partner-2.png";
import Partner3 from "../assets/images/partner-3.png";
import Partner4 from "../assets/images/partner-4.png";

export const HomePartner = () => {
  return (
    <div className="our-partner-section flex flex-col items-center self-stretch">
      <div className="our-partner-container flex w-full xs:px-6 lg:w-[1224px] flex-col items-start">
        <div className="heading flex items-center justify-center gap-6 self-stretch">
          <h5 className="text-base font-bold">OUR PARTNERS</h5>
          <hr className="border-b-[1px] flex-1 border-neutral-3" />
        </div>
        <div className="partners flex py-12 justify-center lg:justify-between items-start lg:items-center xs:content-start lg:gap-0 gap-y-6 gap-x-4 self-stretch flex-wrap lg:flex-nowrap">
          <div className="partner partner-1 flex content-center items-center">
            <img src={Partner1} alt="" />
          </div>
          <div className="partner partner-2 flex content-center items-center">
            <img src={Partner2} alt="" />
          </div>
          <div className="partner partner-3 flex content-center items-center">
            <img src={Partner3} alt="" />
          </div>
          <div className="partner partner-4 flex content-center items-center">
            <img src={Partner4} alt="" />
          </div>
          <div className="partner partner-1 flex content-center items-center">
            <img src={Partner1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
