import "./App.css";

import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

import FoodSwiper from "./components/FoodSwiper";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddToList from "./pages/AddToList";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/addtolist" element={<AddToList />}></Route>
      </Routes>
    </>
  );
}

export default App;
