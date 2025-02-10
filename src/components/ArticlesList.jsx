import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArticlesContext } from "../context/ArticlesContext";

export const ArticlesList = () => {
  const {
    articles,
    loading,
    error,
    searchQuery,
    selectedCategory,
    selectedSort,
  } = useContext(ArticlesContext);

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (article) => article.Category?.category === selectedCategory
      );
    }

    if (selectedSort === "newest") {
      filtered = filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (selectedSort === "oldest") {
      filtered = filtered.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedSort]);

  return (
    <div className="flex flex-col items-center self-center articles-list-section">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4 articles-list xs:w-full lg:self-stretch">
          <p className="text-base font-bold article-list-header">
            NEWEST ARTICLE
          </p>

          {loading && (
            <div className="flex justify-center items-center h-[334.67px] lg:h-[757.34px] w-full">
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

          {!loading && filteredArticles.length === 0 && (
            <p className="text-center text-gray-500">No articles available.</p>
          )}

          {!loading && filteredArticles.length > 0 && (
            <div className="flex flex-col items-center self-stretch gap-12 article-cards lg:flex-row lg:flex-wrap">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link
                    to={`/article/${article.id}`}
                    className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center"
                  >
                    <img
                      src={article.image}
                      className="w-full h-[211.674px] object-cover rounded-md"
                      alt={article.title}
                    />
                    <h5 className="text-base font-bold text-brand-red py-3">
                      {article.Category?.category.toUpperCase() || "Uncategorized"}
                    </h5>
                    <div className="flex flex-col self-stretch gap-1 title-detail">
                      <Link className="text-xl font-bold">{article.title}</Link>
                      <div className="flex items-center gap-1 text-sm font-normal user-date text-neutral-3">
                        <p>{article.User?.name || "Unknown Author"}</p>
                        <p>-</p>
                        <p>
                          {new Date(article.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
