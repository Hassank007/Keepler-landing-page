import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <div className="bg-[#072e33] h-[76rem]">
      <div className="flex flex-col items-center pt-28 pb-14 ">
        <h1 className=" text-white text-5xl font-sans font-semibold ">
          OUR PORTFOLIO
        </h1>
       
      </div>

      <div className="flex flex-row items-center justify-center space-x-12">
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">GLOBAL AVIATION CLUB</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover1.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">TELUGU AIRLINE</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover2.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">CORAL WEALTH</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover3.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">PARRAMATTA REAL ESTATE</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
      </div>
      {/* SECOND BOX */}
      <div className="flex flex-row items-center justify-center space-x-12 pt-32">
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">GLOBAL AVIATION CLUB</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover2.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">CORAL WEALTH</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover3.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">PARRAMATTA REAL ESTATE</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
        <div className="bg-[#072e33] rounded-xl w-72 h-[19rem] outline outline-white flex flex-col items-center">
          <div className=" ">
            <img
              src="MainCover1.webp"
              className=" flex flex-col items-center justify-center w-full  "
            />
          </div>
          <div className="bg-white text-[#0c7075] flex flex-col text-center w-[18.4rem] h-9 pt-6 pb-20 rounded-b-lg">
            <h2 className="text-xl font-bold">TELUGU AIRLINE</h2>
            <p className="text-xl font-semibold">Website</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center pt-[9rem]">
        <button
          className="border-gray-950 bg-[#0c7075] text-sm text-white px-10 py-3 rounded hover:bg-gray-900 
        
        font-sans font-semibold flex ml-5"
        >
          View All
          <FaArrowRight className="ml-3 mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
