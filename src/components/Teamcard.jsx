import React from 'react'

function Teamcard(props) {
  return (
    <div>
        <div className="card rounded-lg w-96 h-[75vh]  hover:shadow-[0_5px_60px_#2e3f8d] p-9 bg-zinc-800 ">
            <img className='W-full h-fit   bg-blue-950 rounded-lg' src={props.img} alt=""  />
            <h1 className='pt-6 font-semibold'>{props.name}</h1>
            <p className='p-1'>{props.position}</p>
        </div>
    </div>
  )
}

export default Teamcard