import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImageToBase64 } from "../utility/imagetoBase64";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    catagory: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    // display the product image that is uploaded in the form
    // pending state of asynchronous operation
    const data = await ImageToBase64(e.target.files[0]); // converts the image into base 64
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }; // CONTINUTE WORKING FROM THIS FUNCTION. ALSO NOTICE THE BRACKET ERROR IDK HOW TO FIX IT YET - AADITEE (2-Aug)

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-green-100 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="catagory" className="my-1">
          Catagory
        </label>
        <select
          className="bg-green-100 p-1 my-1"
          id="catagory"
          name="catagory"
          onChange={handleOnChange}
        >
          <option>Sweets - Laddu/Barfi</option>
          <option>Sweets - Traditional</option>
          <option>Namkeen - Farsaan</option>
        </select>

        <label htmlFor="image" className="my-1">
          Image
          <div className="h-40 w-full bg-green-100 rounded flex items-center justify-center cursor-pointer">
            <span className="text-5xl">
              <BsCloudUpload />
            </span>
            <img src={""} />
            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-green-100 p-1 my-1"
          name="price"
          onChange={handleOnChange}
        />

        <label htmlFor="description" className="my-1">
          Description
        </label>
        <textarea
          rows={2}
          className="bg-green-100 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-green-500 hover:bg-green-600 text-white text-lg my-2 font-medium drop-shadow">
          Save Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
