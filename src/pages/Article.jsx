/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useGetArticleById from "../hooks/useGetArticleById";
import { ArticleContent } from "../components/ArticleContent";
import { HomeArticle } from "../components/HomeArticle";
import { motion } from "framer-motion"; // Import motion from framer-motion

export const Article = () => {
  const { id } = useParams();
  const { article, loading, error } = useGetArticleById(id);

  return (
    <div className="items-start self-center justify-center article article-section">
      <div className="article-container w-full lg:w-[1224px] xs:px-6 pt-12 flex flex-col items-start lg:items-center lg:mx-auto">
        <motion.div // Wrap the main content in a motion.div
          key={`${article?.id}-${article?.Category?.id}`} // Key to trigger animation on article and category change
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          exit={{ opacity: 0, y: 20 }} // Animate out
          transition={{ duration: 0.5 }} // Animation duration
          className="flex flex-col items-center self-stretch gap-4 pb-0 text-center title-category"
        >
          <div className="flex flex-col items-center self-stretch gap-4 pb-6 text-center title-category">
            <h2 className="text-2xl font-bold">{article?.title}</h2>
            <h5 className="text-sm font-bold text-brand-red lg:text-base">
              {article?.Category?.category.toUpperCase()}
            </h5>
          </div>
          {article && <ArticleContent articleData={article} />}
        </motion.div>
      </div>
      <HomeArticle />
    </div>
  );
};
