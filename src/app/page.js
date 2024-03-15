import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Middle from "./components/Middle";

import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
   
   
      
       
     
       <>
       <div className="flex flex-col">
        <Hero/>
        <Middle/>
       <Service />
       <Portfolio />
       <Pricing />
       <Footer /> 
       {/* */}
       </div>
       </>
    );
}
