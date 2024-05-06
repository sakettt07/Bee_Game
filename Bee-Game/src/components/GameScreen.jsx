import React, { useRef } from 'react';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const GameScreen = () => {
  const bref=useRef();
  useGSAP(()=>{
    gsap.from(".box",{
      y:200,
      scale:1.3,
      yoyo:true,
      opacity:0,
      duration:1.9,
      x:200
    })
  })
  return (
    <>
    <div className='h-screen w-full bg-zinc-950'>

      <h2 ref={bref} className='textt text-white text-[8vw]'>This is my game screen</h2>
      <div className='box h-32 w-32 bg-yellow-400'></div>
    </div>
    </>
  )
}

export default GameScreen
