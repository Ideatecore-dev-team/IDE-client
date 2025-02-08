// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArticlesContext } from "../context/ArticlesContext";

export const ArticlesList = () => {
  const { articles, loading, error } = useContext(ArticlesContext);

  const titleCut = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="flex flex-col items-center self-center articles-list-section">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4 articles-list xs:w-full lg:self-stretch">
          <p className="text-base font-bold article-list-header">
            NEWEST ARTICLE
          </p>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-full w-full">
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

          {/* Error Handling */}
          {error && <p className="text-red-500">{error}</p>}

          {/* No Articles Found - Hanya muncul jika loading selesai */}
          {!loading && articles.length === 0 && (
            <p className="text-center text-gray-500">No articles available.</p>
          )}

          {/* Daftar Artikel */}
          {!loading && articles.length > 0 && (
            <div className="flex flex-col items-center self-stretch gap-12 article-cards lg:flex-row lg:flex-wrap">
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link
                    to={`/article/${article.id}`}
                    className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3"
                  >
                    <img
                      src={article.image}
                      className="w-full h-[211.674px] object-cover rounded-md"
                      alt={article.title}
                    />
                    <h5 className="text-base font-bold text-brand-red">
                      {article.Category?.category || "Uncategorized"}
                    </h5>
                    <div className="flex flex-col self-stretch gap-1 title-detail">
                      <Link className="text-xl font-bold">
                        {titleCut(article.title, 70)}
                      </Link>
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
