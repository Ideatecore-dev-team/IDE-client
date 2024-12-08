// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer flex px-6 py-[60px] flex-col content-center items-center gap-8 self-stretch bg-black text-white">
      <div className="footer-container flex flex-col items-start gap-8 self-stretch">
        <div className="logo-heading flex flex-col items-start gap-3 self-stretch">
          <div className="logo-holder flex">
            <img src={FooterLogo} alt="" />
          </div>
          <h2 className=" text-2xl font-bold text-white">
            Bersama Wujudkan Generasi Pemimpin Indonesia
          </h2>
        </div>
        <div className="footer-details flex flex-col items-start gap-12 self-stretch">
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
          <div className="explore flex flex-col gap-4">
            <p className="text-sm font-bold">Explore</p>
            <div className="footer-link flex flex-col items-start gap-6 self-stretch">
              <Link className="text-base font-normal">Our Program</Link>
              <Link className="text-base font-normal">Gallery</Link>
              <Link className="text-base font-normal">Article</Link>
              <Link className="text-base font-normal">FAQ</Link>
            </div>
          </div>
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
        <hr className="border-b-[1px] w-96 flex-1 border-neutral-3" />
        <p className="text-sm font-bold">
          Copyright2024 IDE Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
