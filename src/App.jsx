import "./App.css";

import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

import Card from "./components/Card";

import FoodSwiper from "./components/FoodSwiper";

function App() {
  const { data, loading } = useContext(ProductContext);

  // filtering out recommended items
  const popular = data.filter((item) => item.IsPopular === true);
  const recommended = data.filter((item) => item.IsRecommended === true);

  console.log("popular", popular);

  return (
    <>
      <Navbar />

      <Banner />

      <FoodSwiper data={{ arr: popular, name: "Popular" }} />
      <FoodSwiper data={{ arr: recommended, name: "Recommended" }} />
    </>
  );
}

export default App;
