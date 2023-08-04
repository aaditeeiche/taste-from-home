import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const catagoryList = [...new Set(productData.map((el) => el.catagory))];
  console.log(catagoryList);

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (catagory) => {
    const filter = productData.filter(
      (el) => el.catagory.toLowerCase() === catagory.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-5 w-screen overflow  -hidden">
      <h2 className="font-bold text-2xl text-green-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {catagoryList[0] &&
          catagoryList.map((el) => {
            return (
              <FilterProduct
                catagory={el}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}

        {/* <FilterProduct catagory="" />
    <FilterProduct />
    <FilterProduct /> */}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter.map((el) => {
          return (
            <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              catagory={el.catagory}
              seller={el.seller}
              price={el.price}
              quantity={el.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;