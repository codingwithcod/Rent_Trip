import React, { useState } from "react";
import { Link } from "react-router-dom";


import { ChooseCar, UserForm, } from '../components'
import { useStateContext } from "../Context/StateContext";

const NewTrip = () => {

  const {isCarSelect} = useStateContext();


  return (
    <>
    {
      isCarSelect ?  <UserForm/> : <ChooseCar/>
    }
    

    

    </>


   
  );
};

export default NewTrip;
