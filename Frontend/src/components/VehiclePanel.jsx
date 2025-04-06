import React from 'react'

function VehiclePanel( props ) {
  return (
    <div>
        <h5 onClick={() => {
            props.setVehiclePanel(false)}
        } className="absolute p-1 text-center top-0 w-[93%]"><i className="text-gray-500 text-3xl ri-arrow-down-line"></i></h5>
        <h3 className="text-xl font-semibold mb-5">Choose a vehicle</h3>
        <div onClick={()=> props.setConfirmRidePanel(true)} className="flex mb-2 border-2 border-gray-300 active:border-black transition-all duration-300 rounded-xl p-3 w-full items-center justify-between">
          <img className="h-10" src="../../public/vite.svg" alt="" />
          <div className=" w-1/2">
            <h4 className="text-sm font-medium">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="text-sm font-medium">2 mins away</h5>
            <p className="text-xs font-normal text-gray-600">
              Affordable compacts rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">$193.20</h2>
        </div>
        <div onClick={()=> props.setConfirmRidePanel(true)} className="flex mb-2 border-2 border-gray-300 active:border-black transition-all duration-300 rounded-xl p-3 w-full items-center justify-between">
          <img className="h-10" src="../../public/vite.svg" alt="" />
          <div className=" w-1/2">
            <h4 className="text-sm font-medium">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="text-sm font-medium">2 mins away</h5>
            <p className="text-xs font-normal text-gray-600">
              Affordable compacts rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">$193.20</h2>
        </div>
        <div onClick={()=> props.setConfirmRidePanel(true)} className="flex mb-2 border-2 border-gray-300 active:border-black transition-all duration-300 rounded-xl p-3 w-full items-center justify-between">
          <img className="h-10" src="../../public/vite.svg" alt="" />
          <div className=" w-1/2">
            <h4 className="text-sm font-medium">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="text-sm font-medium">2 mins away</h5>
            <p className="text-xs font-normal text-gray-600">
              Affordable compacts rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">$193.20</h2>
        </div>
        <div onClick={()=> props.setConfirmRidePanel(true)} className="flex mb-2 border-2 border-gray-300 active:border-black transition-all duration-300 rounded-xl p-3 w-full items-center justify-between">
          <img className="h-10" src="../../public/vite.svg" alt="" />
          <div className=" w-1/2">
            <h4 className="text-sm font-medium">
              UberGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="text-sm font-medium">2 mins away</h5>
            <p className="text-xs font-normal text-gray-600">
              Affordable compacts rides
            </p>
          </div>
          <h2 className="text-2xl font-semibold">$193.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel