import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const productDisplay = productData.filter((el) => el._id == filterby)[0];
  console.log(productDisplay);
  return (
    <div className="p-2 md:p-4 ">
      <div className="w-full max-w-[950px] m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-1000 capitalise word-wrap text-2xl md:text-3xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-400 font-medium text-xl">
            {productDisplay.catagory}
          </p>
          <p className="font-bold text-xl">
            <span className="text-red-500">₹</span>
            <span>
              {productDisplay.price} per {productDisplay.quantity}
            </span>
          </p>
          <p className="text-green-500 font-small italic text-xl">
            ~ by {productDisplay.seller}
          </p>
          <div className="flex gap-3">
            <button className="bg-yellow-500 py-1 min-w-[100px] my-2 mt-2 rounded hover:bg-yellow-600">
              Buy
            </button>
            <button className="bg-yellow-500 py-1 min-w-[100px] my-2 mt-2 rounded hover:bg-yellow-600">
              Add to cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
