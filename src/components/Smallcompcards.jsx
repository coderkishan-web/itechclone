import React from 'react'

function Smallcompcards(props) {
  return (
    <div className='rounded-lg compcards p-4 h-fit w-96 flex justify-center items-center flex-col shadow-[0_5px_30px_#172554] m-3'>
      <h1 className='text-lg'>{props.city}</h1>
    </div>
  )
}

export default Smallcompcards