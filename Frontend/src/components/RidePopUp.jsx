import React from 'react'

function RidePopUp(props) {
  return (
    <div>
      <h5
        onClick={() => {
             props.setRidePopPanel(false)
        //   props.setVehiclePanel(false)
        }}
        className="absolute p-1 text-center top-0 w-[93%]"
      >
        <i className="text-gray-500 text-3xl ri-arrow-down-line"></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">New Ride Available</h3>
      <div className='flex items-center justify-between bg-yellow-500 p-3 rounded-lg'>
        <div className='flex items-center gap-3'>
            <img className='rounded-full object-cover h-10 w-10' src="../../public/vite.svg" alt="" />
            <h2 className='text-xl font-semibold'>Sarthak Sggggg</h2>
        </div>
        <h3 className='text-xl font-semibold'>2.2km</h3>
      </div>
      {/* <div className="flex flex-col justify-between gap-2"> */}
        <div className="w-full mt-5">
          <div className="flex gap-4 border-b-2 p-3 items-center">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="text-lg -mt-1 text-gray-600">
                Kankariya Bada, Gwalior
              </p>
            </div>
          </div>
          <div className="flex gap-4 border-b-2 p-3 items-center">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562/11-A</h3>
              <p className="text-lg -mt-1 text-gray-600">
                Kankariya Bada, Gwalior
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-3 items-center">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="font-medium text-lg">193.24</h3>
              <p className="text-lg -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      {/* </div> */}
      <button onClick={()=>{
        props.setconfirmRidePopPanel(true)
        props.setRidePopPanel(false)
      }} className="w-full bg-green-600 text-white font-semibold text-2xl p-2 rounded-md mt-5">
        Accept
      </button>
      <button onClick={()=>{
        props.setRidePopPanel(false)
      }} className="w-full bg-gray-500 text-white font-semibold text-2xl p-2 rounded-md mt-2">
        Ignore
      </button>
    </div>
  )
}

export default RidePopUp