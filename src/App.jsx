import "./App.css";
import DropdownMenuCustom from "./components/DropdownMenuCustom";
import DropdownMenuFlowbite from "./components/DropdownMenuFlowbite";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { AiOutlineUser } from "react-icons/ai";

import Banner from "./components/Banner";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

function App() {
  const { data, loading } = useContext(ProductContext);
  console.log("In the App.jsx: ", data);

  return (
    <>
      <Navbar />

      <Banner />
    </>
  );
}

export default App;
