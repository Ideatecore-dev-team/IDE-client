/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetArticles from "../hooks/getArticles";

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
    <div className="articles-list-section flex flex-col items-center self-center">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="articles-list flex xs:w-full flex-col items-start gap-4 lg:self-stretch">
          <p className="article-list-header text-base font-bold">
            NEWEST ARTICLE
          </p>
          <div className="article-cards flex flex-col lg:flex-row lg:flex-wrap items-center gap-12 self-stretch">
            {articles.map((article) => (
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
                <h5 className="font-bold text-base text-brand-red">
                  {article.Category.category}
                </h5>
                <div className="title-detail flex flex-col gap-1 self-stretch">
                  <Link
                    className="font-bold text-xl"
                    to={`/article/${article.id}`}
                  >
                    {titleCut(article.title, 70)}
                  </Link>
                  <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
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
