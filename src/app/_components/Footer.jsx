import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <footer className='bg-cover mt-20 px-10 py-4' style={{ backgroundImage: `url(${"footer-bg.jpg"})`}}>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-6 p-6'>
        <div className='grid grid-flow-row grid-rows-3 gap-3'>
          <a href='#'>
            <img src='logo.svg' alt='logo' />
          </a>
          <div className='text-white'>
            <p>'Sun Health Care Services', a prominent provider of quality health care services, has been offering a wide range of health care services in Lucknow for an extended period of time.</p>
          </div>
          <ul className='flex space-x-4'>
            <li className='w-10'>
              <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
                <a href='#'>
                  <GrFacebookOption className='text-white text-2xl' />
                </a>
              </div>
            </li>
            <li className='w-10'>
              <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
                <a href='#'>
                  <BiLogoTwitter className='text-white text-2xl' />
                </a>
              </div>
            </li>
            <li className='w-10'>
              <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
                <a href='#'>
                  <BiLogoLinkedin className='text-white text-2xl' />
                </a>
              </div>
            </li>
            <li className='w-10'>
              <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
                <a href='#'>
                  <BiLogoInstagram className='text-white text-2xl' />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className='text-white ml-10'>
          <div>
            <h2 className='text-3xl font-semibold'>Useful Links</h2>
            <ul className='list-none flex flex-col'>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80 ease-in'>
                <a href='#'>Home</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>About</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Services</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-white'>
          <div>
            <h2 className='text-3xl font-semibold'>Our Services</h2>
            <ul className='list-none flex flex-col'>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Attendent</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Nursing Care</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Boby Care</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Elder Care</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Physiotherapy</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>ICU care</a>
              </li>
              <li className='mt-4 hover:text-[#00ADB5] hover:translate-x-4 transition hover:delay-80'>
                <a href='#'>Medical Equipments on rent</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-white'>
          <h1 className='text-2xl'>
            Our Location
          </h1>
          <div className=''>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
              width="500"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/> */}

          </div>
        </div>
      </div>
      <hr className='border-t border-gray-600' />
    </footer>
  )
}

export default Footer;
