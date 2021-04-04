import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import Home from "../Home";
import BestSeller from "../BestSeller";
import Gift from "../Gift";
import NewProducts from "../NewProducts";
import Service from "../Service";

const Sections = () => {
  return (
    <div>
      <Layout>
        <Menu />
        <Home />
        <BestSeller />
        <Gift />
        <NewProducts />
        <Service />
      </Layout>
    </div>
  );
};

export default Sections;
