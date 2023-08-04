import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ catagory, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="text-3xl p-5 bg-green-200 rounded-full flex justify-center cursor-pointer">
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalise">{catagory}</p>
    </div>
  );
};

export default FilterProduct;
