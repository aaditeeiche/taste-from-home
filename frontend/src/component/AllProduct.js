import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const catagoryList = [...new Set(productData.map((el) => el.catagory))];
  // console.log(catagoryList);

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const loadingArrayFeature = new Array(10).fill(null);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (catagory) => {
    setFilterBy(catagory);
    const filter = productData.filter(
      (el) => el.catagory.toLowerCase() === catagory.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-5 w-screen overflow-hidden">
      <h2 className="font-bold text-2xl text-green-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {catagoryList[0] ? (
          catagoryList.map((el) => {
            return (
              <FilterProduct
                catagory={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id + "cardFeature-AP"}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  catagory={el.catagory}
                  seller={el.seller}
                  price={el.price}
                  quantity={el.quantity}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
