import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let datas = props.datas;
  const [index, setIndex] = useState(0);

  function rightShiftHandler() {
    if (index + 1 >= datas.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(datas.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * datas.length);
    setIndex(randomIndex);
  }

  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl rounded-md"
    >
      <Card data={datas[index]} />

      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
