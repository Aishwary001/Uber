import React from 'react'

function WaitingForDriver(  props ) {
  return (
    <div>
    <h5
      onClick={() => {
        props.setWaitingForDriver(false);
      }}
      className="absolute p-1 text-center top-0 w-[93%]"
    >
      <i className="text-gray-500 text-3xl ri-arrow-down-line"></i>
    </h5>
    <h3 className="text-2xl font-bold mb-5">Waiting For Drivers</h3>

    <div className='flex items-center justify-between'>
        <img className='h-12' src="../../public/vite.svg" alt="" />
        <div>
            <h2 className='text-lg font-medium'>Aishwary</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP07 1234</h4>
            <p className='text-gray-600 text-sm'>Maruti Suzuki 800</p>
        </div>
    </div>
    <div className="flex flex-col justify-between gap-2">
      <img className="h-20" src="../../public/vite.svg" alt="" />
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
    </div>
  </div>
  )
}

export default WaitingForDriver