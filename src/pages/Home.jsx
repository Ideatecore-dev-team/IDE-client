// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import { HomeDetails } from "../components/HomeDetails";
import HomeArticle from "../components/HomeArticle";
import { HomeProgram } from "../components/HomeProgram";
import { HomePartner } from "../components/HomePartner";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <HomeDetails />
      <HomeArticle />
      <HomeProgram />
      <HomePartner />
    </div>
  );
};

export default Home;
