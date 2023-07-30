import React from 'react'
import {BsCloudUpload} from "react-icons/bs"

const NewProduct = () => {

  const uploadImage = () => {
    
  }


  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name' className='bg-green-100 p-1 my-1'/>

        <label htmlFor='catagory' className='my-1'>Catagory</label>
        <select className='bg-green-100 p-1 my-1' id='catagory'>
          <option>Sweets - Laddu/Barfi</option>
          <option>Sweets - Traditional</option>
          <option>Namkeen - Farsaan</option>

        </select>

        <label htmlFor='image' className='my-1'>Image
        <div className='h-40 w-full bg-green-100 rounded flex items-center justify-center cursor-pointer'>
          <span className='text-5xl'><BsCloudUpload/></span>
          <input type={'file'} id='image' onchange={uploadImage} className='hidden'/>
        </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={'text'} className='bg-green-100 p-1 my-1'/>

        <label htmlFor='description' className='my-1'>Description</label>
        <textarea rows={2} className='bg-green-100 p-1 my-1 resize-none'></textarea>

        <button className='bg-green-500 hover:bg-green-600 text-white text-lg my-2 font-medium drop-shadow'>Save Product</button>

        </form>
    </div>

  )
}

export default NewProduct