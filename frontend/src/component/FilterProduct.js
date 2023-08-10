import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({ catagory, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl w-15 md:w-44 p-5 bg-green-200 rounded-full flex justify-center cursor-pointer ${
          isActive && "bg-emerald-500 text-slate-200"
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalise">{catagory}</p>
    </div>
  );
};

export default FilterProduct;
