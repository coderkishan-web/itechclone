import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Imageslider() {
  return (
    <Carousel className='w-full h-auto' showArrows={true} autoPlay={true} infiniteLoop={true} showIndicators={true}  showStatus={false} interval={5000} transitionTime={2000} swipeable={true}>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/07/6_cleanup-transformed-1.png.webp" alt="" />
      </div>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/07/3_cleanup-transformed-1.png.webp" alt="" />
      </div>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/07/1-1.png.webp" alt="" />
      </div>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/08/a-sleek-and-modern-website-banner-for-software-eng-o0UlD5SPRvilCZ78xL05rA-109kNRD7StyxOrp5kRnEiA.jpeg.webp" alt="" />
      </div>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/07/2-1.jpg.webp" alt="" />
      </div>
      <div>
        <img src="https://i-tech.net.in/wp-content/uploads/2024/07/3-3.png" alt="" />
      </div>
    </Carousel>
  )
}

export default Imageslider