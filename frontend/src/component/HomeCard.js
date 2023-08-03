import React from "react";

const HomeCard = ({ name, image, catagory, price, seller, quantity }) => {
  return (
    <div className="bg-white shadow p-2 rounded">
      <div className="w-40 min-h-[150px]">
        <img src={image} className="h-full w-full"/>
      </div>
      <h3 className="font-semibold text-slate-600 text-center capitalise word-wrap font-lg w-40">{ name }</h3>
      <p className="text-center text-slate-400 font-medium">{ catagory }</p>
      <p className="text-center font-bold"><span className="text-red-500">₹</span><span>{ price } per {quantity}</span></p>    
      <p className="text-center text-green-400 font-small italic"> ~ by { seller }</p>
    </div>
  );
};

export default HomeCard;
