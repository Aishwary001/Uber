import React from 'react'

function LocationSearchPanel( props ) {
  
  const locations = [
    "4B, near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "44B, near Malhotra's cafe, Sheryians Coding School, Bhopal" ,
    "84B, near Singhania's cafe, Sheryians Coding School, Bhopal" ,
    "254B, near Sharma's cafe, Sheryians Coding School, Bhopal" ,
  ]

  return (
    <div className=''>
        {
          locations.map((key,idx)=>{
            return (
              <div onClick={() => {
                props.setPanelOpen(false)
                props.setVehiclePanel(true)
              }} key={key} className='p-5 mx-2 flex rounded-xl border-2 active:border-black border-white  my-2 gap-4 justify-start items-center'>
                  <h4 className='bg-[#eee] h-10 flex items-center text-3xl justify-center w-15  rounded-full'><i className='ri-map-pin-fill'></i></h4>
                  <h4 className='font-medium'>{locations[idx]}</h4>
              </div>
            )
          })
        }
    </div>
  )
}

export default LocationSearchPanel