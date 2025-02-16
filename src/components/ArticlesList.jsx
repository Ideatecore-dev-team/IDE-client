import React, { useContext, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArticlesContext } from "../context/ArticlesContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const ArticlesList = () => {
  const {
    articles,
    loading,
    error,
    searchQuery,
    selectedCategory,
    selectedSort,
    currentPage,
    dispatch,
    pagination,
  } = useContext(ArticlesContext);

  useEffect(() => {
    console.log("📜 Render ArticlesList - Current Page:", currentPage);
    console.log("📝 Articles Data:", articles);
    console.log("🔍 Search Query:", searchQuery);
    console.log("⏳ Loading:", loading);
  }, [articles, currentPage, loading, searchQuery]);

  const totalPages = pagination?.totalPage || 1;

  // Filter and sort articles based on user selection
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    return filtered;
  }, [articles]);

  return (
    <div className="articles-list-section flex flex-col items-center self-center">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4 articles-list xs:w-full lg:self-stretch">
          <p className="article-list-header text-base font-bold">
            NEWEST ARTICLE
          </p>

          {/* Loading State */}
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

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {!loading &&
            articles.length === 0 &&
            searchQuery(
              <p className="text-center text-gray-500">
                No articles found for {searchQuery}
              </p>
            )}

          {/* No Articles Available */}
          {!loading && filteredArticles.length === 0 && (
            <p className="text-center text-gray-500">No articles available.</p>
          )}

          {/* Article List */}
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
                      className="w-full h-[211.674px] object-cover"
                      alt={article.title}
                    />
                    <h5 className="text-base font-bold text-brand-red py-3 overflow-hidden">
                      {article.Category?.category.toUpperCase() ||
                        "Uncategorized"}
                    </h5>
                    <div className="flex flex-col self-stretch gap-1 title-detail">
                      <p className="text-xl font-bold">{article.title}</p>
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

          {/* Pagination Controls */}
          <div className="article-pagination-container w-full flex justify-between items-center mt-6">
            <button
              className="pagination-btn text-white flex p-3 justify-center items-center gap-2.5 rounded-lg bg-black hover:bg-neutral-2 transition-colors duration-300"
              disabled={currentPage === 1}
              onClick={() =>
                dispatch({ type: "SET_PAGE", payload: currentPage - 1 })
              }
            >
              <MdKeyboardArrowLeft />
              <p className="font-bold xs:hidden">Sebelumnya</p>
            </button>

            <div className="pagination-index flex items-center text-sm font-bold gap-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number transition-colors duration-300 ${
                    currentPage === index + 1 ? "text-brand-red" : "text-black"
                  }`}
                  onClick={() =>
                    dispatch({ type: "SET_PAGE", payload: index + 1 })
                  }
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn text-white flex p-3 justify-center items-center gap-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover transition-colors duration-300"
              disabled={currentPage === totalPages}
              onClick={() =>
                dispatch({ type: "SET_PAGE", payload: currentPage + 1 })
              }
            >
              <p className="font-bold xs:hidden">Selanjutnya</p>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
