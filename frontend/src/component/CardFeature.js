import React from "react";
import { Link } from "react-router-dom";

const CardFeature = ({
  image,
  name,
  price,
  catagory,
  quantity,
  seller,
  loading,
  id,
}) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg px-4 py-5 hover:cursor-pointer flex flex-col overflow-hidden">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full rounded-md " />
            </div>
            <h3 className="font-semibold  text-slate-600 capitalise font-lg w-40 mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-400 font-medium">{catagory}</p>
            <p className="font-bold">
              <span className="text-red-500">₹</span>
              <span>
                {price} per {quantity}
              </span>
            </p>
            <p className="text-green-400 font-small italic"> ~ by {seller}</p>
          </Link>
          <button className="bg-yellow-500 py-1 my-2 mt-2 rounded hover:bg-yellow-600 w-full">
            Add to Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
