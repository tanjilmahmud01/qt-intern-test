import React, { useContext } from "react";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import FoodSwiper from "../components/FoodSwiper";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { data, loading } = useContext(ProductContext);

  // filtering out recommended items
  const popular = data.filter((item) => item.IsPopular === true);
  const recommended = data.filter((item) => item.IsRecommended === true);

  console.log("popular", popular);
  return (
    <Layout>
      <Banner />

      <FoodSwiper data={{ arr: popular, name: "Popular" }} />
      <FoodSwiper data={{ arr: recommended, name: "Recommended" }} />
    </Layout>
  );
};

export default Home;
