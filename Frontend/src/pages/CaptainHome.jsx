import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRidePanel from "../components/ConfirmRidePanel";

function CaptainHome() {
  const [ridePopPanel, setRidePopPanel] = useState(true);
  const [confirmRidePopPanel, setConfirmRidePopPanel] = useState(false);
  const confirmRidePopPanelRef = useRef();
  const ridePopPanelRef = useRef();

  useEffect(() => {
    if (ridePopPanel) {
      gsap.to(ridePopPanelRef.current, {
        transform: "translate(0%)",
      });
    } else {
      gsap.to(ridePopPanelRef.current, {
        transform: "translate(100%)",
      });
    }

    if(confirmRidePopPanel){
      gsap.to(confirmRidePopPanelRef.current, {
        transform : "translateY(0%)"
      })
    }else{
      gsap.to(confirmRidePopPanelRef.current, {
        transform : "translateY(100%)"
      })
    }
  }, [ridePopPanel, confirmRidePopPanel]);
  return (
    <>
      <div className="h-screen">
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
        <div className="absolute bottom-0 bg-white w-full h-2/5 p-6">
          <CaptainDetail />
        </div>
        <div>
          <div
            ref={ridePopPanelRef}
            className="fixed z-10 bottom-0 translate-y-[100%]  bg-white w-full px-3 py-10 pt-10"
          >
            <RidePopUp setRidePopPanel={setRidePopPanel} setconfirmRidePopPanel={setConfirmRidePopPanel} />
          </div>
          <div
            ref={confirmRidePopPanelRef}
            className="fixed z-10 bottom-0 h-full translate-y-[100%]  bg-white w-full px-3 py-10 pt-10"
          >
            <ConfirmRidePanel setConfirmRidePopPanel={setConfirmRidePopPanel} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaptainHome;
