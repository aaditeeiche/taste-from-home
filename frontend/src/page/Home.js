import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(1, 4);
  // const homeProductCartList2 = productData.slice(2, 3);
  // const homeProductCartList3 = productData.slice(4, 5);
  // const homeProductCartList4 = productData.slice(6, 7);
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold text-slate-800">
            Welcome to <span className="text-red-600">Taste From Home</span>!!
            {/* <br /> Order Super-tasty and Healthy Home-made delicacies and have
            it delivered right at your doorstep. */}
          </h2>
          <p className="py-3 text-xl">
            Order Super-tasty and Healthy Home-made delicacies and have it
            delivered right at your doorstep.
            <br /> Enjoy mouth-watering snacks and sweets from the comfort of
            your Home.
          </p>
          <button className="font-bold bg-red-600 text-slate-200 px-4 py-1 rounded-md">
            Order Now
          </button>
        </div>

        <div className="w-1/2">
          {homeProductCartList[0] &&
            homeProductCartList.map((el) => {
              return (
                <HomeCard
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  catagory={el.catagory}
                  quantity={el.quantity}
                  seller={el.seller}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
