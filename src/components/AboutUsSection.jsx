// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutUsPhotos from "../assets/images/about-us-banner.png";

export const AboutUsSection = () => {
  return (
    <div className=" about-us-section flex flex-col items-start ">
      <div className=" about-us-container border-b-[1px] border-neutral-3 mx-auto xs:px-6 flex flex-col w-full lg:w-[1224px] xs:items-start">
        <div className="about-us-detail flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-between gap-12 py-12">
          <img
            src={aboutUsPhotos}
            className=" lg:w-[520px] lg:h-[260px] content-center items-center"
          />
          <div className="heading-and-desc lg:w-[520px] flex flex-col items-start gap-4">
            <h5 className="text-neutral-1 font-lato text-sm lg:text-base font-bold leading-normal">
              ABOUT US
            </h5>
            <h2 className="font-lato text-2xl lg:text-[32px] font-bold leading-normal text-neutral-1">
              Apa itu IDE Indonesia?
            </h2>
            <span className="font-lato text-justify text-neutral-2 text-base font-normal">
              Institute of Democracy and Education (IDE) Indonesia didirikan di
              Washington, D.C., Amerika Serikat, pada tahun 2014 oleh para
              cendekiawan Indonesia. IDE adalah organisasi non-profit yang
              menyediakan platform untuk ide-ide inovatif yang bertujuan membina
              generasi pemimpin Indonesia masa depan.
              <br />
              <br />
              IDE menghubungkan generasi muda, memungkinkan mereka untuk{" "}
              <a className="font-bold">"Connect the Dots"</a> dan terlibat dalam
              program-program yang mencari solusi demi kesejahteraan bangsa. IDE
              mengundang pemimpin muda, baik yang sedang menempuh studi di luar
              negeri maupun di Indonesia, untuk berpartisipasi aktif dan
              berkolaborasi dalam berbagai kegiatan yang selaras dengan ide,
              potensi, keterampilan, profesionalisme, dan idealisme mereka.
            </span>
            <a
              href="/our-program"
              className="text-brand-red font-lato text-[14px] font-bold underline decoration-solid decoration-auto underline-offset-auto"
            >
              Check Our Program
            </a>
          </div>
        </div>
        <div className=" mission-and-vision-container flex flex-col lg:flex-row pb-12 xs:gap-12 lg:justify-between items-start lg:items-center self-stretch">
          <div className=" mission-details flex lg:w-[520px] flex-col items-start gap-[16px]">
            <h5 className="text-neutral-1 font-lato text-[16px] font-bold leading-normal">
              OUR MISSION
            </h5>
            <span className="self-stretch font-lato text-justify text-neutral-2 text-[16px] font-normal">
              IDE mempersiapkan pemimpin masa depan dengan membangun citra
              global, mempromosikan kewarganegaraan global, dan mendukung
              persatuan melalui pendidikan dan inovasi untuk membangun demokrasi
              sejati.
            </span>
          </div>
          <hr className="w-full lg:hidden" />

          <div className=" vision-details flex lg:w-[520px] flex-col items-start gap-[16px]">
            <h5 className="text-neutral-1 font-lato text-[16px] font-bold leading-normal">
              OUR VISION
            </h5>
            <span className="self-stretch font-lato text-justify text-neutral-2 text-[16px] font-normal">
              IDE menghubungkan, memberdayakan, dan mengembangkan pemuda
              Indonesia untuk menjadi pemimpin yang bertanggung jawab secara
              sosial, berkontribusi pada demokrasi dan kesejahteraan masyarakat,
              dengan komitmen terhadap etika, hak asasi manusia, dan pendidikan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
