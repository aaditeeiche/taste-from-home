import React from "react";

const HomeCard = ({ name, image, catagory, price, seller, quantity }) => {
  return (
    <div>
      <div className="">
        <img src={image} className="w-40" />
      </div>
    </div>
  );
};

export default HomeCard;
