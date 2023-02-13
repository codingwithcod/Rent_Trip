import React, {createContext , useContext, useEffect, useState} from "react";

const Context = createContext();

export const StateContext = ({children}) => {


  const [isCarSelect, setIsCarSelect] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

    // useEffect(() => {
    //   if(selectedCar){
    //     setIsCarSelect(true)
    //   }else{
    //     setIsCarSelect(false)
    //   }
    // }, []);


    return (
        <Context.Provider
            value={{
                isCarSelect, setIsCarSelect,
                selectedCar, setSelectedCar
            }}
        >

            {children}
        </Context.Provider>
    )
};


export  const useStateContext = () => useContext(Context)