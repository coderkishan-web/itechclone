import React from 'react'

function Blogcard(props) {
  return (
    <div className='w-[500px] h-fit  p-4 pb-8 text-left rounded hover:shadow-[0_5px_30px_#2e3f8d]'>
       <img className='w-full m-1 rounded-md' src={props.img} alt="" />
       <h1 className='text-lg font-bold my-2'>{props.title}</h1>
       <p className='text-sm py-1'>{props.publish}</p>
       <p className='text-md mb-4'>{props.description}</p>
       <a href={props.link} className='bg-blue-800 py-2 px-4 hover:bg-blue-950 rounded-md '>Read More</a>
    </div>
  )
}

export default Blogcard