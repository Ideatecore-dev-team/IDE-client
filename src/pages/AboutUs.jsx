// eslint-disable-next-line no-unused-vars
import React from "react";
import { AboutUsSection } from "../components/AboutUsSection";
import { AboutUsImpact } from "../components/AboutUsImpact";
import { HomePartner } from "../components/HomePartner";

export const AboutUs = () => {
  return (
    <div className="About-Us">
      <AboutUsSection />
      <AboutUsImpact />
      <HomePartner />
    </div>
  );
};
