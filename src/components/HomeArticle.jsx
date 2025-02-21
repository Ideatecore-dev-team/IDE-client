// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react"; // ✅ Tambahkan useContext
import { Link } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext"; // ✅ Import Context
import { motion } from "framer-motion";

export const HomeArticle = () => {
  const { articles, loading, error } = useContext(ArticlesContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.pageYOffset;
    const change = -start;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, change, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
  };

  const validArticles = !loading && Array.isArray(articles) ? articles : [];

  const sortedArticles = [...validArticles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const mostRecentArticle = sortedArticles[0];

  return (
    <div className="flex items-start self-stretch justify-center article-section">
      <div className="article-container flex w-full xs:px-6 lg:w-[1224px] flex-col items-start gap-4 py-12 border-b-[1px] border-neutral-3">
        <div className="flex items-center self-stretch justify-between article-heading">
          <h5 className="text-base font-bold">NEWEST ARTICLE</h5>
          <Link
            className="text-base font-bold underline decoration-solid"
            to="/articles"
          >
            Browse All Newest
          </Link>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-[334.67px] w-full">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
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
        )}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && validArticles.length === 0 ? (
          <p className="text-center text-gray-500">No articles available.</p>
        ) : (
          <div className="article flex items-center self-stretch justify-left gap-6 articles ">
            {(isMobile ? [mostRecentArticle] : sortedArticles.slice(0, 4)).map(
              (article) =>
                article && ( // ✅ Pastikan `article` tidak `undefined`
                  <motion.div
                    key={article.id}
                    className="flex flex-col items-start justify-between w-[288px] lg:h-[296.63px] gap-3 article-card "//nambahin h biar card sama
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
                        className="w-full h-[172.8px]"
                        alt={article.title}
                      />
                      <div className="flex flex-col h-[123px]">
                        <h5 className="text-base font-bold text-brand-red py-3">
                          {article.Category?.category?.toUpperCase() || "Uncategorized"}
                        </h5>
                        <div className="title-detail flex flex-col self-stretch gap-1">
                          <Link className="text-xl font-bold">
                            {article.title.length > 30
                              ? `${article.title.substring(0, 30)}...`
                              : article.title}
                          </Link>
                          <div className="flex items-center gap-1 text-sm font-normal user-date text-neutral-3">
                            <p>{article.User?.name || "Unknown Author"}</p>
                            <p>-</p>
                            <p>
                              {new Date(article.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeArticle;
