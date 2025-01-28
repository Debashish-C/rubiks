import React from 'react'
import World from '../assets/world.png'
import photo from '../assets/photo.png'
import design from '../assets/design.png'
const Teams = () => {
  return (
    <div className='w-3/5 h-full p-2 mt-5'>
      <div className="">
        <h1 className=' p-2 '  
        style={
            {
                "font-family": "Sour Gummy, serif",            "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"24px"
              
            }
          }
        >Web Development Team</h1>
        <div className="p-2 flex lg:flex-row-reverse flex-col justify-center items-center">
            <img src={World} alt="" className=''/>
            <div className="">

            <p> The Web Development Team is the digital backbone of the Cultural Club at MANIT, responsible for creating and maintaining the club's online presence. This dynamic team combines creativity and technical expertise to design and develop user-friendly platforms that showcase the club's vibrant activities, events, and achievements.</p>
            <button className='p-2 m-2 border-2 border-white rounded-md hover:bg-white hover:text-black'>Know More..</button>
            </div>
        </div>
      </div>
      {/* <div className='bg-white h-[2px] w-full'></div> */}
      <div className="mt-4">
        <h1 className=' p-2 '  
        style={
            {
                "font-family": "Sour Gummy, serif",            "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"24px"
              
            }
          }
        >Photography Team</h1>
        <div className="p-2 flex lg:flex-row flex-col justify-between items-center">
            <img src={photo} alt="" className='h-52 p-3'/>
            <div className="p-4">

            <p>
            The Photography Team is the visual storyteller of the Cultural Club at MANIT, capturing the essence, emotions, and energy of every event. With a passion for creativity and a keen eye for detail, the team ensures that every moment is beautifully preserved and shared with the world.



            </p>
            <button className='p-2 m-2 border-2 border-white rounded-md hover:bg-white hover:text-black'>Know More..</button>
            </div>
        </div>
      </div>
      {/* <div className='bg-white h-[2px] w-full'></div> */}
      <div className="mt-4">
        <h1 className=' p-2 '  
        style={
            {
                "font-family": "Sour Gummy, serif",            "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"24px"
              
            }
          }
        >Design Team</h1>
        <div className="p-2 flex lg:flex-row-reverse flex-col justify-center items-center">
            <img src={design} alt="" className=''/>
            <div className="p-4">

            <p>
            The Design Team is the creative powerhouse of the Cultural Club at MANIT, responsible for crafting visually stunning graphics and designs that bring the club's identity and events to life. This team combines artistic flair with technical expertise to create designs that captivate and engage audiences.</p>
            <button className='p-2 m-2 border-2 border-white rounded-md hover:bg-white hover:text-black'>Know More..</button>
            </div>
        </div>
      </div>
                {/* <div className='bg-white h-[2px] w-full'></div> */}
                <div className="mt-4">
        <h1 className=' p-2 '  
        style={
            {
                "font-family": "Sour Gummy, serif",            "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"24px"
              
            }
          }
        >Dance and Song Team</h1>
        <div className="p-2">
            <img src="" alt="" />
            <p>
            Dance and Song Team - Cultural Club, MANIT

The Dance and Song Team is the heart and soul of the Cultural Club at MANIT, embodying the rhythm, energy, and creativity that define the club's vibrant spirit. This team brings life to every event through captivating performances that showcase talent, passion, and cultural diversity.</p>
            <button className='p-2 m-2 border-2 border-white rounded-md hover:bg-white hover:text-black'>Know More..</button>
        </div>
      </div>
      {/* <div className='bg-white h-[2px] w-full'></div> */}
      <div className="mt-4">
        <h1 className=' p-2 '  
        style={
            {
                "font-family": "Sour Gummy, serif",            "font-optical-sizing": "auto",
                "font-weight": 400,
                "font-style": "normal",
                "font-variation-settings":
                  "wdth 100",
                  "fontSize":"24px"
              
            }
          }
        >Video and Audio Editing Team</h1>
        <div className="p-2">
            <img src="" alt="" />
            <p>
            The Video and Audio Editing Team is the creative force behind the polished and impactful media content of the Cultural Club at MANIT. They transform raw footage and audio into captivating videos and soundtracks that enhance the club’s online and offline presence. With a focus on storytelling and technical precision, this team ensures every event is remembered in its best light.</p>
            <button className='p-2 m-2 border-2 border-white rounded-md hover:bg-white hover:text-black'>Know More..</button>
        </div>
      </div>
      {/* <div className='bg-white h-[2px] w-full'></div> */}
    </div>
  )
}

export default Teams
