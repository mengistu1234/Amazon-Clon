import React from "react";
import Layout from "../../components/LayOut/LayOut";
import Carousel from "../../components/Caraousel/Carousel";
import Category from "../../components/Catagory/Catagory";
import Product from "../../components/Product/Product";

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
