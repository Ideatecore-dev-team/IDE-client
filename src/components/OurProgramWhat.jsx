/* eslint-disable no-unused-vars */
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

export const OurProgramWhat = () => {
  return (
    <div className="what-we-do-section flex justify-center items-start self-stretch ">
      <div className="what-we-do-container flex w-full xs:px-6 py-12 flex-col items-start">
        <div className="title flex flex-col items-start gap-4 self-stretch">
          <div className="title-desc flex flex-col gap-3 items-start self-stretch">
            <h2 className="text-2xl font-bold">What We Do?</h2>
            <p className="text-base">
              Pelajari lebih lanjut tentang kegiatan yang kami lakukan di setiap
              program.
            </p>
          </div>
          <form className="w-full">
            <select
              id="countries"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};
