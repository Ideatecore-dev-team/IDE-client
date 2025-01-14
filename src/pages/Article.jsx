/* eslint-disable no-unused-vars */
import React from "react";
import { ArticleContent } from "../components/ArticleContent";
import { HomeArticle } from "../components/HomeArticle";

export const Article = () => {
  return (
    <div className="article article-section items-start justify-center self-center">
      <div className="article-container w-full lg:w-[1224px] xs:px-6 py-12 flex flex-col items-start lg:items-center lg:mx-auto">
        <div className="title-category pb-6 flex flex-col items-center text-center gap-4 self-stretch">
          <h2 className="text-2xl font-bold">
            Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi di
            Indonesia
          </h2>
          <h5 className="text-brand-red text-sm lg:text-base font-bold">
            DEMOCRACY
          </h5>
        </div>
        <ArticleContent />
      </div>
      <HomeArticle />
    </div>
  );
};
