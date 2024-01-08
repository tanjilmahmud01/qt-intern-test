import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="md:h-[100vh]">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
