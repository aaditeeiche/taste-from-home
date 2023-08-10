import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

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
  const dispatch = useDispatch();
  return (
    <div className=" bg-slate-200 p-2 flex gap-4 hover:shadow-sm hover:shadow-teal-400 border-2 border-slate-300 m-2">
      <div className=" bg-white p-1 rounded overflow-hidden">
        <img
          src={image}
          alt="img"
          className="w-fit h-fit max-h-40 max-w-40 object-cover p-3"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h3 className="font-semibold text-slate-800 capitalise word-wrap text-lg md:text-xl">
          {name}
        </h3>
        <p className="text-slate-400 font-medium ">{catagory}</p>
        <p className="font-semibold text-base">
          <span className="text-red-500">₹</span>
          <span>{price} </span>
          <span className="pl-2 md:pl-3">Quantity: {quantity}</span>
          <span className="text-green-500 pl-2 md:pl-3 font-small italic text-md font-normal">
            ~ by {seller}
          </span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center p-1">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400"
            >
              <FiPlus />
            </button>
            <p className="pb-1 font-semibold">{qty}</p>
            {qty > 1 ? (
              <button
                onClick={() => dispatch(decreaseQty(id))}
                className="bg-slate-300 p-1 my-2 mt-2 rounded-full hover:bg-slate-400"
              >
                <FiMinus />
              </button>
            ) : (
              <button className=" hover:cursor-default p-1 my-2 mt-2 rounded-full">
                <FiMinus />
              </button>
            )}

            <button
              onClick={() => dispatch(deleteCartItem(id))}
              className=" p-1 my-2 mt-2 ml-4 hover:rounded-full hover:bg-red-500 cursor-pointer"
            >
              <AiOutlineDelete />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Qty :</p>
            <p>{quantity === "1 Kg" ? qty : qty / 2} Kg</p>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total:</p>
            <p>
              <span className="text-red-500">₹</span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
