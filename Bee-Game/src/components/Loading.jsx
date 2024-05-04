import React, { useState, useEffect } from "react";
import bee from "../assets/images/mainBe.jpg";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import beeSound from "../assets/beesSound.mp3";

const Loading = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioElement = document.getElementById("beeAudio");
    audioElement.play();
  }, []); // Empty dependency array ensures that effect runs only once after initial render

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    const audioElement = document.getElementById("beeAudio");
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  return (
    <div className="bg-black relative h-screen w-full">
      {isPlaying ? (
        <FaCirclePause
          className="absolute cursor-pointer right-2 bottom-1 md:right-7 md:bottom-8 text-white text-[30px]"
          onClick={toggleAudio}
        />
      ) : (
        <FaCirclePlay
          className="absolute cursor-pointer right-2 bottom-1 md:right-7 md:bottom-8 text-white text-[30px]"
          onClick={toggleAudio}
        />
      )}
      <div className="p-5">
        <img
          className="absolute w-[35rem] top-[30%] left-1/2 -translate-y-1/2 pb-5 mt-9 -translate-x-1/2"
          src={bee}
          alt=""
        />
        <h1 className="text-yellow-500 mt-28 md:mt-36 text-[14vw] whitespace-nowrap md:text-[8vw] font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          BEE <span className="text-red-600">KILLER</span>
        </h1>
        <button
          className="overflow-hidden absolute mt-[-20px] md:mt-8 w-32 p-2 h-12 bg-neutral-900 text-white border-none rounded-md text-xl font-bold cursor-pointer bottom-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group"
        >
          Play
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Lets Kill
          </span>
        </button>
      </div>
      <audio id="beeAudio" src={beeSound}></audio>
    </div>
  );
};

export default Loading;
