import React, { useMemo } from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import CarCard from "./HomeComponents/CarCard";
import CarCard2 from "./HomeComponents/CarCard2";
import CarCard3 from "./HomeComponents/CarCard3";

function Home() {
  const MemoizedHomeSlider = useMemo(() => <HomeSlider />, []);
  const MemoizedCarCard = useMemo(() => <CarCard />, []);
  const MemoizedCarCard2 = useMemo(() => <CarCard2 />, []);
  const MemoizedCarCard3 = useMemo(() => <CarCard3 />, []);

  return (
    <>
      <div className="container mx-auto">
        {MemoizedHomeSlider}
        <div>
          {MemoizedCarCard}
        </div>
      </div>
      {MemoizedCarCard2}
      {MemoizedCarCard3}
    </>
  );
}

export default Home;
