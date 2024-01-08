import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ProductContext } from "../context/ProductContext";
import Card from "./Card";
import { Link } from "react-router-dom";

const FoodSwiper = ({ data }) => {
  const { arr, name } = data;
  return (
    <section>
      <div className="container mx-auto h-[230px] md:h-[350px]  mt-36 mb-40 p-2">
        <div className="flex items-center justify-between mb-5 ">
          <span className="text-black font-semibold text-2xl">{name}</span>
          <div className="flex items-center">
            <Link to={"/addtolist"}>
              <button>
                <span className="text-orange-500 font-semibold text-xl md:block">
                  AddMore
                </span>
              </button>
            </Link>
            <div className="flex gap-2">
              <button className="hidden md:block">
                <IoIosArrowBack className="text-xl" />
              </button>
              <button>
                <IoIosArrowForward className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            breakpoints={{
              390: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {arr.map((item) => (
              <SwiperSlide key={item.Id}>
                {" "}
                <Card Carddata={item}></Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FoodSwiper;
