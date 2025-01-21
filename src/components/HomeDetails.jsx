// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { MdPeople } from "react-icons/md";

export const HomeDetails = () => {
  return (
    <div className="details-section flex justify-center items-center self-stretch ">
      <div className="details-container flex lg:flex-row flex-col w-full xs:px-6 lg:w-[1224px] py-12 items-start lg:items-center lg:content-between border-b-[1px] border-neutral-3 gap-10 lg:gap-12">
        <div className="our-mission lg:w-[568px] flex flex-col items-start gap-4 xs:self-stretch">
          <h5 className=" text-sm lg:text-base font-bold">OUR MISSION</h5>
          <div className="heading-desc flex flex-col items-start gap-3 self-stretch">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-1">
            Melahirkan Manusia Indonesia Berkualitas melalui Ilmu Pengetahuan dan Pengembangan Keterampilan
            </h2>
            <p className="text-base font-normal text-neutral-2">
            IDE Indonesia hadir sebagai jembatan bagi generasi muda di seluruh Indonesia dalam mewujudkan 
            mimpi dan cita-cita mereka melalui pemberdayaan, 
            kolaborasi, dan gotong-royong menghadirkan solusi inovatif bagi kemajuan bangsa dan negara.
            </p>
            <Link
              className="text-base font-bold underline decoration-solid text-neutral-1"
              to="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
        <hr className="w-full lg:hidden" />
        <div className="border-r-[1px] border-neutral-3 h-[402px] lg:block hidden"></div>
        <div className="our-impact lg:w-[568px] flex flex-col items-start gap-8 xs:self-stretch">
          <div className="heading-desc flex flex-col content-center items-start gap-4">
            <h5 className=" text-sm lg:text-base font-bold">OUR IMPACT</h5>
            <p className="text-base font-normal text-neutral-2">
            Memberikan akses pendidikan, informasi, dan berbagai pelatihan seluas-luasnya bagi seluruh anak 
            bangsa guna mempersiapkan pemimpin masa depan Indonesia berdaya saing global.
            </p>
          </div>
          <div className="all-impact flex w-80 flex-col items-start gap-8">
            <div className="impact-1 flex flex-col items-start gap-2 self-stretch">
              <div className="point flex items-center gap-4 self-stretch">
                <div className="icon flex size-9 justify-center items-center rounded-lg bg-brand-red hover:bg-brand-red-hover">
                  <MdLocationOn className="text-white size-6" />
                </div>
                <h1 className=" text-3xl font-bold">34</h1>
              </div>
              <p className="text-base font-normal text-neutral-2">
                Provinsi diseluruh Indonesia
              </p>
            </div>
            <div className="impact-2 flex flex-col items-start gap-2 self-stretch">
              <div className="point flex items-center gap-4 self-stretch">
                <div className="icon flex size-9 justify-center items-center rounded-lg bg-brand-red hover:bg-brand-red-hover">
                  <MdLocationCity className="text-white size-6" />
                </div>
                <h1 className=" text-3xl font-bold">100+</h1>
              </div>
              <p className="text-base font-normal text-neutral-2">
                Kota diseluruh Indonesia
              </p>
            </div>
            <div className="impact-3 flex flex-col items-start gap-2 self-stretch">
              <div className="point flex items-center gap-4 self-stretch">
                <div className="icon flex size-9 justify-center items-center rounded-lg bg-brand-red hover:bg-brand-red-hover">
                  <MdPeople className="text-white size-6" />
                </div>
                <h1 className=" text-3xl font-bold">10</h1>
              </div>
              <p className="text-base font-normal text-neutral-2">
                <span className="font-bold">Child Organization</span>{" "}
                (IDEpreneur, <br />
                IDEpeduli, etc.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
