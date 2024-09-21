import React from 'react'

function Compcards(props) {
  return (
    <div className='rounded-lg compcards p-4 h-44 gap-2 flex justify-center items-center flex-col shadow-[0_5px_30px_#172554]'>
      <i className='text-lg'><i class="fa-solid fa-location-dot"></i></i>
      <h1 className='text-lg '>{props.name}</h1>
      <p className='w-96'>{props.add}</p>
    </div>
  )
}

export default Compcards