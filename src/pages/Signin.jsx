import React, { useState } from "react";
import {Logo} from '../components'







const Login = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [isPassMatch, setIsPassMatch] = useState(true)

 const [formData, setFormData] = useState({});



 const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
 } 

 const handleSubmit = async(e) => {
        e.preventDefault();

  
    

 }

 const resetForm = () => {
    setFormData({})
 }



  return (
    <div className="login ">
     
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8 bg-gray-50 p-6 rounded-lg">
          <div className="text-center">
          <Logo />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {
                    isSignup ? "Sign up Now" : "Sign in to your account"
                }
              
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <span className="font-bold">Or </span>
              <span
                onClick={() => {setIsSignup((prev) => !prev); setIsPassMatch(true); resetForm() }}
                className="font-medium text-indigo-400 hover:text-indigo-700 cursor-pointer"
              >
                {
                    isSignup ? "Login" : "Signup"
                }
              </span>
            </p>
          </div>

          {/* form Start  */}
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              {!isSignup ? "" :
              
                <div>
                  <input
                    name="name"
                    type="text"
                    value={formData.name || ""}
                    onChange={handleChange}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
              }

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              {
                !isSignup ? "" : <div>
                <input
                  name="cpassword"
                  type="password"
                  value={formData.cpassword || ""}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              }
              

            </div>

            {
                isSignup ? "" : 
                <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-slate-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            }
            {
                isPassMatch ? "" : 
                <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-red-400 hover:text-red-600"
                >
                  * Password is not Matched
                </a>
              </div>
            </div>
            }
            

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-slate-400 group-hover:text-slate-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {
                    isSignup ? "Sign up" : "Log in"
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
