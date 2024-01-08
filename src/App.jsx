import "./App.css";

import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

import FoodSwiper from "./components/FoodSwiper";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddToList from "./pages/AddToList";

function App() {
  return (
    <>
      <AddToList />
    </>
  );
}

export default App;
