"use client"
import React from 'react'
import Image from 'next/image'

function WhatWeDo() {
  return (
    <section className='relative'>
    <div className='flex flex-1 justify-center items-center pt-20'>
      <div className='items-center flex flex-col justify-center'>
        <div className='text-center mb-8 px-4'>
          <span className='text-[#00ADB5] text-3xl font-semibold'>
            What We Do
          </span>
          <h1 className='text-5xl sm:text-4xl font-sans font-bold mt-4'>
            What We Provide for Your Health
          </h1>
          <p className='font-sans text-base sm:text-lg text-[#8C96A7]'>
          At Sun Healthcare Services, we offer a comprehensive range of services designed to meet all your healthcare needs, ensuring you receive personalized and exceptional care.
          </p>
        </div>
        <div className='flex flex-col items-center mt-8'>
          <div className='mt-6'>
            <Image src='/graph-img.svg' alt='graph' width={1200} height={300}  className='w-auto' priority/>
          </div>
          <div className='mt-10 flex justify-center items-center w-full px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 items-center w-full'>
              <div className='flex flex-col items-center justify-center'>
                <div className='bg-white rounded-full shadow-2xl shadow-cyan-800 px-6 py-4 mb-4'>
                  <Image src='/we-do-1.svg' alt='we do' width={60} height={60} className='mb-2 w-auto' />
                </div>
                <h5 className='font-sans font-semibold text-xl text-center'>Specialist Doctors</h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full shadow-2xl shadow-cyan-800 px-6 py-4 mb-4 '>
                  <Image src='/we-do-2.svg' alt='we do' width={60} height={60} className='mb-2 w-auto' />
                </div>
                <h5 className='font-sans font-semibold text-xl text-center'>Frequent Visits</h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full shadow-2xl shadow-cyan-800 px-6 py-4 mb-4'>
                  <Image src='/we-do-3.svg' alt='we do' width={60} height={60} className='mb-2' />
                </div>
                <h5 className='font-sans font-semibold text-xl text-center'>Cordial Administration</h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full shadow-2xl shadow-cyan-800 px-6 py-4 mb-4'>
                  <Image src='/we-do-4.svg' alt='we do' width={60} height={60} className='mb-2 w-auto' />
                </div>
                <h5 className='font-sans font-semibold text-xl text-center'>Specialized Pharmacy</h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className='absolute items-end flex justify-end w-full '>
          <Image src="/shape-5.svg" alt="icon" width={300} height={200}/>
        </div>
    </section>
  )
}

export default WhatWeDo
