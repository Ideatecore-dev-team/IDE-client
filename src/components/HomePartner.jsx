/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./HomePartner.css";
import { fetchPartnerData } from "../api/api"; // Import the fetch function

export const HomePartner = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      const fetchedPartners = await fetchPartnerData();
      setPartners(fetchedPartners);
    };

    loadPartners();
  }, []);

  return (
    <div className="our-partner-section flex flex-col items-center self-stretch">
      <div className="our-partner-container flex w-full xs:px-6 lg:w-[1224px] flex-col items-start">
        <div className="heading flex items-center justify-center gap-6 self-stretch">
          <h5 className="text-base font-bold">OUR PARTNERS</h5>
          <hr className="border-b-[1px] flex-1 border-neutral-3" />
        </div>
        <div className="partners flex py-12 justify-center lg:justify-between items-start lg:items-center xs:content-start lg:gap-0 gap-y-6 gap-x-4 self-stretch flex-wrap lg:flex-nowrap">
          {partners.map((partner) => (
            <div key={partner.id} className="partner flex content-center items-center">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
