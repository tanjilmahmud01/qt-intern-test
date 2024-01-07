import React from "react";

const Card = ({ Carddata }) => {
  const { ImageUrl, Name } = Carddata;

  return (
    <div className="w-[120px] md:w-[300px] ">
      <div className="h-[150px] md:h-[300px] ">
        <img className="rounded-2xl" src={ImageUrl} alt="card-img" />
      </div>
      <p className="text-center text-gray-600 font-semibold">{Name}</p>
    </div>
  );
};

export default Card;
