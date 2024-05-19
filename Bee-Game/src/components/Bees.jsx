import React from 'react';
import bee from "../assets/images/bee1.png";
import beee from "../assets/images/bee2.png";
import makhi from "../assets/images/makhi.png";

const Bees = () => {
  return (
    <div>
        <img 
      className="makhi w-20 absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2"
      src={makhi}
      alt=""
    />
     <img 
      className="makhi w-20 absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2"
      src={bee}
      alt=""
    />,

    <img
      className="makhi w-20 absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2"
      src={beee}
      alt=""
    />
      
    </div>
  )
}

export default Bees
