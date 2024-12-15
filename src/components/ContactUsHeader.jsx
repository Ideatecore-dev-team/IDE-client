// eslint-disable-next-line no-unused-vars
import React from "react";
import { ContactDetails } from "../components/ContactDetails";
import { Social } from "../components/Social";
import { ContactGetInTouch } from "./ContactGetInTouch";

export const ContactUsHeader = () => {
  return (
    <div className="contact-us-section flex justify-center items-start self-stretch">
      <div className="contact-us-container lg:w-[1224px] flex w-96 py-12 flex-col items-start">
        <div className="contact flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-12 self-stretch">
          <div className="contact-header w-auto lg:w-[571px] h-auto lg:h-[473px] flex flex-col justify-between items-start self-stretch lg:shrink-0">
            <div className="contact-title flex flex-col items-start gap-4 self-stretch">
              <h5 className="text-sm font-bold">CONTACT US</h5>
              <div className="contact-desc flex flex-col items-start gap-4 self-stretch">
                <h2 className="font-bold text-2xl">Let’s Collaborate!</h2>
                <p className="text-base">Butuh bantuan? hubungi kami!</p>
              </div>
              <hr className="w-full lg:w-[392px] my-4" />
              <ContactDetails textColor="text-neutral-2" iconColor="black" />
              <Social hideAt="desktop" />
            </div>
            <Social hideAt="mobile" />
          </div>

          <ContactGetInTouch />
        </div>
      </div>
    </div>
  );
};
