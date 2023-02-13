import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Cars } from '../Asset';
import { useStateContext } from '../Context/StateContext';


const CarDetail = () => {

const {carId} = useParams()
const navigate = useNavigate();

const {setSelectedCar, setIsCarSelect} = useStateContext();


  const {image, rate, name, fuel, model , seat} = Cars[carId-1]

  const handleSelectCar = () => {
    setSelectedCar(Cars[carId-1])
    setIsCarSelect(true)
    navigate('/new-trip')
  }


  return (
    <div className='mt-10 w-full '>

    <div className="two-div-contaimer flex p-5 h-[80vh] w-full bg-slate-200">
    
      <div className="left flex justify-center items-center w-[50%]  ">
        <img src={image} width='500' height='500' alt="" />
      </div>

      <div className="right  flex   w-[50%]">
        <div className='mt-3 sm:mt-20 sm:ml-10 flex flex-col gap-2  w-full'>
        <h3 className='text-2xl font-medium'>{name}</h3>
        <span>Model : {model}</span>
        <span>Rate :  ₹ {rate}/hour</span>
        <span>Seat :{seat}</span>
        <span>Fuel : {fuel}</span>

           <div className=' flex gap-5'>
           <button 
            onClick={handleSelectCar}
            className='bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer  px-4  py-1'  >
          Book Car 
          </button>
          <a href="tel:8269326231">
           <button  className='bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer  px-4  py-1'  >
          Make a Call 
          </button>
          </a>
           </div>
         

        </div>
        
      </div>

      
    </div>
    
    </div>
  )
}

export default CarDetail