import React from "react";
import { Link } from "react-router-dom";
import ArticleImage1 from "../assets/images/article-carousel-1.png";
import ArticleImage2 from "../assets/images/article-carousel-2.png";
import ArticleImage3 from "../assets/images/article-carousel-3.png";

export const ArticlesList = () => {
  return (
    <div className="articles-list-section flex flex-col items-center self-center">
      <div className="articles-list-container flex w-full lg:w-[1224px] xs:px-6 py-12 flex-col items-start gap-12">
        <div className="articles-list flex xs:w-full flex-col items-start gap-4 lg:self-stretch">
          <p className="article-list-header text-base font-bold">
            NEWEST ARTICLE
          </p>
          <div className="article-cards flex flex-col lg:flex-row lg:flex-wrap items-center gap-12 self-stretch">
            <Link
              className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3"
              to="/article/1"
            >
              <img src={ArticleImage1} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </Link>
            <div className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3">
              <img src={ArticleImage2} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </div>
            <div className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3">
              <img src={ArticleImage3} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </div>
            <div className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3">
              <img src={ArticleImage1} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </div>
            <div className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3">
              <img src={ArticleImage2} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </div>
            <div className="article-card flex w-full lg:w-[376px] flex-col items-start justify-center gap-3">
              <img src={ArticleImage3} className="w-full" alt="" />
              <h5 className="font-bold text-base text-brand-red">DEMOCRACY</h5>
              <div className="title-detail flex flex-col gap-1 self-stretch">
                <Link className="font-bold text-xl">
                  Mendorong Transparansi: Generasi Muda dan Masa Depan Demokrasi
                  di Indonesia
                </Link>
                <div className="user-date flex items-center gap-1 text-sm font-normal text-neutral-3">
                  <p>Andika Putra</p>
                  <p>-</p>
                  <p>5 Desember 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
