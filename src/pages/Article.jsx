/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetArticleById from "../hooks/useGetArticleById";
import { ArticleContent } from "../components/ArticleContent";
import { HomeArticle } from "../components/HomeArticle";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Helmet } from "react-helmet"; // Import Helmet from react-helmet

export const Article = () => {
  const { id, image } = useParams();
  const { article, loading, error } = useGetArticleById(id);

  useEffect(() => {
    // Scroll to the top of the page smoothly when the article is loaded
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, image]); // Dependency on id to trigger scroll when the article changes

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading article</div>;

  return (
    <div className="items-start self-center justify-center article article-section">
      <Helmet>
        {/* Open Graph meta tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.substring(0, 160)} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://api.theideindonesia.id/article/${id}`} />
        <meta property="og:type" content="article" />
      </Helmet>
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
