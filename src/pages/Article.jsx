/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useGetArticleById from "../hooks/useGetArticleById";
import { ArticleContent } from "../components/ArticleContent";
import { HomeArticle } from "../components/HomeArticle";

export const Article = () => {
  const { id } = useParams();
  const { article, loading, error } = useGetArticleById(id);

  return (
    <div className="items-start self-center justify-center article article-section">
      <div className="article-container w-full lg:w-[1224px] xs:px-6 py-12 flex flex-col items-start lg:items-center lg:mx-auto">
        <div className="flex flex-col items-center self-stretch gap-4 pb-6 text-center title-category">
          <h2 className="text-2xl font-bold">{article?.title}</h2>
          <h5 className="text-sm font-bold text-brand-red lg:text-base">
            {article?.Category?.category}
          </h5>
        </div>
        {article && <ArticleContent articleData={article} />}
      </div>
      <HomeArticle />
    </div>
  );
};
