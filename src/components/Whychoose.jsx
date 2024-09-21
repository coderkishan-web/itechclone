import React, { useEffect, useState } from 'react'

function Whychoose() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY
        });
      };
    
      useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
      const ballStyle = {
        position: 'absolute',
        top: `${mousePosition.y - 25}px`,  
        left: `${mousePosition.x - 25}px`, 
        width: '100px',
        height: '100px',
        backgroundColor: '#2e3f8d',
        borderRadius: '50%',
        pointerEvents: 'none', 
        transition: 'top 0.1s, left 0.1s',
         
      };

  return (
   <>
   <div className="whytochoose relative flex w-full h-screen justify-center items-center p-9 " onMouseMove={handleMouseMove}>
    <span id='spancircle' style={ballStyle} className='z-0 shadow-[0_5px_60px_#2e3f8d]'></span>
    <div className="info  h-screen w-2/5 flex justify-center items-center ">
        <h2 className='text-4xl text-left font-extrabold z-20'>Why You Should Choose <br />
        I-Tech Computer Education?</h2>
    </div>
    <div className="animeinfo  h-screen w-full flex flex-wrap gap-5 justify-center items-center">
        <div className="animcard">
            <h1>Highest PC Setup</h1>
            <p>We have huge setup of more then 100pcs in vasai-virar region.</p>
        </div>
        <div className="animcard">
            <h1>Expert Trainers</h1>
            <p>We have best Trainers  where they give 1 to 1 Attention. I-TECH computer is one of the Leading Institute.</p>
        </div>
        <div className="animcard">
            <h1>Industry Based Projects</h1>
            <p>Live Projects that are used at Workspace.</p>
        </div>
        <div className="animcard">
            <h1>Live Session</h1>
            <p>Here you get a chance of Hybrid Sessions.</p>
        </div>
    </div>
   </div>
   </>   
)
}

export default Whychoose