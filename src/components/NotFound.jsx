import React from "react";
import ButtonLink from "./Buttons/ButtonLink";

export const NotFound = () => {
  return (
    <div className="not-found-container flex w-full xs:px-6 lg:w-[1224px] flex-col justify-center items-center gap-6 mx-auto py-[105px]">
      <div className="heading-button flex w-[754px] xs:w-full flex-col items-center gap-6">
        <div className="heading-desc flex flex-col items-center gap-3">
          <h1 className="text-5xl font-bold">Error 404</h1>
          <h2 className="text-base">Halaman yang anda cari tidak tersedia.</h2>
        </div>
        <ButtonLink
          color="bg-brand-red hover:bg-brand-red-hover"
          textColor="text-white"
          caption="Back to Home"
          width="w-[133px]"
          to="/"
        />
      </div>
    </div>
  );
};
