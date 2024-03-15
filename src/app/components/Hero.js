'use client'
import React from "react";
import { FaPhone,FaArrowRight } from 'react-icons/fa6';
import { useState } from "react";
const Hero = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can send the form data to your backend or perform any other action
  };
  return (
    <div className=" flex justify-evenly">
    {/* Background image */}
    <div
      className="z-0 bg-cover w-[98.9rem] h-[796px]"
      style={{ backgroundImage: "url('hero-bg.webp')" }}
    >

    <div className="relative z-10 flex flex-col items-center justify-center w-full">

      {/* Logo */}
      <div className="absolute top-[187px] left-[50px] right-0 bottom-0   flex items-start justify-start">
        <img src="logo.png" className="h-[6rem] w-auto" alt="Logo" />
        </div>
      <div className="absolute text-white top-[390px] left-[47px] text-4xl font-semibold font-sans leading-[3rem]">
        <h1>IN 99$, GROW YOUR BRAND WITH <br/> KEPLERX GLOBAL DIGITAL COMPANY </h1>

      </div>
      <div className="absolute text-white top-[498px] left-[47px] text-1xl  font-sans leading-[1.5rem]"><p>Are you ready to transform your brand's growth and online presence? <br/>Just take a look we have achieved it!
        </p></div>
        <div className="absolute top-[571px] left-[45px] space-x-6 ">
        <div className="flex ">
        <button className="border-gray-950 bg-[#0c7075] text-sm text-white px-10 py-3 rounded hover:bg-gray-900 font-sans font-semibold flex ml-5" >Let's Get Started<FaArrowRight className='ml-3 mt-1'/></button>
      
      <button className="border-gray-950 bg-[#0c7075] text-sm text-white px-10 py-3 rounded hover:bg-gray-900 font-sans font-semibold flex ml-5" >Contact Us Now<FaPhone className='ml-3 mt-1'/></button>
      </div>
      </div>
      </div>
      {/* // CONTACT FORM */}
      <div className="flex items-center justify-center absolute left-[65rem] top-[9rem]">
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
      </div>
    
  );
};

export default Hero;
