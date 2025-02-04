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

  if (loading) return <p>Loading...</p>; // Early return before rendering JSX
  if (error) return <p>Error: {error}</p>;

  const titleCut = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <motion.div
      id="home-articles"
      className="flex items-center self-stretch justify-center details-section"
      initial={isMobile ? {} : { opacity: 0, x: 1000 }} // No animation for mobile
      animate={
        isMobile
          ? { opacity: 1, x: 0 }
          : isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: 1000 }
      } // Conditional animation
      transition={{ duration: 1, ease: "easeInOut" }}
    >
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
          <div className="flex items-center self-stretch justify-center gap-6 articles">
            {articles.slice(0, 4).map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="flex flex-col items-start justify-center w-full gap-3 article-card"
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
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeArticle;
