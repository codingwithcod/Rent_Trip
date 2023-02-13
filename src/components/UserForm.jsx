import React, { useState } from "react";
import { useStateContext } from "../Context/StateContext";


const UserForm = () => {

  const {selectedCar , setSelectedCar, setIsCarSelect } = useStateContext();
  const { name, model, rate, seat, fuel, image } = selectedCar;
  const [formData, setFormData] = useState({});

  const handleSelectCar = () => {
    setSelectedCar()
    setIsCarSelect(false)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value })
  }

  const handleSave = () => {
    console.log([formData, selectedCar]);
  }

  return (
    <div className="flex  justify-center items-center mt-14 m-2">
    <div className="flex flex-col border border-slate-300 w-full md:w-[80%] sm:p-5">

      {/* ============================= */}
      <div className="car-details flex justify-evenly items-center bg-slate-100 ">
        <div className="image m-2 border border-slate-400 flex justify-center items-center bg-slate-200 ">
          <img src={image} width="200" height="200" alt="" />
        </div>

        <div>
          <div className="mt-1  sm:ml-10 flex flex-col gap-2  w-full leading-3">
            <h3 className="text-2xl font-medium">{name}</h3>
            <span>Model : {model}</span>
            <span>Rate : ₹ {rate}/hour</span>
            <span>Seat :{seat}</span>
            <span>Fuel : {fuel}</span>
          </div>
        </div>

        <div className=" h-full">
        
        <button 
          onClick={handleSelectCar}
        className="bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer  px-4  py-1">
                Select Car
              </button>
              
        </div>
        
      </div>


      {/* ============================= */}

      <div className="user-iformation flex justify-center flex-col">

      <form action="">
        <div className="flex justify-evenly">
            <div className="flex m-2 gap-2 flex-col">
              <span>Name </span>
              <span>Mobile  </span>
              <span>Email </span>
              <span>Start Date </span>
              <span>End Date</span>
              
            </div>
            <div className="flex m-2 gap-2 flex-col">
              <input 
              type="text" 
              name="name" 
              placeholder="ninajan solanki"
              value={formData.name || ''}
              onChange={handleChange}
              className="outline-none   focus:ring-0 border border-slate-400 rounded-full px-2 "
              />
              <input 
              type="text" 
              name="mobile" 
              placeholder="8964256485"
              value={formData.mobile || ''}
              onChange={handleChange}
              className="outline-none focus:ring-0 border border-slate-400 rounded-full px-2 "
              />
              <input 
              type="email" 
              name="email" 
              placeholder="ninjan@gamil.com"
              value={formData.email || ''}
              onChange={handleChange}
              className="outline-none focus:ring-0 border border-slate-400 rounded-full px-2 "
              />
              <input 
              type="date" 
              name="startDate" 
              placeholder="ninajan solanki"
              value={formData.startDate || ''}
              onChange={handleChange}
              className="outline-none focus:ring-0 border border-slate-400 rounded-full px-2 "
              />
              <input 
              type="date" 
              name="endDate" 
              placeholder="ninajan solanki"
              value={formData.endDate || ''}
              onChange={handleChange}
              className="outline-none focus:ring-0 border border-slate-400 rounded-full px-2 "
              />
            </div>
          </div>

          <div className="flex justify-center gap-5">
          <input 
            type="checkbox"
            name="isDriver"
            value={formData.isDriver || ''}
            onChange={handleChange}
            className=" default:ring-1 text-2xl checked:bg-red-500" />
            <span>Check ? if you want Driver with Car</span>
          </div>
        </form>





      </div>

      {/* ============================= */}

      <div className="btn w-full flex justify-evenly ">
      <button className="bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer  px-4  py-1">
                Make Payment
              </button>
      <button 
        onClick={handleSave}
      className="bg-slate-800 mt-4   text-white rounded-full  ease-in duration-200 cursor-pointer  px-4  py-1">
                Save Info
              </button>
      </div>
    </div>
  </div>
  )
}

export default UserForm