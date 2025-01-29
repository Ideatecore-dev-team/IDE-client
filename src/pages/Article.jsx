/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import GetArticleById from "../hooks/GetArticleById";
import { ArticleContent } from "../components/ArticleContent";
import { HomeArticle } from "../components/HomeArticle";

export const Article = () => {
  const { id } = useParams();
  const { article, loading, error } = GetArticleById(id);

  return (
    <div className="article article-section items-start justify-center self-center">
      <div className="article-container w-full lg:w-[1224px] xs:px-6 py-12 flex flex-col items-start lg:items-center lg:mx-auto">
        <div className="title-category pb-6 flex flex-col items-center text-center gap-4 self-stretch">
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <h5 className="text-brand-red text-sm lg:text-base font-bold">
            {article.Category.category}
          </h5>
        </div>
        <ArticleContent articleData={article} />
      </div>
      <HomeArticle />
    </div>
  );
};
