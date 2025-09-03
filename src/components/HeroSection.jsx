import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <section className='mx-auto pt-28 pb-16 flex flex-col md:flex-row justify-between items-center'>
      <div className='w-full md:w-1/2 space-y-8'>
        {/* star badge */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 
            transition-colors cursor-pointer group'>
          <span className='text-blue-600 group-hover:scale-110 transition-transform'>
            <img src={assets.star_icon} alt="" className='w-5 h-5' />
          </span>
          <span className='text-sm font-medium'>Jump start your growth</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-tight leading-snug">
          <div>We boost the growth for</div>
          <div>
            <span className="text-blue-600 relative inline-block">
              Startup to Fortune 500
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
            </span>
          </div>
          <div className="flex items-center gap-2 lg:mt-1">
            <span>Companies</span>
            <span className="inline-block animate-pulse text-3xl">&#9200;</span>
          </div>
        </h1>

        <p className="text-gray-600 text-lg md:text-lg max-w-xl">Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.</p>

        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img
            src={assets.hero_image}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 cursor-pointer object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection