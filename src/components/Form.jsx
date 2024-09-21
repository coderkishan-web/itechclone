import React from 'react'

function Form(props) {
  return (
    <>
    <div className="container flex  h-screen bg-zinc-800 justify-evenly items-center ">
        <div className="allinfo w-full h-fit text-left bg-zinc-800 m-3 p-9">
          <h3 className='text-lg font-bold text-blue-600'>{props.title}</h3>
         <h1 className='text-5xl font-extrabold text-blue-900'>
        {props.head}
         </h1>
         <p className='pt-3 m-1'>{props.desc}</p>
         <h4 className='mt-7 text-blue-400'>{props.office}</h4>
         <h4 className='font-bold'>{props.num}</h4>
        <button className='p-3 border-2 rounded-lg border-blue-900 mt-3 hover:bg-blue-800' > {props.btn}</button>
        </div>
        <div className="formarea w-full h-fit text-left mt-7">
                <form action="" className='p-7 border-2 m-5 rounded-lg border-blue-900  shadow-[0_5px_40px_#2e3f8d]'>
                    <div className=' w-full flex my-3 justify-center items-center gap-3'>
                    <input  className='w-full'  type="text" placeholder='First Name' />
                    <input className='w-full ' type="text" placeholder='Last Name' /> 
                    </div>
                    <div className=' w-full  pr-5 my-3'>
                    <input className='w-full my-3'  type="text" placeholder='+91 9922XXX678' /><br />
                    <input className='w-full'  type="text" placeholder='Course you want' /><br />
                    </div>
                    <input className='py-2 px-4 border-2 rounded-lg border-blue-900 mt-3 hover:bg-blue-800' type="submit" value="Submit" />

                </form>
        </div>
    </div>
    </>
  )
}

export default Form