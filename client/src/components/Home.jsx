import React from "react";
import Logo from "../assets/logo.png";
import App from "../App";
import Gimg from "../assets/g.jpeg";
import userimg from "../assets/user.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex justify-end items-center h-full overflow-x-scroll  ">
      <div className="w-4/5  h-full">
        <div className="p-5 m-5 sm:pt-8 sm:ml-4 ml-3 sm:w-2/3 sm:mb-5">
          <img
            src={Gimg}
            alt=""
            className="   shadow-2xl "
            style={{ boxShadow: "0px 20px 40px 20px rgba(0,0,0,0.6)" }}
          />
        </div>
        <div className="flex">

        <div
          className=" p-2  m-5 sm:p-5 mb-1 pb-2 "
          style={{
            "font-family": "Sour Gummy, serif",
            "font-optical-sizing": "auto",
            "font-weight": 400,
            "font-style": "normal",
            "font-variation-settings": "wdth 100",
          }}
          >
          <h1 className="font-mono text-3xl">Rubiks</h1>
          <p>The Cultural Club of MCA NIT-B</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={Logo} alt="" className='w-16 h-16'/>
        </div>
          </div>
        <p
          className="sm:p-5 p-2 ml-5 sm:text-2xl w-10/12 sm:w-3/4"
          style={{
            // <uniquifier>: Use a unique and descriptive class name
            "font-family": "Lora, serif",
            "font-optical-sizing": "auto",
            "font-weight": 600,
            "font-style": "normal",
          }}
        >
          The Cultural Club of MANIT is the heart of campus life, bringing
          together students to showcase and celebrate diverse cultures. From
          vibrant festivals to artistic performances, we aim to foster unity
          through the richness of traditions. Whether you’re a dancer, musician,
          artist, or simply a culture enthusiast, this is your space to shine
          and connect. Join us to make memories, embrace diversity, and keep the
          spirit of culture alive!
        </p>
        <div className="p-4 m-5 mt-2  text-3xl font-mono min-h-24 overflow-scroll">
          <h1>Announcement</h1>
          <div className="sm:w-3/5 w-full m-3 flex sm:flex-row flex-col justify-start sm:justify-between">
            <li className="text-xl text-red-300 p-2">teams recruitment</li>
            <li className="text-xl  p-2 text-red-300">
              meeting shedule on 10am 19/01/25
            </li>
          </div>
        </div>
        <div className="sm:w-1/3 m-5 sm:ml-10 flex   justify-center items-center flex-col border-[1px] rounded-lg p-5 w-4/5 border-white">
          <div className="flex justify-center items-center p-2">
            <img
              src={userimg}
              alt=""
              className="w-10 h-10 m-2
            "
            />
            <p>Debashish Sahu(MCA'27)</p>
          </div>
          <div className="w-full sm:p-3 p-1 ">
            <p
              className="from-neutral-300"
              style={{
                "font-family": "Englebert, serif",
                "font-weight": 400,
                " font-style": "normal",
              }}
            >
              "Where culture meets creativity, and diversity sparks unity—this
              is not just a club; it's a celebration of who we are!"
            </p>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
