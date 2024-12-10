// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { SiLinkedin, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer flex px-6 py-[60px] flex-col content-center items-center gap-8 xs:self-stretch bg-black text-white">
      <div className="footer-container w-full lg:w-[1224px] flex flex-col items-start gap-8 xs:self-stretch">
        <div className="logo-heading w-full lg:w-[440px] flex flex-col items-start gap-3 xs:self-stretch">
          <div className="logo-holder flex">
            <img src={FooterLogo} alt="" />
          </div>
          <h2 className=" text-2xl lg:text-[32px] font-bold text-white">
            Bersama Wujudkan Generasi Pemimpin Indonesia
          </h2>
        </div>
        <div className="footer-details flex flex-col lg:flex-row lg:justify-between items-start xs:gap-12 self-stretch">
          <div className="details flex flex-col items-start gap-4 w-56">
            <div className="detail flex items-center gap-3">
              <MdLocalPhone />
              <p className="text-base font-normal">+62-8225-8665-612</p>
            </div>
            <div className="detail flex items-center gap-3">
              <MdEmail />
              <p className="text-base font-normal">
                secretary@ideindonesia.org
              </p>
            </div>
            <div className="detail flex items-center gap-3">
              <MdLocationOn />
              <p className="text-base font-normal">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="footer-menu xs:hidden flex items-start gap-[40px]">
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
              <div className="social-media flex items-center gap-3 self-stretch">
                <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                  <SiLinkedin />
                </Link>
                <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                  <SiInstagram />
                </Link>
                <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                  <SiYoutube />
                </Link>
                <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                  <SiFacebook />
                </Link>
              </div>
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
            <div className="social-media flex items-center gap-3 self-stretch">
              <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                <SiLinkedin />
              </Link>
              <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                <SiInstagram />
              </Link>
              <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                <SiYoutube />
              </Link>
              <Link className="flex justify-center items-center p-3 rounded-lg bg-brand-red">
                <SiFacebook />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-b-[1px] w-96 lg:w-full flex-1 border-neutral-3" />
        <p className="text-sm font-bold">
          Copyright2024 IDE Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
