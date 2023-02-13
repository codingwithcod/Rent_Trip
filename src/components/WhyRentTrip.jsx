import React from 'react'
import Logo from './Logo'

const WhyRentTrip = () => {


    const Steps = [
        {
            heading:"Unlimited KMs",
            para: "You must never stop exploring! That’s why you get unlimited KMs with every booking!"
        },
        {
            heading:"No Paperwork",
            para: "Rent a car & start traveling with zero paperwork requirements! All you need in your driver’s license, national ID & a live selfie!"
        },
        {
            heading:"Short-Duration",
            para: "Why pay for a full day when you need the car for only 8 hours? Zoomcar lets you rent a car for as low as 8 hours only!"
        },
        {
            heading:"Long-Duration",
            para: "Don’t put a limit to your travel plans - our long-duration bookings are here for you. Remember, the longer you book for, the more you save!"
        },
        {
            heading:"Keyless Access",
            para: "No need to meet the Hosts during the beginning & end of any booking! The Zoommcar smart-app allows you to lock & unlock the car directly through the app!"
        },
       
    ]


  return (

    <section className="text-gray-600 body-font mt-10 ">
      <div className=" text-4xl font-bold text-slate-800 flex justify-center gap-3">Why  <Logo/></div>
  <div className="container px-5 py-12 mx-auto flex flex-wrap">

    {
        Steps.map(({heading, para}, i) => {

            return (
                <div key={i} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-700 text-white relative z-10 title-font font-medium text-sm">{i+1}</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-slate-200 text-red-400 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{heading}</h2>
          <p className="leading-relaxed">{para}</p>
        </div>
      </div>
    </div>
            )
        })
    }

      
  </div>
</section>
  )
}

export default WhyRentTrip