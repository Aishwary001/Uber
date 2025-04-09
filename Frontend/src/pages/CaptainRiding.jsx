import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
  const [ finishCaptainRidePanel, setFinishCaptainRidePanel ] = useState(false);
  const finishCaptainRideRef = useRef(null);

  useEffect(()=>{
    if(finishCaptainRidePanel){
      gsap.to(finishCaptainRideRef.current, {
        transform : "translateY(0%)"
      })
    }else{
      gsap.to(finishCaptainRideRef.current,{
        transform : "translateY(100%)"
      })
    }
  })
  return (
    <div className="h-screen relative">
      <div className="fixed w-full p-4 flex justify-between">
        <h1 className="font-bold text-5xl">Uber</h1>
        <Link
          to="/captain-logout"
          className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center"
        >
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-screen">
        <img
          className="w-full h-full object-cover"
          src="../../public/photo1.gif"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 h-1/5 p-6 flex items-center justify-between bg-yellow-600 w-full" onClick={()=> setFinishCaptainRidePanel(true)}>
        <h5
          onClick={() => {}}
          className="absolute p-1 text-center top-0 w-[93%]"
        >
          <i className="text-gray-500 text-3xl ri-arrow-up-line"></i>
        </h5>
        <h4 className="font-semibold text-xl">4 Km Away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete ride
        </button>
      </div>
      <div ref={finishCaptainRideRef}  className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-10">
          <FinishRide setFinishCaptainRidePanel={setFinishCaptainRidePanel} />
      </div>
    </div>
  );
}

export default CaptainRiding;
