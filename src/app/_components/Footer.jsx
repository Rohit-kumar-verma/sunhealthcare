"use client"

import React from 'react'
import Image from 'next/image';

function Footer() {
  return (
    <footer className='bg-cover mt-20 px-6 sm:px-10 py-8' style={{ backgroundImage: `url(${"footer-bg.jpg"})`}}>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 p-4 items-center sm:px-2'>
        <div className=''>
          <a href='#'>
            <Image src='/output-onlinegiftools.gif' alt='logo' className='w-[44%] sm:w-[58%] md:w-[70%] lg:w-[50%]' width={0} height={0}/>
          </a>
          <div className='text-white'>
            <p>'Sun Health Care Services', a prominent provider of quality health care services, has been offering a wide range of health care services in Lucknow for an extended period of time.</p>
          </div>
        </div>
        <div className='text-white w-full grid grid-cols-2 gap-x-14 flex-grow-0'>
          <div className='w-full sm:w-auto mb-6 sm:mb-0'>
            <h2 className='text-2xl font-semibold'>Useful Links</h2>
            <ul className='list-none space-y-2 mt-4'>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Home</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#about'>About</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#services'>Services</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-full'>
            <h2 className='text-2xl font-semibold'>Our Services</h2>
            <ul className='list-none space-y-2 mt-4'>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Attendant</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Nursing Care</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Baby Care</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Elder Care</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Physiotherapy</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>ICU Care</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Medical Equipments on Rent</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-white w-full p-0 hidden md:block'>
          <h1 className='text-2xl font-semibold'>
            Our Location
          </h1>
          <div className='mt-4 w-full'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <hr className='border-t border-gray-600 mt-8' />
      <p className='text-white font-light text-xs mt-1'>© 2024 sun health care. All rights reserved.</p>
    </footer>
  )
}

export default Footer;

