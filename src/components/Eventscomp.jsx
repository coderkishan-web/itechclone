import React from 'react'

function Eventscomp(props) {
  return (
    <div className='w-full h-44 flex p-6 justify-around items-center  text-blue-600 hover:text-black hover:bg-blue-900 transition duration-600 ease-out hover:ease-in'>
        <p className='w-full font-black'>{props.date}</p>
        <p className='w-full font-thin'>{props.course}</p>
        <p className='w-full font-extrabold'>{props.staff}</p>
        <p className='w-full'>{props.location}</p>
    <a href={props.link} className='bg-blue-900 w-full text-white hover:bg-blue-950 py-3 px-3 transition duration-600 ease-out hover:ease-in'  >Register Now</a>
    </div>
  )
}

export default Eventscomp