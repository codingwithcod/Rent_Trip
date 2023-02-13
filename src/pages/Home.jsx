import React from "react";
import { carHero } from "../Asset";
import { AiFillCar } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";
import { Link } from 'react-scroll';


import { Cars } from "../Asset";
import { CarCard, Logo, Testimonial, WhyRentTrip } from "../components";



const Home = () => {
  return (
    <div className="flex flex-col  w-full bg-gray-50 ">

      {/* // ================================= */}
      
      <div className="sm:flex  w-full sm:flex-row  justify-center items-center h-[90vh]">
        <div className="info relative sm:border-r-2 border-slate-400 w-full sm:w-[40%] mt-5 h-[70vh] flex flex-col justify-center items-center">
          <div className="absolute w-full h-[300px]  rounded-tl-[140px]  -top-[30px] -z-10" />
          <div className="text-xl font-medium">
            <span className="text-3xl font-medium">Rent</span> <br />
            <span className="flex gap-3">
              
              a Car <AiFillCar size={30} color="red" />
            </span>
            beyond your imagination <br /> by
          </div>
          <div>
            <Logo />
          </div>
            <div  className='group bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer'>
            <Link to='car-grid' className='flex items-center gap-2  px-3 py-1'  smooth={true} duration={1000}>
          <span> Book Car </span>
            <MdPlayArrow className='group-hover:rotate-90 duration-300 h-8 w-8'/>
          </Link>
          </div>
        </div>

        <div className="image w-full sm:w-[60%] flex justify-center items-center inset-1 ">
          <img src={carHero} width="600" alt="" />
        </div>
      </div>
      {/* =================================== */}
     

      {/* ======================================= */}

      <WhyRentTrip/>




 {/* //======================================= */}

            <Testimonial/>
 

    </div>
  );
};

export default Home;
