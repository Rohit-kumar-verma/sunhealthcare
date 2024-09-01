
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion } from 'framer-motion';

function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bg-gray-50 mt-12  py-12">
      <section id="about" className="grid gap-10 relative">
        {/* Decorative Shape */}
        <div className='absolute ml-10 w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110'>
          <Image src="/shape-2.svg" alt="" width={300} height={200}/>
        </div>

        {/* Header and Intro */}
        <motion.div
          className="text-center px-4 py-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.span
              className="text-[#00ADB5] text-3xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl font-semibold mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              Welcome to Sun Health Care
            </motion.h1>
            <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              'Sun Health Care Service', the distinguished Quality Health Care Service Provider, has been offering a wide variety of health nursing services in Lucknow for an extended period. Our team of experienced professionals offers services such as Hospital Attendant (Male & Female), Critical Care, Baby Care, Physiotherapy Services, Pathology Services, Elder Care, Medical Equipment On Rent, ICU Services, and more.
            </motion.p>
            <Link
              href="/aboutus"
              className="bg-[#00ADB5] text-white text-lg font-semibold py-2 px-6 rounded-md mt-6 inline-block hover:bg-cyan-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Mission and Vision */}
        <motion.div
          className="bg-white py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/new-hp-image.png" // Update the path as necessary
            alt="About Us Image"
            className="w-full max-w-6xl px-4"
            width={600}
            height={200}
          />
        </motion.div>
      </section>
    </div>
  );
}

export default About;

