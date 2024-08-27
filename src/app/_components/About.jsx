import React from 'react';

function About() {
  return (
    <div>
      <section className='mt-32 grid gap-10'>
        <div className='flex justify-end absolute items-end'>
          <img 
            src='shape-2.svg' 
            alt='shape' 
            className='w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110'
          />
        </div>
        <div className='flex flex-col justify-center items-center px-4'>
          <div 
            className='flex flex-col items-center justify-center px-4 gap-6 animate-fade-in-up'
          >
            <span className='text-[#00ADB5] text-3xl font-semibold'>
              About Us
            </span>
            <h1 className='text-5xl md:text-5xl font-semibold text-center'>
              Welcome to our Health Care Service
            </h1>
          </div>
          <p 
            className='text-center text-[#8C96A7] text-base md:text-lg font-normal leading-6 px-4 md:px-20 lg:px-40 mt-6 animate-fade-in-up'
          >
            'Sun Health Care Service', the distinguished Quality Health Care Service Provider, has been offering a wide variety of health nursing services in Lucknow for an extended period. Our team of experienced professionals offers services such as Hospital Attendant (Male & Female), Critical Care, Baby Care, Physiotherapy Services, Pathology Services, Elder Care, Medical Equipment On Rent, ICU Services, and more.
          </p>
          <a 
            href='#' 
            className='bg-[#00ADB5] text-white text-lg font-semibold py-2 px-4 rounded-md hover:shadow-lg hover:shadow-cyan-500/50 mt-6 bg-blend-overlay transition-transform transform duration-500 hover:scale-105'
          >
            Learn More
          </a>
        </div>
        <div className='flex justify-center'>
          <img 
            src="new-hp-image.png" 
            alt="about" 
            className='w-full px-4 opacity-0 animate-fade-in'
          />
        </div>
      </section>
    </div>
  )
}

export default About;
