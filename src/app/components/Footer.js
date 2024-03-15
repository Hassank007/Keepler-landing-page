import React from 'react'
import { FaPhoneAlt,FaWhatsapp   } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <div className=" flex bg-[#072e33] h-[36rem] flex-row justify-between">
       <div className="flex flex-col  w-[56rem] pt-28 pb-14 ">
        <div className='flex flex-col items-center justify-center px-[6rem] py-[3rem] space-y-5'>
        <h1 className=" text-white text-6xl text-center font-sans font-semibold  ">
         LET'S GET CONNECTED <br/>INSTANTLY
        </h1>
        <p className='text-white'>Submit the form, and our team will respond to you as soon as possible </p>
        <div className='flex flex-row'>
        <button className="border-gray-950 bg-[#0c7075] text-sm text-white px-14 py-3 rounded hover:bg-gray-900 font-sans font-semibold flex ml-5" >Call us <FaPhoneAlt className='ml-3 mt-1'/></button>
        <button className="border-gray-950 bg-[#0c7075] text-sm text-white px-14 py-3 rounded hover:bg-gray-900 font-sans font-semibold flex ml-5" >Whatsapp <FaWhatsapp className='text-xl ml-2 mt-0'/></button>
        <button className="border-gray-950 bg-[#0c7075] text-sm text-white px-14 py-3 rounded hover:bg-gray-900 font-sans font-semibold flex ml-5" >Email <CiMail className=' text-white text-xl ml-2 mt-0'/> </button>
        </div>
        </div>
      </div>
      {/* CONTACT */}
    
      <div className="flex items-center justify-center">
  <div className="flex flex-col justify-center w-[25rem] p-6 mr-28 bg-white rounded-md shadow-md border border-black">
        
        <form >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
            //   ref={nameInputRef}
              className="w-full p-1 border border-slate-400 rounded-md"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
            //   ref={emailInputRef}
              className="w-full p-1 border  border-slate-400 rounded-md"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="Phonenumber"
            //   value={formData.name}
            //   onChange={handleChange}
            //   ref={nameInputRef}
              className="w-full p-1 border border-slate-400 rounded-md"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="message"
              name="message"
            //   value={formData.message}
            //   onChange={handleChange}
            //   ref={messageInputRef}
              className="w-full p-1 border rounded-md border-slate-400"
              required
            ></textarea>
          </div>
          <button
          className="border-gray-950 bg-[#0c7075] text-sm text-white 
         font-bold 
          px-8 py-2 rounded-xl hover:bg-gray-900 
        
        font-sans  flex ml-0"
        >
         Submit
          
        </button>
        </form>
      </div>
      </div>

      </div>
   
  )
}

export default Footer