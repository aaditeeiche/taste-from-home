import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(1,5);
  const homeProductCartListSweetLadduBarfi = productData.filter(el=> el.catagory === "Sweets - Laddu/Barfi",[])
  console.log(homeProductCartListSweetLadduBarfi)
  // const homeProductCartList2 = productData.slice(2, 3);
  // const homeProductCartList3 = productData.slice(4, 5);
  // const homeProductCartList4 = productData.slice(6, 7);
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold text-slate-800">
            Welcome to <br></br><span className="text-green-600">Taste From Home</span>
            {/* <br /> Order Super-tasty and Healthy Home-made delicacies and have
            it delivered right at your doorstep. */}
          </h2>
          <p className="py-3 text-l px-2">
            Order Super-tasty and Healthy Home-made delicacies and have it
            delivered right at your doorstep.
            <br /> Enjoy mouth-watering snacks and sweets from the comfort of
            your Home.
          </p>
          <br />
          <button className="font-bold bg-green-600 text-white px-4 py-1 rounded-md text-xl">
            Order Now
          </button>
        </div>

        <div className="w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0] &&
            homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
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

      {/* <div className="font-bold text-2xl text-slate-800">
            <h2>Fresh Homemade Delights</h2>
            <div className="">
              {
                homeProductCartListSweetLadduBarfi.map(el =>{
                  return(
                    <CardFeature key={el._id}
                    name={el.name}
                    catagory={el.catagory}
                    price={el.price}
                    image = {el.image}
                    seller = {el.seller}
                    quantity = {el.quantity}/>
                    
                  )
                })
              }
            </div>
        </div> */}

    </div>
  );
};

export default Home;
