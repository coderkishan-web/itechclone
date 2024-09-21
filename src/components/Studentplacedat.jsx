import React, { useEffect, useState } from 'react'

function Studentplacedat() {
    const images=[
        "https://i-tech.net.in/wp-content/uploads/2024/07/Tata_Consultancy_Services_Logo.svg.webp",
        "https://i-tech.net.in/wp-content/uploads/2024/07/Red_Chillies_Entertainment_logo.webp",
        "https://i-tech.net.in/wp-content/uploads/2024/07/Tech_Mahindra-Logo.wine_.png.webp",
        "https://i-tech.net.in/wp-content/uploads/2024/07/Dope-Logo-01-e1704089116713.png.webp",
        "https://i-tech.net.in/wp-content/uploads/2024/07/3f767b75871141.Y3JvcCw4MDgsNjMyLDAsMA.png.webp",
        "https://i-tech.net.in/wp-content/uploads/2024/07/IBM-Logo-Design-1972-present.png.webp"
    ]
    const[currentindex,setcurrentindex]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
           setcurrentindex(   (previous)=>(previous +1) % images.length )
        
        },10000)
    },[currentindex])

  return (

         <div className="carousel-container" style={{ textAlign: 'center' }}>
             <div className="carousel placedimage">
      
        <img className='placedimage'
          src={images[currentindex]}
          alt={`Slide ${currentindex}`}
          style={{ width: '350px', height: '200px' }}
        />
      </div>
    </div>
  )
}

export default Studentplacedat;