import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import CarCard from "./HomeComponents/CarCard";


function Home() {


  return (
    <div className="container mx-auto  min-h-screen">
      <HomeSlider/>
      <div className="mt-40">
    <CarCard />
  </div>




     
    </div>
  );
}

export default Home;
