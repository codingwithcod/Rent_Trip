import React from 'react';
import { Cars } from "../Asset";
import { CarCard} from '../components'

const ChooseCar = () => {
  return (
    <section id="car-grid" className=" text-center mt-16">
    <h2 className="font-bold text-3xl text-slate-900">
      Choose Car for your Destination
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   mt-10 m-5 gap-7   h-auto ">
          {Cars.map((car, i) => (
            <CarCard key={i} car={car} />
          ))}
        </div>
    
  </section>
  )
}

export default ChooseCar