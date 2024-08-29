import React,{useEffect} from 'react';
import Image from 'next/image';

function About() {

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Scroll to the element with the ID matching the hash
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <section id="about" className="mt-32 grid gap-10">
        <div className="relative">
          <div className="flex justify-end absolute top-0 right-0">
            <Image
              src="shape-2.svg" 
              alt="shape" 
              className="w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        <div className="text-center px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#00ADB5] text-3xl font-semibold">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold mt-4">
              Welcome to Sun Health Care Service
            </h1>
            <p className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6">
              'Sun Health Care Service', the distinguished Quality Health Care Service Provider, has been offering a wide variety of health nursing services in Lucknow for an extended period. Our team of experienced professionals offers services such as Hospital Attendant (Male & Female), Critical Care, Baby Care, Physiotherapy Services, Pathology Services, Elder Care, Medical Equipment On Rent, ICU Services, and more.
            </p>
            <a 
              href="#" 
              className="bg-[#00ADB5] text-white text-lg font-semibold py-2 px-6 rounded-md mt-6 inline-block hover:bg-cyan-700 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg text-[#8C96A7] leading-7">
                  At Sun Health Care Service, our mission is to provide top-notch health care services to our clients, ensuring their well-being and satisfaction. We strive to deliver compassionate, personalized care that meets the highest standards of excellence.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg text-[#8C96A7] leading-7">
                  We envision a world where health care services are accessible, affordable, and tailored to the needs of each individual. Our goal is to be the leading provider of health care services, known for our commitment to quality and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Image
            src="new-hp-image.png" 
            alt="about" 
            className="w-full max-w-6xl px-4 opacity-0 animate-fade-in"
          />
        </div>
      </section>
    </div>
  );
}

export default About;




// //
// import React from 'react';
// import { motion } from 'framer-motion';

// function About() {
//   return (
//     <div className="bg-gray-50">
//       <section className="mt-32 grid gap-10">
//         <div className="relative">
//           <motion.div
//             className="flex justify-end absolute top-0 right-0"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <Image 
//               src="shape-2.svg" 
//               alt="shape" 
//               className="w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110"
//             />
//           </motion.div>
//         </div>

//         <motion.div 
//           className="text-center px-4"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="max-w-4xl mx-auto">
//             <motion.span 
//               className="text-[#00ADB5] text-3xl font-semibold"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5 }}
//             >
//               About Us
//             </motion.span>
//             <motion.h1 
//               className="text-5xl md:text-6xl font-semibold mt-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1.2 }}
//             >
//               Welcome to Sun Health Care Service
//             </motion.h1>
//             <motion.p 
//               className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.3 }}
//             >
//               'Sun Health Care Service', the distinguished Quality Health Care Service Provider, has been offering a wide variety of health nursing services in Lucknow for an extended period. Our team of experienced professionals offers services such as Hospital Attendant (Male & Female), Critical Care, Baby Care, Physiotherapy Services, Pathology Services, Elder Care, Medical Equipment On Rent, ICU Services, and more.
//             </motion.p>
//             <motion.a 
//               href="#" 
//               className="bg-[#00ADB5] text-white text-lg font-semibold py-2 px-6 rounded-md mt-6 inline-block hover:bg-cyan-700 transition-colors duration-300"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               Learn More
//             </motion.a>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="bg-white py-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="max-w-6xl mx-auto px-4">
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <div>
//                 <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
//                 <p className="text-lg text-[#8C96A7] leading-7">
//                   At Sun Health Care Service, our mission is to provide top-notch health care services to our clients, ensuring their well-being and satisfaction. We strive to deliver compassionate, personalized care that meets the highest standards of excellence.
//                 </p>
//               </div>
//               <div>
//                 <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
//                 <p className="text-lg text-[#8C96A7] leading-7">
//                   We envision a world where health care services are accessible, affordable, and tailored to the needs of each individual. Our goal is to be the leading provider of health care services, known for our commitment to quality and integrity.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="flex justify-center mt-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           <Image 
//             src="new-hp-image.png" 
//             alt="about" 
//             className="w-full max-w-6xl px-4 opacity-0 animate-fade-in"
//           />
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// export default About;
