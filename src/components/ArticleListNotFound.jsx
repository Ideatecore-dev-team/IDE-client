/* eslint-disable no-unused-vars */
import React from "react";
import { MdSearch } from "react-icons/md";

export const ArticleListNotFound = () => {
  return (
    <div className="article-not-found flex flex-col items-center justify-center gap-3 lg:h-[717.08px] w-full">
      <div className="search-icon flex p-3 justify-center items-center bg-brand-red rounded-lg">
        <MdSearch className="text-white" size={24} />
      </div>
      <h3 className="text-2xl font-bold">
        Artikel yang anda cari tidak tersedia
      </h3>
      <p className="text-base">
        Coba gunakan kata kunci lain atau kategori lain.
      </p>
    </div>
  );
};
