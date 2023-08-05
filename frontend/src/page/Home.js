import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import { useEffect } from "react";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListSweetLadduBarfi = productData.filter(
    (el) => el.catagory === "Sweets - Laddu/Barfi",
    []
  );
  console.log(homeProductCartListSweetLadduBarfi);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  // const homeProductCartList2 = productData.slice(2, 3);
  // const homeProductCartList3 = productData.slice(4, 5);
  // const homeProductCartList4 = productData.slice(6, 7);

  return (
    <div className="p-2 md:p-4 overflow-hidden">
      <div className="md:flex gap-4 py-2">
        <div className="w-2/5">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800">
            Welcome to
            <span className="text-green-600 md:text-7xl"> Taste From Home</span>
            {/* <br /> Order Super-tasty and Healthy Home-made delicacies and have
            it delivered right at your doorstep. */}
          </h2>
          <p className="py-3 text-l px-2">
            Order super-tasty and healthy homemade delicacies and have it
            delivered right at your doorstep.
            <br /> Enjoy mouth-watering snacks and sweets from the comfort of
            your home.
          </p>
          <br />
          <button className="font-bold bg-green-600 text-white px-4 py-1 rounded-md text-xl">
            Order Now
          </button>
        </div>

        <div className="w-3/5 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    catagory={el.catagory}
                    quantity={el.quantity}
                    seller={el.seller}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-green-800 mb-4">
            Featured - Sweets: Laddu and Barfi
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded text-lg"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded text-lg"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListSweetLadduBarfi[0]
            ? homeProductCartListSweetLadduBarfi.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    catagory={el.catagory}
                    price={el.price}
                    image={el.image}
                    seller={el.seller}
                    quantity={el.quantity}
                  />
                );
              })
            : loadingArrayFeature.map((el) => (
                <CardFeature loading="Loading..." />
              ))}
        </div>
      </div>

      <AllProduct heading={"Shop for Delicious Products"} />
    </div>
  );
};

export default Home;
