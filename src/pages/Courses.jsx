import React from 'react'
import CoursesC from '../components/CoursesC'

function Courses() {

  const coursedata=[
    {
      title:"Full Stack Web Development",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/software-developer-6521720_640.webp",
      url:""
    },
    {
      title:"Data Science",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/360_F_561668172_fh0ZViF0WAOre6MwqGNV0ZdC1W5ysD6X.webp",
      url:""
    },
    {
      title:"Data Analytics",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/big-data-technology-business-finance-analytic-concept-modern-graphic-interface-shows-massive-information_1029469-30054.webp",
      url:""
    },
    {
      title:"Digital Marketing",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/digital-marketing-and-technology.webp",
      url:""
    },
    {
      title:"Graphic Designing",
      img:"https://imgs.search.brave.com/DnEhL_uZWmJMhBVvrASNS7tSTDUImakFhvbcg-yG6tM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3Lzc4LzM4/LzM2MF9GXzE2Nzc4/MzgyOF9KSmkxYmpC/UzNHNkdnb0NWbkx2/dERSZ1gxcWtzREJj/Ti5qcGc",
      url:""
    },
    {
      title:"Animation & Motion Graphics",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/image-1_1681884444.jpg.webp",
      url:""
    },
    {
      title:"VFX & Flim Making",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/Career-Opportunities-in-VFX-Industry.jpg.webp",
      url:""
    },
    {
      title:"Company Accountant",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/Everything-you-need-to-know-about-Corporate-Accounting-1536x864.webp",
      url:""
    },
    {
      title:"Auto CAD",
      img:"https://i-tech.net.in/wp-content/uploads/2024/07/poznan-pol-dec-24-2023-600nw-2409558657.webp",
      url:""
    }
    
    
  ]
  return (
   <>
   <div className="titlecourse h-64 w-full flex justify-center items-center">
    <h1 className='font-extrabold text-5xl bg-transparent backdrop-blur px-7 py-1 rounded-md'>Courses</h1>
   </div>
   <div className='design'></div>
 
  <div className="w-full h-auto courses flex flex-wrap justify-evenly items-center gap-12 px-32 py-4 ">
     
     {
      coursedata.map((course,index)=>(

        <CoursesC
           title={course.title}
           img={course.img}   
           url={course.url}   

   
         />    
      ))
     }
     
    </div>  
    <div className='p-3'>
      <div  className='add h-96 w-auto m-3 rounded-3xl flex flex-col'>
      <div className="infoadd pl-10 text-left pt-6">
      <h2 className='text-xl m-2 font-bold'>Why Choose Us</h2>
        <h1 className='text-5xl mt-4 font-semibold'>EXPLORE OUR <br />
        TRENDING COURSES</h1>
        <p className='m-2'>Be One Step Ahead of the World and Grab Your Favorite Career at Your Doorstep with us.</p>
      </div>
      <div className="addoncourse pt-24 text-lg font-bold  text-left flex justify-evenly items-center">
        <h2>Software Courses</h2>
        <h2>Accounting Courses</h2>
        <h2>Digital Marketing</h2>
        <h2>Designing Courses</h2>
        <h2>Engineering Courses</h2>
      </div>
      </div>
    </div>

   </>
  )
}

export default Courses