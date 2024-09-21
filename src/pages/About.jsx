import React, { useEffect, useState } from 'react'
import Teamcard from '../components/Teamcard';
import Staffcard from '../components/Staffcard';

function About() {
 const [follow,setfollow]=useState({x: 0, y:0});

const abtchanged=(e)=>{
  setfollow({
    x:e.clientX,
    y:e.clientY
  });
};

useEffect(()=>{
window.addEventListener('mousemove',abtchanged)

return()=>{
  window.removeEventListener('mousemove',abtchanged)
}
},[])

const imgstyle={
  position:'absolute',
  top: `${follow.y - 25}px`,  
  left: `${follow.x - 25}px`, 
  width: '50px',
  height: '50px',
  backgroundColor: '#2e3f8d',
  borderRadius: '50%',
  pointerEvents: 'none', 
  transition: 'top 0.1s, left 0.1s',
}

const cardData = [
  {
    name: 'RATNESH MISHRA',
    position: 'AREA MANAGER',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/ratnesh-e1721312853149-qtd6ckfiso1zmr130bl0a9otdv6vks4gq0jvdql7rc.jpeg'
  },
  {
    name: 'PRIYA DESHMUKH',
    position: 'NALLASOPARA EAST CENTER HEAD',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/priya-e1721312769706-qtd6cb14wbp4eneqj7iqlc27g0h7ft35cq10kyz5hk.jpeg'
  },
  {
    name: 'MEGHA SAWANT',
    position: 'NERUL CENTER HEAD',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/megha-qtd6csw2i6dkj8osmx8nepjyqc16i221r6f8p88o7c.jpeg'
  },
  {
    name: 'PRIYANSHU JHA',
    position: 'VASAI CENTER 1 HEAD',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/priyanshu-e1721836551355-qtd6cfqbuhvk0p7wrrjvfsviexu1ialt1dafzcs6mg.jpeg'
  },
  {
    name: 'VIJAY GOHIL',
    position: 'VASAI CENTER 2 HEAD',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/20240718_172658-scaled-e1721312563639-qtd6ss5aos91wlh7btwbsoe2a59tcthry9oeekjqfc.jpg'
  },
  {
    name: 'SUDEEKSHA MOGERA',
    position: 'NALLASOPARA WEST CENTER HEAD',
    imag: 'https://i-tech.net.in/wp-content/uploads/elementor/thumbs/Screenshot-2024-07-18-073130-e1721836524403-qtd6t84jwyuxdytzqiszh2cwdp31zo97ogrnk9w1hk.png'
  }
];

return (
  <>
<img className='w-full h-96 object-cover' src="https://i-tech.net.in/wp-content/uploads/2024/07/a-sleek-and-modern-website-banner-for-i-tech-compu-necEHHzETNG5Wb2nHeeBaQ-cC56lNkPQ7eJ6sh44E3yDw.jpeg" alt="" />
<div className="relative w-full h-auto  aboutus p-7 ">
  <div className=" w-full h-60 shadow-[0_5px_30px_#2e3f8d] abt rounded-lg  mission flex justify-evenly items-center mb-2" onMouseMove={abtchanged}>
 <span style={imgstyle} className='shadow-[0_5px_60px_#2e3f8d]'></span>
<p className='w-full text-left p-12'>Providing quality education to empower individuals in the field of technology. Fostering innovation and creativity through hands-on learning experiences. Building a strong foundation in computer science for students of all ages.</p>
<h1 className='w-full'>OUR MISSION <i class="fa-solid fa-laptop-code text-2xl ml-3"></i></h1>
  </div>
  <div className="w-full h-60 shadow-[0_5px_30px_#2e3f8d] abt rounded-lg  vision flex justify-evenly items-center mt-5">
    <h1 className='w-full'><i class="fa-solid fa-eye text-2xl mr-3"></i> OUR VISION  </h1>
<p className='w-full text-left p-12'>Encouraging continuous learning and professional development. Creating a supportive and inclusive learning environment. Partnering with industry leaders to provide real-world insights and opportunities.</p>
  </div>
</div>
{/* our team  */}
<h1 className='text-left font-bold text-2xl pl-5 mt-12 text-blue-800'>Our Team</h1>
<h1 className='text-left font-bold text-5xl pl-4 pt-2 '>Our Professional Team</h1>
<div className="ourteam flex justify-evenly items-center w-full h-screen mt-5">

  <Teamcard img="https://i-tech.net.in/wp-content/uploads/2024/08/admin-ajax.jpeg.webp" 
  name="MOIZ HYDERBADWALA"
  position="Managing Director"
  /> <Teamcard img="https://i-tech.net.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-25-at-20.56.35.jpeg.webp" 
  name="SOHAM BHUTA"
  position="Director"
  /> 

</div>
<div className="w-full h-auto py-7 bg-blue-950 px-32 staff flex  flex-wrap justify-evenly gap-9 items-center">
  {
    cardData.map((data,index)=>(
      <Staffcard 
      key={index}
      img={data.imag} 
      name={data.name}
      position={data.position}

      /> 
    ))
  }
</div>
</>
  )
}

export default About