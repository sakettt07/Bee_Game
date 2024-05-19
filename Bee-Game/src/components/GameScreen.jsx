import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import bat from "../assets/images/bat1.png";
import Bees from "./Bees";

const GameScreen = () => {
  const [xvalue, setXvalue] = useState(0);
  const [yvalue, setYvalue] = useState(0);
  const [rota, setRota] = useState(60);
  const [score, setScore] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 50);
  const randomY = gsap.utils.random(-500, 300, 50);
  const move = gsap.utils.random(-360, 60, 30);

  const BeesAry=[
    <Bees />,
    <Bees />,
    <Bees />,
  ]


  useGSAP(() => {
    gsap.to(".makhi", {
      x: xvalue,
      y: yvalue,
      duration: 0.6,
      rotate: rota,
    });
  }, [xvalue, yvalue, rota]);

  return (
    <div
      className="relative overflow-hidden h-screen w-full bg-zinc-900"
    >
      <h1 className="text-red-500 text-center text-[6vw]">
        Hit - <span className="text-white">{`${score}`}</span>{" "}
      </h1>
      <div>{BeesAry.map((item) => item)}</div>
      <button onClick={(event) => {
      setXvalue(randomX);
      setYvalue(randomY);
      setRota(move);
      event.stopPropagation(); // Stop event bubbling
    }} className="absolute bottom-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-3 hover:bg-blue-800">
        Move Bee
      </button>
      <img
        
        className="bat w-42"
        src={bat}
        alt=""
      />
    </div>
  );
};

export default GameScreen;
