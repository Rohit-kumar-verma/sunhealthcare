
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Banner from '../_components/Banner';
import Contact from '../_components/Contact';

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
    <div className="bg-gray-50">
      <Banner/>
      <section id="about" className="grid gap-10 relative mt-10 py-6">
        {/* Decorative Shape */}
        <div className='absolute ml-10 w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110'>
          <Image src="/shape-2.svg" alt="" width={300} height={200}/>
        </div>

        {/* About Us Section */}
        <motion.div
          className="text-center px-4 py-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-[#00ADB5] text-3xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              Sun Health Care Service, a distinguished and leading Quality Health Care Service Provider, has proudly served the Lucknow community with an extensive range of top-notch health and nursing services for a significant period. Our commitment to excellence is reflected in our team of highly skilled and experienced professionals, who are dedicated to delivering compassionate and comprehensive care tailored to the unique needs of each patient.
            </motion.p>
            <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              We specialize in offering a broad spectrum of services, including Hospital Attendants (both Male and Female), who are well-trained to assist patients in various hospital settings, ensuring their comfort and well-being. Our Critical Care services are designed to provide intensive and specialized care for patients with life-threatening conditions, with a focus on stabilizing and improving their health.
            </motion.p>
            {/* <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              For families with newborns, our Baby Care services offer expert assistance and support to ensure the healthy development of your little ones. We also provide top-tier Physiotherapy Services, aimed at enhancing mobility, reducing pain, and improving overall physical function through personalized treatment plans.
            </motion.p>
            <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              Our Pathology Services are equipped with state-of-the-art technology to deliver accurate and timely diagnostic tests, essential for effective treatment planning. We are also committed to the well-being of the elderly, offering Elder Care services that encompass both physical and emotional support, allowing them to live with dignity and comfort in their golden years.
            </motion.p> */}
            {/* <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              In addition to these, we provide Medical Equipment On Rent, making high-quality medical devices accessible to those who need them, whether for short-term or long-term use. Our ICU Services are staffed by a team of expert healthcare providers who are adept at managing patients in critical condition, ensuring they receive the highest standard of care.
            </motion.p>
            <motion.p
              className="text-[#8C96A7] text-base md:text-lg font-normal leading-7 mt-6 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              At Sun Health Care Service, we are more than just a service provider; we are a partner in your health journey, dedicated to delivering unparalleled care and support whenever and wherever you need it.
            </motion.p> */}

          </div>
        </motion.div>

        {/* Why Choose Us Section */}
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
                <h2 className="text-4xl font-semibold mb-4">Why Choose Us</h2>
                <p className="text-lg text-[#8C96A7] leading-7">
                  With our Great Team, we strive to help you all on an individualized care basis by serving High-Quality Services at your doorstep. All services we provide come with the Best Facilities or Conveniences.
                </p>
                <ul className="list-disc list-inside text-lg text-[#8C96A7] leading-7 mt-4">
                  <li>Highly Experienced</li>
                  <li>Compassionate Care - 100%</li>
                  <li>Best Services</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <Contact/>

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

