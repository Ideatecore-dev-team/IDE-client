/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
import { ContactDetails } from "./ContactDetails";
import { Social } from "./Social";
import { motion } from "framer-motion";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const rect = document.getElementById("footer").getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
      // } else {
      // setIsVisible(false); // Reset visibility if not in view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      className="footer flex px-6 py-[60px] flex-col content-center items-center gap-8 xs:self-stretch lg:bg-batik-desktop-bg bg-cover bg-batik-mobile-bg text-white"
      initial={{ opacity: 0, y: 800 }} // Start from below
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // Animate based on visibility
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="footer-container w-full lg:w-[1224px] flex flex-col items-start gap-8 xs:self-stretch ">
        <div className="logo-heading w-full lg:w-[440px] flex flex-col items-start gap-3 xs:self-stretch">
          <div className="logo-holder flex">
            <img src={FooterLogo} alt="Footer Logo" />
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
                <Link
                  className="text-base font-normal"
                  to="/our-program"
                  onClick={scrollToTop}
                >
                  Our Program
                </Link>
                <Link
                  className="text-base font-normal"
                  to="/gallery"
                  onClick={scrollToTop}
                >
                  Gallery
                </Link>
                <Link
                  className="text-base font-normal"
                  to="/articles"
                  onClick={scrollToTop}
                >
                  Article
                </Link>
                <Link
                  className="text-base font-normal"
                  to="/contact-us"
                  onClick={scrollToTop}
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="border-r-[1px] border-neutral-3 h-[192px] lg:block hidden"></div>
            <div className="social flex flex-col items-start gap-3">
              <p className="text-sm font-bold">Follow Us</p>
              <Social />
            </div>
            <div className="border-r-[1px] border-neutral-3 h-[192px] lg:block hidden"></div>
            <div className="subscribe w-[302px]  items-start gap-4 lg:block hidden">
              <p className="text-sm font-bold lg:self-stretch pb-3">
                Berlangganan Berita kami
              </p>
              <Subscribe />
            </div>
          </div>
          <div className="explore lg:hidden flex flex-col gap-4">
            <p className="text-sm font-bold">Explore</p>
            <div className="footer-link flex flex-col items-start gap-6 self-stretch">
              <Link
                className="text-base font-normal"
                to="/our-program"
                onClick={scrollToTop}
              >
                Our Program
              </Link>
              <Link
                className="text-base font-normal"
                to="/gallery"
                onClick={scrollToTop}
              >
                Gallery
              </Link>
              <Link
                className="text-base font-normal"
                to="/articles"
                onClick={scrollToTop}
              >
                Article
              </Link>
              <Link
                className="text-base font-normal"
                to="/contact-us"
                onClick={scrollToTop}
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="social lg:hidden flex flex-col items-start gap-3">
            <p className="text-sm font-bold">Follow Us</p>
            <Social />
          </div>
        </div>
        {/* <hr className="border-b-[1px] w-full xs:px-6 flex-1 border-neutral-3" /> */}
        <div className="subscribe flex w-[302px] flex-col items-start gap-4 lg:hidden">
          <p className="text-sm font-bold lg:self-stretch">
            Berlangganan Berita kami
          </p>
          <Subscribe />
        </div>
        <hr className="border-b-[1px] w-full xs:px-6 flex-1 border-neutral-3" />
        <p className="text-sm font-bold">
          Copyright {currentYear} IDE Indonesia. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
