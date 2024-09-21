import React from 'react'
import Eventscomp from '../components/Eventscomp'

function Events() {
  return (
<>
<div className='w-full '>
<img className='imgsetecent w-full h-[70vh]' src="https://i-tech.net.in/wp-content/uploads/2024/08/a-banner-with-the-text-unlock-your-creativity-stud-4_dnzbMhS1iBXsdQwFuH9g-d0ZR5ZjnTz-W7VsOJH3b3Q.jpeg" alt="" />
</div>
<div className='text-left w-full px-20 pt-10'>
  <h2 className='text-blue-600 font-bold'>Exciting</h2>
  <h1 className='font-extrabold text-6xl py-3'>Upcoming Events</h1>
  <p>Discover our exciting upcoming events and be a part of the latest in technology advancements.</p>
</div>
<div className='w-full h-screen px-20 py-10'>
<Eventscomp
date="01
January 2023"
course="DATA SCIENCE & AI WORLD"
staff="Zulkar Nain"
location="Nallasopara East"
link=""
/>
<hr />
<Eventscomp
date="02 
February 2023"
course="WORLD OF VFX"
staff="Glen sir"
location="Nallasopara East"
link=""

/>
<hr />
<Eventscomp
date="03 
March 2023"
course="Create a Building: Architectural Designing"
staff="Ajay Wish"
location="Nallasoapara West"
link=""

/>
</div>
</>
  )
}

export default Events