/* eslint-disable no-unused-vars */
import React from "react";

export const ArticlesHeader = () => {
  return (
    <div className="articles-header-section flex py-12 flex-col items-center self-stretch">
      <div className="articles-header-container flex w-full lg:w-[1224px] xs:px-6 flex-col justify-center items-start gap-6">
        <div className="articles-header flex flex-col items-center lg:items-start gap-3 self-stretch">
          <h1 className="text-[32px] lg:text-5xl font-bold text-center">
            Article IDE Indonesia
          </h1>
          <p className="text-center text-base">
            Temukan berita menarik seputar pemuda indonesia disini!
          </p>
        </div>
      </div>
    </div>
  );
};
