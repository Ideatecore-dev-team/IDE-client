// eslint-disable-next-line no-unused-vars
import React from "react";
import { AboutUsSection } from "../components/AboutUsSection";
import { ContactFAQ } from "../components/ContactFAQ";
import { HomePartner } from "../components/HomePartner";

export const AboutUs = () => {
    return (
        <div className="FAQ">
        <AboutUsSection />
        {/* <ContactFAQ /> */}
        <HomePartner />
        </div>
    );
};
