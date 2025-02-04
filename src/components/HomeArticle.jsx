// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetArticles from "../hooks/GetArticles";
import { motion } from "framer-motion";

export const HomeArticle = () => {
  const { articles, loading, error } = GetArticles();

  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleScroll = () => {
    const rect = document
      .getElementById("home-articles")
      .getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update mobile state on resize
    };
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean up the resize listener
    };
  }, []);

  if (error) return <p>Error: {error}</p>;

  const titleCut = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);
  const mostRecentArticle = sortedArticles[0];

  return (
    <div className="flex items-start self-stretch justify-center article-section">
      <div className="article-container flex w-full xs:px-6 lg:w-[1224px] flex-col items-start gap-4 py-12 border-b-[1px] border-neutral-3">
        <div className="flex items-center self-stretch justify-between article-heading">
          <h5 className="text-base font-bold">NEWEST ARTICLE</h5>
          <Link
            className="text-base font-bold underline decoration-solid"
            to="articles"
          >
            Browse All Newest
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-full w-full">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10 }}
            >
              <svg
                className="animate-spin size-10 text-brand-red"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </motion.div>
          </div>
        ) : (
          <div className="article flex items-center self-stretch justify-center gap-6 articles">
            {(isMobile ? [mostRecentArticle] : sortedArticles.slice(0, 4)).map((article) => (
              <motion.div
                key={article.id}
                className="flex flex-col items-start justify-center w-full gap-3 article-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link
                  to={`/article/${article.id}`}
                  className="w-full"
                  onClick={scrollToTop}
                >
                  <img
                    src={article.image}
                    className="w-full"
                    alt={article.title}
                  />
                  <h5 className="text-base font-bold text-brand-red">
                    DEMOCRACY
                  </h5>
                  <div className="flex flex-col self-stretch gap-1 title-detail">
                    <Link className="text-xl font-bold">
                      {titleCut(article.title, 50)}
                    </Link>
                    <div className="flex items-center gap-1 text-sm font-normal user-date text-neutral-3">
                      <p>{article.User.name}</p>
                      <p>-</p>
                      <p>{new Date(article.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeArticle;
