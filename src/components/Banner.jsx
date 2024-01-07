import React from "react";
import image1 from "../assets/Image1.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto h-[300px] rounded-2xl bg-none md:bg-orange-400 mt-10 md:mt-36 ">
        <div className="flex flex-col md:flex-row items-center justify-center p-2">
          {/* writing */}
          <div className="flex flex-col justify-center mb-16 md:mb-0 md:w-[50%]">
            <h2 className="text-black md:text-white font-bold text-2xl md:text-3xl text-center md:text-start ms-auto  w-[300px] md:w-[350px]">
              Deliver Food To Your Door Step|
            </h2>
            <p className="text-gray-600 md:text-white mt-5 md:mt-10 ms-auto md:w-[350px] text-center md:text-start">
              Authentic Food, Quick Service, Fast Delivery
            </p>
          </div>
          {/* image */}
          <div className="md:w-[50%] bg-orange-400 md:bg-none rounded-2xl md:rounded-none h-[188px] md:h-full">
            <img
              className="md:h-[292px] -mt-16 md:mt-0"
              src={image1}
              alt="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
