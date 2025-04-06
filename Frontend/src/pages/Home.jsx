import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
  const [pickUp, setPickUp] = useState();
  const [destination, setDestination] = useState();
  const [panelOpen, setPanelOpen] = useState(false);
  const [ vehiclePanel, setVehiclePanel ] = useState(false);
  const [confirmRidePanel , setConfirmRidePanel ] = useState(false);
  const [ vehicleFound, setVehicleFound ] = useState(false);
  const [ waitingForDriver, setWaitingForDriver ] = useState(false);
  const  waitingForDriverRef  =  useRef();
  const vehicleFoundRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(panelOpen);
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.5,
      });
    }

    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform : "translateY(0)"
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform : "translateY(100%)"
      })
    }

    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform : "translate(0)"
      })
      }else{
        gsap.to(confirmRidePanelRef.current, {
          transform : "translate(100%)"
        })
      }

    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform : "translateY(0)"
      })
    }else{
        gsap.to(vehicleFoundRef.current, {
          transform : "translateY(100%)"
        })
    }

    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform : "translateY(100%)"
      })
    }
  }, [panelOpen, vehiclePanel, confirmRidePanel, vehicleFound, waitingForDriver]);

  return (
    <div className="w-full relative h-screen overflow-hidden">
      <h2 className="text-6xl tracking-tight font-bold absolute left-5 top-5">
        Uber
      </h2>
      <div  className="w-screen h-screen">
        <img src="../../public/Photo1.gif" className="w-full h-full" alt="" />
      </div>
      <div className="flex flex-col h-screen justify-end top-0 absolute">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            onClick={() => setPanelOpen(false)}
            className="absolute right-5 top-3 text-xl"
          >
            {panelOpen && <i class="ri-arrow-down-wide-line"></i>}
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line h-17 w-1 rounded-md left-7 top-23 bg-black absolute"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              type="text"
              className="px-4 py-2 w-full rounded-lg text-2xl bg-[#eee] mt-5"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              className="px-4 py-2 w-full text-2xl rounded-lg bg-[#eee] mt-5"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef}  className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-10">
          <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-10">
          <ConfirmRide setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}  
          setVehicleFound = {setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-10">
          <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-10 pt-10">
           <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home;
