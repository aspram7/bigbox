import React from "react";
import Layout from "../../components/Layout";
import Home from "../Home";
import BestSeller from "../BestSeller";
import Gift from "../Gift";
import NewProducts from "../NewProducts";
import Service from "../Service";
import Cart from "../Cart";

const Sections = () => {
  return (
    <Layout>
      <Home />
      <BestSeller />
      <Gift />
      <NewProducts />
      <Service />
      <Cart />
    </Layout>
  );
};

export default Sections;
