// eslint-disable-next-line no-unused-vars  
import React from "react";  
import Logo from "../assets/images/logo-color.png";  
import {  
  MdHowToVote,  
  MdMenuBook,  
  MdPeople,  
  MdLightbulb,  
  MdStarRate,  
} from "react-icons/md";  

import { SiMediamarkt } from "react-icons/si";
  
export const OurProgramHeader = () => {  
  const OurProgramData = [  
    {  
      program: "Democracy Affairs",  
      desc: "Kajian dan penelitian demokrasi-politik atas isu-isu terkini di level nasional dan global.",  
      icon: <MdHowToVote size={24} className="text-white" />,  
    },  
    {  
      program: "Education Affairs",  
      desc: "Memberikan akses informasi dan pendidikan seluas-luasnya bagi seluruh anak bangsa.",  
      icon: <MdMenuBook size={24} className="text-white" />,  
    },  
    {  
      program: "Social Affairs",  
      desc: "Menjaga tradisi dan mempromosikan budaya luhur Indonesia berdasarkan semangat Pancasila.",  
      icon: <MdPeople size={24} className="text-white" />,  
    },  
    {  
      program: "Entrepreneurship Affairs",  
      desc: "Memberdayakan seluruh potensi ekonomi lokal di berbagai sektor dan membawanya ke panggung global.",  
      icon: <MdLightbulb size={24} className="text-white" />,  
    },  
    {  
      program: "Media, Art, And Creative Affairs",  
      desc: "Menciptakan anak-anak bangsa kreatif, inovatif, adaptif, dan berdaya saing global melalui inovasi media, seni, dan industri kreatif.",  
      icon: <SiMediamarkt size={24} className="text-white" />,  
    },  
  ];  
  
  return (  
    <div className="our-program-section flex items-start justify-center">  
      <div className="our-program-container w-full xs:mx-6 lg:w-[1224px] flex flex-col items-center border-b-[1px] border-l-neutral-3">  
        <div className="desc flex lg:w-[520px] py-12 flex-col items-start gap-4 self-stretch">  
          <h5 className="text-sm lg:text-base font-bold">OUR PROGRAM</h5>  
          <img src={Logo} alt="" />  
          <div className="heading-desc flex flex-col items-start gap-3 self-stretch">  
            <h2 className="text-2xl lg:text-[32px] text-left font-bold">  
              Menghubungkan Para Pemimpin Muda untuk Berkreasi, Berkolaborasi, dan Mempersiapkan Diri.  
            </h2>  
            <p className="text-base text-justify">  
              Kami menyediakan ruang bagi seluruh anak bangsa untuk belajar, berkolaborasi dan berperan   
              melalui berbagai program di bidang riset dan politik, pendidikan dan hukum, sosial, seni budaya dan  
              keagamaan, kewirausahaan, serta inovasi media dan kreatif. IDE Indonesia mendukung penuh seluruh aktivitas  
              yang dapat mencerdaskan kehidupan bangsa.  
            </p>  
          </div>  
        </div>  
        <div className="programs pb-12 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start lg:justify-between xs:gap-8 lg:gap-y-8 self-stretch">  
          {OurProgramData.map((programData, index) => (  
            <div key={index} className="lg:w-[300px] flex flex-col items-start gap-2 lg:gap-3 self-stretch">  
              <div className="program-name flex gap-3 self-stretch items-center">  
                <div className="icon flex p-3 items-center justify-center rounded-lg bg-brand-red hover:bg-brand-red-hover">  
                  {programData.icon}  
                </div>  
                <h4 className="text-xl font-bold">{programData.program}</h4>  
              </div>  
              <p className="text-base">{programData.desc}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  
