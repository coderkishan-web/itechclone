import React from 'react'
import Compcards from '../components/Compcards'
import Smallcompcards from '../components/Smallcompcards'
import Form from '../components/Form'

function Centers() {
  const dataset=[
    {
      name:"NALLASOPARA WEST",
      add:"Shop no. 12,14 & 28, Civic Center, Station Rd, opp. Panchmukhi Hanuman Temple Building"
    },
    {
      name:"NALLASOPARA EAST",
      add:"Shop No. 02, Sai Siddhi Apartment below Rajsukh hospital Taki Rd, Corner"
    },
    {
      name:"VASAI WEST",
      add:"Simran Apt. 1st & 2nd Floor, Vasai Station Rd, above Trupti Saree Centre, beside Dhuri medical,"
    },
    {
      name:"VASAI WEST",
      add:"109- First Floor, Vardhaman shopping Center, Above Tungareshwar Sweet, Near Footover Bridge, Vasai West"
    },
    {
      name:"NERUL WEST",
      add:"G/101, 1st Floor, Nerul Railway Station Complex, West, above Monginis Cake Shop,"
    }
  ]
  const othercenterdata=[
    {
      city:"KANDIVALI"
    },
    {
      city:"BHAYANDER"
    },
    {
      city:"GHATKOPAR"
    },
    {
      city:"MIRA ROAD"
    },
    {
      city:"THANE"
    },
    {
      city:"NERUL"
    },
    {
      city:"BOISAR"
    },
    {
      city:"VIRAR"
    },
    {
      city:"DARBHANGA"
    }
  ]
  return (
   <>
   <div className="centershead w-full h-64 flex justify-center items-center text-6xl font-extrabold">
   Centers
   </div>

    <div className="centers w-full h-fit  gap-3 flex flex-wrap justify-center items-center py-20">
        {
          dataset.map((data,index)=>(
             <Compcards
             key={index}
             name={data.name}
             add={data.add}
             />    
          ))
        }
    </div>
    <div className="othercenters h-fit py-20 w-full">
      <h1 className='text-2xl m-4'>OUR OTHER CENTERS</h1>
      <div className="cities flex flex-wrap justify-evenly items-center gap-2">
        {
          othercenterdata.map((elem,index)=>(
            <Smallcompcards
            key={index}
            city={elem.city}
            />  
          ))          
        }
      </div>
    </div>
    <div >
    <Form
    title="Contact Us"
    head="Get In Touch With Us!"
    desc="We are here to Help you out, just Drop a Call Below."
    office="Office Phone Number"
    num="+91 911211 4411"
    btn="Contact Now"
    
    />
    </div>


   </>
  )
}

export default Centers