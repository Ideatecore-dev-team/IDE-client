/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetArticles from "../hooks/GetArticles";

export const ArticlesList = () => {
  const { articles, loading, error } = GetArticles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const titleCut = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center self-center articles-list-section">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4 articles-list xs:w-full lg:self-stretch">
          <p className="text-base font-bold article-list-header">
            NEWEST ARTICLE
          </p>
          <div className="flex flex-col items-center self-stretch gap-12 article-cards lg:flex-row lg:flex-wrap">
            {articles &&
              articles.map((article) => (
                <Link
                  key={article.id} // Menggunakan id artikel sebagai key
                  className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3"
                  to={`/article/${article.id}`} // Link ke halaman artikel berdasarkan id
                >
                  <img
                    src={article.image} // Menampilkan gambar artikel
                    className="w-full h-[211.674px]"
                    alt={article.title}
                  />
                  <h5 className="text-base font-bold text-brand-red">
                    {article.Category.category}
                  </h5>
                  <div className="flex flex-col self-stretch gap-1 title-detail">
                    <Link
                      className="text-xl font-bold"
                      to={`/article/${article.id}`}
                    >
                      {titleCut(article.title, 70)}
                    </Link>
                    <div className="flex items-center gap-1 text-sm font-normal user-date text-neutral-3">
                      <p>{article.User.name}</p>
                      <p>-</p>
                      <p>
                        {new Date(article.createdAt).toLocaleDateString()}
                      </p>{" "}
                      {/* Format tanggal */}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
