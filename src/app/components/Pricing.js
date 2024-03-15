import React from "react";
import { TiTick } from "react-icons/ti";
const Pricing = () => {
  return (
    <div className="bg-[#072e33] h-[70rem]">
      <div className="flex flex-col items-center pt-28 pb-14 ">
        <h1 className=" text-white text-5xl font-sans font-semibold ">
          OUR PRICING
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10">
        <div className="flex bg-[#0c7075] flex-col w-[25rem] h-[34rem] max-w-full rounded-xl outline outline-white">
          <div className="flex flex-col items-center justify-center pt-10">
            <button className="border-gray-950 bg-[#0c7075] text-white px-6 py-1 outline hover:bg-gray-900 rounded-xl ">
              Bronze
            </button>
            
          </div>
          <div className="flex flex-row items-center justify-center py-9">
          <h1 className="text-6xl text-white font-semibold font-sans">$99</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 5 pages</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 3 Revision cycle</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Mobile Friendly</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Live Chat</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Social Media Integeration</p>
            <button
          className="border-gray-950 bg-white text-sm text-[#0c7075] 
         font-bold 
          px-10 py-3 rounded-xl hover:bg-gray-900 
        
        font-sans  flex ml-5"
        >
         Choose Package
          
        </button>
          
          </div>
          
        </div>
         {/* SECOND BUTTON */}
        <div className="flex bg-white flex-col w-[26rem] h-[40rem] max-w-full rounded-xl outline outline-white">
          <div className="flex flex-col items-center justify-center pt-10">
            <button className="border-gray-950 bg-white text-[#0c7075] px-6 py-1 outline hover:bg-gray-900 rounded-xl ">
             Silver
            </button>
            
          </div>
          <div className="flex flex-row items-center justify-center py-9">
          <h1 className="text-6xl text-[#0c7075] font-semibold font-sans">$139</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 5 pages</p>
            <p className="flex flex-row text-xl font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 3 Revision cycle</p>
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Mobile Friendly</p>
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Live Chat</p>
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Social Media Integeration</p>
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>CDN</p>
            <p className="flex flex-row text-lg font-sans text-[#0c7075]"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Site Kit</p>
            <button
          className="border-gray-950 bg-[#0c7075] text-sm text-white px-10 py-3 rounded-xl hover:bg-gray-900 
        
        font-sans font-bold flex ml-5"
        >
          Choose Package
          
        </button>
          </div>

        </div>
       {/* THIRD BUTTON */}
        <div className="flex bg-[#0c7075] flex-col w-[29rem] h-[44rem] max-w-full rounded-xl outline outline-white">
          <div className="flex flex-col items-center justify-center pt-10">
            <button className="border-gray-950 bg-[#0c7075] text-white px-6 py-1 outline hover:bg-gray-900 rounded-xl ">
              Gold
            </button>
            
          </div>
          <div className="flex flex-row items-center justify-center py-9">
          <h1 className="text-6xl text-white font-semibold font-sans">$199</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 5 pages</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>upto 3 Revision cycle</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Mobile Friendly</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Live Chat</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Social Media Integeration</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>CDN</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>Site Kit</p>
            <p className="flex flex-row text-lg font-sans text-white"><TiTick className="text-4xl pb-2 text-[#072e33]"/>On Page SEO</p>
            <button
          className="border-gray-950 bg-white text-sm text-[#0c7075] 
         font-bold 
          px-10 py-3 rounded-xl hover:bg-gray-900 
        
        font-sans  flex ml-5"
        >
         Choose Package
          
        </button>

          </div>
         
          <div>
    
            
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default Pricing;
