import React from "react";
import Layout from "../../components/Layout";
import Home from "../Home";
import BestSeller from "../BestSeller";
import Gift from "../Gift";
import NewProducts from "../NewProducts";
import Service from "../Service";
import MyPage from "../MyPage";
import Footer from "../../components/Footer";

const Sections = () => {
  return (
    <div>
      <Layout>
        <Home />
        <BestSeller />
        <Gift />
        <NewProducts />
        <Service />
        <MyPage />
      </Layout>
      <Footer />
    </div>
  );
};

export default Sections;
