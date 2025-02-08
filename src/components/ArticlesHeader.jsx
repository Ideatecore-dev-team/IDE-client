/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdSearch, MdFilterList } from "react-icons/md";

export const ArticlesHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="articles-header-section flex py-12 flex-col items-center self-stretch">
      <div className="articles-header-container flex w-full lg:w-[1224px] xs:px-6 xs:flex-col justify-center lg:justify-between items-start lg:items-center gap-6">
        <div className="articles-header flex flex-col items-center lg:items-start gap-3 self-stretch">
          <h1 className="text-[32px] lg:text-5xl font-bold text-center">
            Article IDE Indonesia
          </h1>
          <p className="text-center text-base">
            Temukan berita menarik seputar pemuda indonesia disini!
          </p>
        </div>
        <div className="articles-search-filter w-full lg:w-[500px] flex gap-3">
          <div className="search-form w-full relative">
            <input
              type="text"
              placeholder="Cari nama artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full p-3 items-center gap-3 text-base text-neutral-3 rounded-md border border-solid focus:outline-none transition-colors ${
                isFocused
                  ? "border-brand-red bg-neutral-100"
                  : "border-neutral-3 bg-white"
              }`}
            />
            <MdSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <button className="flex p-3 justify-center items-center rounded-lg bg-brand-red hover:bg-brand-red-hover">
            <MdFilterList size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
