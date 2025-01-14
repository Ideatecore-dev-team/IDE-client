// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import ArticleImage from "../assets/images/article-carousel-1.png";

export const HomeArticle = () => {
  return (
    <div className="article-section flex justify-center items-start self-stretch">
      <div className="article-container flex w-full px-6  lg:w-[1224px] flex-col items-start gap-4 py-12 border-b-[1px] border-neutral-3">
        <div className="article-heading flex justify-between items-center self-stretch">
          <h5 className="text-base font-bold">NEWEST ARTICLE</h5>
          <Link
            className="text-base font-bold underline decoration-solid"
            to="articles"
          >
            Browse All Newest
          </Link>
        </div>
        <div className="articles flex items-center justify-center gap-6 self-stretch">
          <div className="article-card flex w-full   flex-col items-start justify-center gap-3">
            <img src={ArticleImage} className="w-full" alt="" />
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
          <div className="article-card hidden lg:flex w-full   flex-col items-start justify-center gap-3">
            <img src={ArticleImage} className="w-full" alt="" />
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
          <div className="article-card hidden lg:flex w-full   flex-col items-start justify-center gap-3">
            <img src={ArticleImage} className="w-full" alt="" />
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
          <div className="article-card hidden lg:flex w-full   flex-col items-start justify-center gap-3">
            <img src={ArticleImage} className="w-full" alt="" />
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
  );
};

export default HomeArticle;
