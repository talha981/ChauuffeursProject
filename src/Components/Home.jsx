import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import CarCard from "./HomeComponents/CarCard";
import CarCard2 from "./HomeComponents/CarCard2";


function Home() {


  return (
    <>
    <div className="container mx-auto  ">
      <HomeSlider/>
      <div className=" ">
    <CarCard />
  </div>
    </div>
    <CarCard2/>
    </>
  );
}

export default Home;
