"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function Contact() {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-50 py-6">
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className='sm:hidden block mt-10'
            />
      <section id="contact" className="max-w-6xl mx-auto px-4 flex flex-col items-center py-6 bg">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 w-full"
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-[#00ADB5]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-[#8C96A7] leading-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5 }}
          >
            Reach out to us using the contact details below.
          </motion.p>
        </motion.div>

        {/* Container for both sections */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Contact Details */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex-1 order-1"
            ref={sectionRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <motion.h3
              className="text-3xl font-semibold mb-8 text-[#00ADB5]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
              Contact Details
              <hr/>
            </motion.h3>
            <motion.ul
              className="list-disc pl-5 text-[#8C96A7] text-sm md:text-xl flex flex-col gap-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <li className="font-bold text-lg list-none flex items-center">
                <Image src="/telephone-call.png" width={20} height={20} className='mr-1'/>Call Us:
                <ul className='ml-5'>
                  <li className="text-[#8C96A7] text-xl">
                    <a href="tel:+916387061065" className="text-[#00ADB5] hover:underline">+91-6387061065</a>
                  </li>
                  <li className="text-[#8C96A7] text-xl">
                    <a href="tel:+918795256721" className="text-[#00ADB5] hover:underline">+91-8795256721</a>
                  </li>
                </ul>
              </li>
              <li className="text-[#8C96A7] text-lg flex items-center">
              <Image src="/social.png" width={20} height={20} className='mr-1'/><h5 className="text-lg mr-2">Email:</h5> <a href="mailto:sunhomehealthcare820@gmail.com" className="text-[#00ADB5] hover:underline font-bold">sunhomehealthcare820@gmail.com</a></li>
              <li className="text-[#8C96A7] text-lg flex items-center"> <Image src="/instagram.png" width={20} height={20} className='mr-1'/><h5 className="text-lg mr-4">Instagram: </h5><a href="https://www.instagram.com/sun_health_care?igsh=YXkzOHY1ajljcTJt" className="text-[#00ADB5] hover:underline font-bold" target="_blank" rel="noopener noreferrer">@sun_health_care</a></li>
              <li className="text-[#8C96A7] text-lg flex items-start"> <Image src="/location.png" width={20} height={20} className='mr-1 items-center'/><h5 className="text-lg mr-4 flex">Address: </h5><p className='font-bold text-[#00ADB5]'>Sushil Yadav - Loharmau, Fazullaganj, Lucknow, Uttar Pradesh 226020</p></li>
            </motion.ul>
          </motion.div>

          {/* Image/Gradient Section */}
          <motion.div
            className="rounded-lg shadow-lg flex-1 sm:order-2"
            ref={sectionRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <Image src="/Contact-us.png" width={1000} height={1000} className='w-full'/>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
