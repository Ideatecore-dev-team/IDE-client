// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
import { ContactDetails } from "./ContactDetails";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer className="footer flex px-6 py-[60px] flex-col content-center items-center gap-8 xs:self-stretch lg:bg-batik-desktop-bg bg-cover bg-batik-mobile-bg text-white">
      <div className="footer-container w-full lg:w-[1224px] flex flex-col items-start gap-8 xs:self-stretch ">
        <div className="logo-heading w-full lg:w-[440px] flex flex-col items-start gap-3 xs:self-stretch">
          <div className="logo-holder flex">
            <img src={FooterLogo} alt="" />
          </div>
          <h2 className=" text-2xl lg:text-[32px] font-bold text-white">
            Bersama Wujudkan Generasi Pemimpin Indonesia
          </h2>
        </div>
        <div className="footer-details flex flex-col lg:flex-row lg:justify-between items-start gap-12 self-stretch">
          <ContactDetails textColor="white" iconColor="white" />
          <div className="footer-menu hidden lg:flex items-start gap-[40px]">
            <div className="explore flex flex-col gap-4">
              <p className="text-sm font-bold">Explore</p>
              <div className="footer-link flex flex-col items-start gap-6 self-stretch">
                <Link className="text-base font-normal">Our Program</Link>
                <Link className="text-base font-normal">Gallery</Link>
                <Link className="text-base font-normal">Article</Link>
                <Link className="text-base font-normal">FAQ</Link>
              </div>
            </div>
            <div className="border-r-[1px] border-neutral-3 h-[192px] lg:block hidden"></div>
            <div className="social flex flex-col items-start gap-3">
              <p className="text-sm font-bold">Follow Us</p>
              <Social />
            </div>
          </div>
          <div className="explore lg:hidden flex flex-col gap-4">
            <p className="text-sm font-bold">Explore</p>
            <div className="footer-link flex flex-col items-start gap-6 self-stretch">
              <Link className="text-base font-normal">Our Program</Link>
              <Link className="text-base font-normal">Gallery</Link>
              <Link className="text-base font-normal">Article</Link>
              <Link className="text-base font-normal">FAQ</Link>
            </div>
          </div>
          <div className="social lg:hidden flex flex-col items-start gap-3">
            <p className="text-sm font-bold">Follow Us</p>
            <Social />
          </div>
        </div>
        <hr className="border-b-[1px] w-[342px] lg:w-full flex-1 border-neutral-3" />
        <p className="text-sm font-bold">
          Copyright2024 IDE Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
