import React from 'react'
import Imageslider from '../components/Imageslider'
import Studentplacedat from '../components/Studentplacedat'
import Studentatcampus from '../components/Studentatcampus'
import Whychoose from '../components/Whychoose'
import Form from '../components/Form'

function Home() {
  return (
   <>
   <Imageslider/>
   <div className='flex justify-center items-center gap-3'>
    <h1 className='text-lg font-bold'>Student's Placed at :-</h1>
    <Studentplacedat/>
   </div>
   <div>
    <Studentatcampus/>
   </div>
   <div>
    <Whychoose/>
   </div>
   <div>
    <Form
    title=""
    head="Smart Career With Great Opportunity"
    desc="At I-Tech Computer Education, we are dedicated to providing top-notch IT training that empowers individuals to excel in the fast-paced world of technology. Our comprehensive courses cover a wide range of topics, including coding, web design, software development, and digital marketing. With a team of expert trainers who bring real-world experience to the classroom, we ensure that our students gain practical skills and industry insights that are immediately applicable."
    btn="Explore More Coures"
    office=""
    num=""
    
    />
   </div>
   
   </>
  )
}

export default Home