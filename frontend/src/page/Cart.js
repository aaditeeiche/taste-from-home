import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl text-slate-600 font-bold">
        Your Cart Items
      </h2>
      <div>
        <div className="">
          <div className="">
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
