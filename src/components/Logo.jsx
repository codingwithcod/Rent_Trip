import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
    <div className="flex justify-center items-center logo mx-2 font-bold text-slate-600 text-lg cursor-pointer">
      <span className="bg-red-500 text-white pl-2 pr-1 rounded-md font-medium">
        Rent
      </span>
      Trip
    </div>
    </Link>
  );
};

export default Logo;
