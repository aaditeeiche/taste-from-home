import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({
  name,
  image,
  catagory,
  price,
  seller,
  quantity,
  loading,
  id,
}) => {
  return (
    <div className="bg-white shadow p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="w-40 min-h-[150px]">
              <img src={image} className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalise word-wrap font-lg w-40">
              {name}
            </h3>
            <p className="text-center text-slate-400 font-medium">{catagory}</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>
                {price} per {quantity}
              </span>
            </p>
            <p className="text-center text-green-400 font-small italic">
              {" "}
              ~ by {seller}
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
