import React, { useState } from 'react'
import { useEffect } from 'react'

function Contactpop() {
    const[view,setview]=useState(false)
  const [wp,setwp]=useState(false)
  const [hide,sethide]=useState(false)
    const handleMouseEnter = () => {
      setview(true);
    };
  
    const handleMouseLeave = () => {
      setview(false);
    };

    const handleMouseEnterwp = () => {
      setwp(true);
    };
  
    const handleMouseLeavewp = () => {
      setwp(false);
    };
    const toggleVisibility = () => {
      sethide(!hide);
    };
  
   
  return (
    <>
 
    <div className='cpntactbox bottom-0 w-full h-15  fixed'>
        <div className="h-full flex  bottom-0 justify-center items-center ">
          <p className='bg-black text-white py-2 px-2 rounded-tl-lg' onClick={toggleVisibility}><i class="fa-solid fa-arrows-up-down"></i></p>

       {hide && 
      <>
         
       <div onMouseLeave={handleMouseLeave} className='flex relative justify-center items-center'>
       <p className='px-4 py-2 bg-violet-500 hire  '   onMouseEnter={handleMouseEnter} 
       ><i class="fa-solid fa-address-book"></i> Contact Us </p>
     { view &&   <div className="`box ${isVisible ? 'expand' : 'collapse'}` absolute bottom-10  w-72 gap-6 bg-zinc-900 box flex justify-center items-center flex-col p-3 rounded-md ">
         <h1>Contact Form</h1>
         <input  className='w-full rounded p-1' type="text" placeholder='Name' />
         <input  className='w-full rounded p-1' type="text" placeholder='Phone' />
         <input  className='w-full rounded p-1' type="email" placeholder='Email' />
         <textarea className='w-full rounded p-1'  name="" id="" placeholder='Message'></textarea>
         <input className='bg-green-600 px-4 py-1 rounded' type="submit" value="Submit" />    
        </div>} 
       </div>
     {wp &&
        <div onMouseLeave={handleMouseLeavewp} className='absolute h-full rounded-tl-full rounded-tr-full w-48  bottom-8 wp mx-2 bg-green-500 text-center'>Whatsapp
      </div>
     }
      <p className='bg-green-500 text-white py-2 px-3 rounded-tr-xl' onMouseEnter={handleMouseEnterwp } ><i class="fa-brands fa-whatsapp"></i></p>
    
      </>
       }
        </div>
    </div>
    </>
  )
}

export default Contactpop