import React from 'react'

function CoursesC(props) {
  return (
    <div className='courseC rounded-lg w-64 h-[50vh] p-9 bg-zinc-900'>
        <img className='W-full h-fit   bg-blue-950 rounded-lg' src={props.img} alt="" />
        <h1 className='pt-6 font-semibold mb-5'>{props.title}</h1>
        <a className='px-5 py-2 bg-blue-900 rounded-lg hover:bg-blue-700 ' href={props.url}>Learn More </a>
    </div>
  )
}

export default CoursesC