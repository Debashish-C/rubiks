import React from 'react'

const About = () => {
  return (
        
    <div className="w-3/5 h-full pt-5">
        <h1 className='sm:text-3xl text-2xl'>Welcome To Rubiks</h1>
        <p>The Cultural Club of MCA NIT-B</p>

        <div className="sm:w-4/5 w-full sm:p-4 pt-4"
             style={{
                // <uniquifier>: Use a unique and descriptive class name
          "font-family": "Lora, serif",
          "font-optical-sizing": "auto",
          "font-weight": 600,
          "font-style": "normal",
        }
              }
        >
        
        Step into a world of creativity, tradition, and celebration! The Cultural Club of MANIT is the heart of campus life, bringing together students to showcase and celebrate diverse cultures. From vibrant festivals to artistic performances, we aim to foster unity through the richness of traditions. Whether you’re a dancer, musician, artist, or simply a culture enthusiast, this is your space to shine and connect. Join us to make memories, embrace diversity, and keep the spirit of culture alive!
        </div>
    </div>
  )
}

export default About
