import React from 'react'
import { Link } from 'react-router-dom'

import { useStateContext } from '../Context/StateContext'

const CarCard = ({car}) => {

  const {carId, image, } = car; 
  const {setSelectedCar, setIsCarSelect} = useStateContext();
 

  const handleSelectCar = () => {
    setSelectedCar(car)
    setIsCarSelect(true)
  }

  return (
    <div className='border border-slate-300 rounded-lg shadow-lg hover:shadow-2xl bg-white  flex flex-col justify-center items-center w-auto hover:scale-105 duration-200 '>
    <div className="image ">
      <img src={image} width={250} height={250}  />
    </div>
    <div className="btn flex justify-evenly mx-1 my-2 w-full">
    <Link to={`/car-detail/${carId}`}>
      <button className='px-4 py-1  rounded-full hover:bg-slate-50 hover:drop-shadow-md text-slate-900 border border-slate-500  duration-300'>
        Enquiry
      </button>
      </Link>
      <button 
      onClick={handleSelectCar}
      className='px-4 py-1  rounded-full hover:bg-slate-50 hover:drop-shadow-md hover:text-red-500 text-slate-900 border border-slate-500  duration-300'>
        Book Now
      </button>
 
    </div>
  </div>
  )
}

export default CarCard;