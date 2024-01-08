import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import data from "./slideData";
import Item from "./Item";
const Quates = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const onPrevClick = () => {
    slideIndex === 0
      ? setSlideIndex(data.length - 1)
      : setSlideIndex(slideIndex - 1);
  };

  const onNextClick = () => {
    slideIndex === data.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };
  return (
    <div className="relative pt-5 mt-5  bg-blue-400 ">
      <div className="text-center font-extralight text-4xl text-white border-b pb-10 mx-20">
        <h1>Inspiring Quotes</h1>
      </div>
      <div className="relative w-full h-[80vh] flex justify-center items-center">
        <div
          className="absolute left-4 p-1 text-white text-3xl cursor-pointer"
          onClick={onPrevClick}
        >
          <FaArrowLeftLong />
        </div>
        {data.map(
          (slide, index) =>
            slideIndex === index && <Item item={slide} key={index} />
        )}
        <div
          className="absolute right-4 p-1 text-white text-3xl cursor-pointer"
          onClick={onNextClick}
        >
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Quates;
