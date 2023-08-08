import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  return (
    <div className="p-2 md:p-4 relative ">
      {/* 
      bg-gradient-to-r from-orange-400 via-white to-green-500
      <img
        src={BG}
        className="w-screen h-screen absolute overflow-hidden m-0"
      /> */}
      <h2 className="text-lg md:text-2xl text-slate-600 font-bold">
        Your Cart Items
      </h2>
      <div className="">
        <div className="w-full max-w-3xl">
          <div className="my-4">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  quantity={el.quantity}
                  seller={el.seller}
                  catagory={el.catagory}
                  qty={el.qty}
                  total={el.total}
                />
              );
            })}
          </div>
        </div>
        <div className="">{/*Total Cart Items*/}</div>
      </div>
    </div>
  );
};

export default Cart;
