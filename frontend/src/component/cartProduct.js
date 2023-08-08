import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartProduct = ({
  id,
  name,
  catagory,
  seller,
  price,
  quantity,
  image,
  qty,
  total,
}) => {
  return (
    <div className=" bg-slate-200 p-2 flex gap-4 hover:shadow-sm hover:shadow-teal-400 border-2 border-slate-300 m-2">
      <div className=" bg-white p-3 rounded overflow-hidden">
        <img src={image} alt="img" className="h-28 w-36 object-cover p-3" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-800 capitalise word-wrap text-lg md:text-xl">
          {name}
        </h3>
        <p className="text-slate-400 font-medium ">{catagory}</p>
        <p className="font-semibold text-base">
          <span className="text-red-500">₹</span>
          <span>{price} </span>
          <span className="pl-2 md:pl-3">
            Quantity: {quantity === "1 Kg" ? qty : qty / 2} Kg
          </span>
          <span className="text-green-500 pl-2 md:pl-3 font-small italic text-md font-normal">
            ~ by {seller}
          </span>
        </p>
        <div>
          <div className="flex gap-3 items-center p-1">
            <button className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400">
              <FiPlus />
            </button>
            <p className="pb-1 font-semibold">{qty}</p>
            <button
              onClick={""}
              className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400"
            >
              <FiMinus />
            </button>
          </div>
          <div>
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
