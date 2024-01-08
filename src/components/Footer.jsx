import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import image2 from "../assets/Image2.png";

const Footer = () => {
  return (
    <footer>
      <div className="relative h-[450px] bg-orange-400 mt-36 flex justify-center">
        {/* email and subscribe button */}
        <div className="absolute top-16 md:left-80 p-4 flex justify-between items-center container w-[95%] md:w-[600px] h-[60px] bg-white rounded-xl">
          <span>
            <input
              type="email"
              className="bg-white border border-gray-300/90 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
              required
            />
          </span>
          <button>
            <div className="w-[200px] h-[45px] bg-white md:bg-orange-600 flex gap-1 justify-center items-center p-4 rounded-2xl">
              <span className="text-orange-400 md:text-white  font-bold text-xl">
                Subscribe
              </span>
              <IoArrowForward className="text-orange-400 md:text-white font-semibold text-xl" />
            </div>
          </button>
        </div>

        <div className="absolute top-44 md:left-80 md:w-[700px] flex flex-col-reverse gap-16 md:gap-0 md:flex-row md:items-center ">
          {/* copyright section */}
          <div className="w-[400px] h-[100px] md:w-[700px] md:min-h-full  mb-16 md:flex md:flex-col md:justify-between">
            <div className="flex justify-center md:justify-start">
              <span className="font-bold text-4xl text-black leading-5">
                pti
              </span>
              <span className="font-bold text-4xl text-orange-500 leading-5">
                .
              </span>
            </div>

            <div className="flex justify-center md:justify-start">
              <p className="mt-8 ms-2 font-bold text-lg text-black leading-5">
                Copyright <span> &copy;</span> Tripp. All Rights Reserved
              </p>
            </div>
          </div>

          {/* social icons */}
          <div className="w-full  flex justify-center md:justify-end">
            <div className="w-[160px] flex justify-between items-center ">
              <a href="">
                <div className="size-12 rounded-full bg-orange-500 md:bg-orange-100 hover:bg-orange-500 flex items-center justify-center">
                  <FaGoogle className="text-white md:text-orange-500 hover:text-white text-lg" />
                </div>
              </a>
              <a href="">
                <div className="size-12 rounded-full bg-orange-500 md:bg-orange-100 hover:bg-orange-500 flex items-center justify-center">
                  <FaTwitter className="text-white md:text-orange-500 hover:text-white text-lg" />
                </div>
              </a>
              <a href="">
                <div className="size-12 rounded-full bg-orange-500 md:bg-orange-100 hover:bg-orange-500 flex items-center justify-center">
                  <FaInstagram className="text-white md:text-orange-500 hover:text-white text-lg" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* footer image */}
        <div className="absolute right-36 hidden md:block">
          <picture>
            <img className="h-[350px]" src={image2} alt="footer-image" />
          </picture>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
