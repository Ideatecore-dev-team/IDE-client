import React from "react";
import { ArticlesHeader } from "../components/ArticlesHeader";
import { ArticlesList } from "../components/ArticlesList";

export const Articles = () => {
  return (
    <div className="articles">
      <ArticlesHeader />
      <ArticlesList />
    </div>
  );
};
