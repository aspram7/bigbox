import React from "react";
import Layout from "../../components/Layout";
import Home from "../Home";
import BestSeller from "../BestSeller";
import Gift from "../Gift";
import NewProducts from "../NewProducts";
import Service from "../Service";
import MiniCart from "../MiniCart";

const Sections = () => {
  return (
    <div>
      <Layout>
        <Home />
        <BestSeller />
        <Gift />
        <NewProducts />
        <Service />
        <MiniCart />
      </Layout>
    </div>
  );
};

export default Sections;
