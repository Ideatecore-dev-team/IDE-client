// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutUsPhotos from "../assets/images/about-us-banner.png";

export const AboutUsSection = () => {
    return (
        <div className=" about-us-section flex mx-auto lg:w-[1224px] flex-col items-center border-b text-neutral-3 justify-center">
            <div className=" about-us-container flex py-[48px] justify-between items-center self-stretch">
                <div className=" about-us-detailflex lg:w-[520px] flex-col items-start gap-4">
                    <h5 className="text-neutral-1 font-lato text-lg font-bold leading-normal">
                        ABOUT US
                    </h5>
                    <div className=" heading-and-desc flex flex-col items-start gap-[12px] self-stretch">
                        <h2 className=" self-stretch font-lato text-[32px] font-bold leading-normal text-neutral-1">
                        Apa itu IDE Indonesia?
                        </h2>
                        <span className=" self-stretch font-lato text-justify text-neutral-2 text-[16px] font-normal">
                            Institute of Democracy and Education (IDE) Indonesia didirikan di Washington, D.C., Amerika Serikat, 
                            pada tahun 2014 oleh para cendekiawan Indonesia. IDE adalah organisasi non-profit yang menyediakan platform 
                            untuk ide-ide inovatif yang bertujuan membina generasi pemimpin Indonesia masa depan.<br/><br/>
                            
                            IDE menghubungkan generasi muda, memungkinkan mereka untuk <a className=" font-bold">"Connect the Dots"</a> dan terlibat dalam program-program 
                            yang mencari solusi demi kesejahteraan bangsa. IDE mengundang pemimpin muda, baik yang sedang menempuh studi di luar negeri 
                            maupun di Indonesia, untuk berpartisipasi aktif dan berkolaborasi 
                            dalam berbagai kegiatan yang selaras dengan ide, potensi, keterampilan, profesionalisme, dan idealisme mereka.
                        </span>
                        <a href="/program" className="text-brand-red font-lato text-[14px] font-bold underline decoration-solid decoration-auto underline-offset-auto">
                        Check Our Program
                        </a>
                    </div>
                </div>
                <img src={aboutUsPhotos} className=" flex lg:w-[520px] lg:h-[260px] content-center items-center" />
            </div>
            <div className=" mission-and-vission-container flex pb-[48px] justify-between items-center self-stretch">
                <div className=" mission-details flex lg:w-[520px] flex-col items-start gap-[16px]">
                    <h5 className="text-neutral-1 font-lato text-[16px] font-bold leading-normal">
                    OUR MISSION
                    </h5>
                    <span className="self-stretch font-lato text-justify text-neutral-2 text-[16px] font-normal">
                    IDE mempersiapkan pemimpin masa depan dengan membangun citra global, mempromosikan kewarganegaraan global, 
                    dan mendukung persatuan melalui pendidikan dan inovasi untuk membangun demokrasi sejati.
                    </span>
                </div>
                <div className=" vission-details flex lg:w-[520px] flex-col items-start gap-[16px]">
                    <h5 className="text-neutral-1 font-lato text-[16px] font-bold leading-normal">
                    OUR VISION
                    </h5>
                    <span className="self-stretch font-lato text-justify text-neutral-2 text-[16px] font-normal">
                    IDE menghubungkan, memberdayakan, dan mengembangkan pemuda Indonesia untuk menjadi pemimpin yang bertanggung 
                    jawab secara sosial, berkontribusi pada demokrasi dan kesejahteraan masyarakat, dengan komitmen terhadap etika, 
                    hak asasi manusia, dan pendidikan.
                    </span>
                </div>
            </div>
        </div>
    );
};
