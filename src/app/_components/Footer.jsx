// import React from 'react'
// import { GrFacebookOption } from "react-icons/gr";
// import { BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";

// function Footer() {
//   return (
//     <footer className='bg-cover mt-20 px-6 sm:px-10 py-8 sm:h-[40%]' style={{ backgroundImage: `url(${"footer-bg.jpg"})`}}>
//       <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-6 items-center'>
//         <div className='space-y-4'>
//           <a href='#'>
//             <img src='output-onlinegiftools.gif' alt='logo' className='w-[44%] sm:w-[58%] md:w-[70%] lg:w-[50%]' />
//           </a>
//           <div className='text-white'>
//             <p>'Sun Health Care Services', a prominent provider of quality health care services, has been offering a wide range of health care services in Lucknow for an extended period of time.</p>
//           </div>
//           <ul className='flex space-x-4'>
//             <li className='w-10'>
//               <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
//                 <a href='#'>
//                   <GrFacebookOption className='text-white text-2xl' />
//                 </a>
//               </div>
//             </li>
//             <li className='w-10'>
//               <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
//                 <a href='#'>
//                   <BiLogoTwitter className='text-white text-2xl' />
//                 </a>
//               </div>
//             </li>
//             <li className='w-10'>
//               <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
//                 <a href='#'>
//                   <BiLogoLinkedin className='text-white text-2xl' />
//                 </a>
//               </div>
//             </li>
//             <li className='w-10'>
//               <div className='bg-slate-400 py-3 px-3 rounded-lg flex items-center justify-center'>
//                 <a href='#'>
//                   <BiLogoInstagram className='text-white text-2xl' />
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className='grid lg:grid-cols-2 sm:ml-0 sm:grid-cols-2 justify-center gap-10 items-start'>
//           <div className='text-white sm:m-0'>
//             <h2 className='text-2xl font-semibold'>Useful Links</h2>
//             <ul className='list-none space-y-2 mt-4'>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Home</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>About</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Services</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div className='text-white'>
//             <h2 className='text-2xl font-semibold'>Our Services</h2>
//             <ul className='list-none space-y-2 mt-4'>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Attendant</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Nursing Care</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Body Care</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Elder Care</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Physiotherapy</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>ICU Care</a>
//               </li>
//               <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
//                 <a href='#'>Medical Equipments on Rent</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className='text-white'>
//           <h1 className='text-2xl font-semibold'>
//             Our Location
//           </h1>
//           <div className='mt-4'>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//       <hr className='border-t border-gray-600 mt-8' />
//     </footer>
//   )
// }

// export default Footer;

import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <footer className='bg-cover mt-20 px-6 sm:px-10 py-8' style={{ backgroundImage: `url(${"footer-bg.jpg"})`}}>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 p-6 items-center'>
        <div className=''>
          <a href='#'>
            <img src='output-onlinegiftools.gif' alt='logo' className='w-[44%] sm:w-[58%] md:w-[70%] lg:w-[50%]' />
          </a>
          <div className='text-white'>
            <p>'Sun Health Care Services', a prominent provider of quality health care services, has been offering a wide range of health care services in Lucknow for an extended period of time.</p>
          </div>
          {/* <ul className='flex space-x-4'>
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
          </ul> */}
        </div>
        <div className='text-white w-full grid grid-cols-3 gap-x-14 flex-grow-0'>
          <div className='w-full sm:w-auto mb-6 sm:mb-0'>
            <h2 className='text-2xl font-semibold'>Useful Links</h2>
            <ul className='list-none space-y-2 mt-4'>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Home</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>About</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Services</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-auto'>
            <h2 className='text-2xl font-semibold'>Our Services</h2>
            <ul className='list-none space-y-2 mt-4'>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Attendant</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Nursing Care</a>
              </li>
              <li className='hover:text-[#00ADB5] transition-transform transform hover:translate-x-2'>
                <a href='#'>Body Care</a>
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
        <div className='text-white'>
          <h1 className='text-2xl font-semibold'>
            Our Location
          </h1>
          <div className='mt-4'>
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
    </footer>
  )
}

export default Footer;

