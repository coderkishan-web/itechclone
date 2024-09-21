
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Studentatcampus() {
  return (
    <Carousel className='h-fit p-7' showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false}  showIndicators={true} 
    showThumbs={false} >
      <div className='w-full flex justify-evenly items-center p-4 mb-7 '>
    <div className="card w-72">
    <h1 className='font-bold text-2xl'>Sushmita Pal</h1>
        <h3 className='font-bold text-lg p-1'>Tata Consultancy Services(TCS)</h3>
        <img className='h-full m-3' src="https://i-tech.net.in/wp-content/uploads/2024/07/3-1.png.webp" alt="" />
    </div>
    <div className="card w-72">
    <h1 className='font-bold text-2xl'>Sushmita Pal</h1>
        <h3  className='font-bold text-lg p-1'>Tata Consultancy Services(TCS)</h3>
        <img className='h-full w-full' src="https://i-tech.net.in/wp-content/uploads/2024/07/4.png.webp" alt="" />
    </div>  
      </div>

      <div className='w-full flex justify-evenly items-center p-4 mb-7'>
    <div className="card w-72 ">
    <h1 className='font-bold text-2xl'>Bandhana Panda</h1>
        <h3  className='font-bold text-lg p-1'>Tata Consultancy Services(TCS)</h3>
        <img className='h-full w-full' src="https://i-tech.net.in/wp-content/uploads/2024/07/1.png.webp" alt="" />
    </div>
    <div className="card w-72">
    <h1 className='font-bold text-2xl'>Priyesh Singh</h1>
        <h3  className='font-bold text-lg p-1'>Tech Mahindra</h3>
        <img className='h-full w-full' src="https://i-tech.net.in/wp-content/uploads/2024/07/2-1.png.webp" alt="" />
    </div>  
      </div>
    </Carousel>
  )
}

export default Studentatcampus