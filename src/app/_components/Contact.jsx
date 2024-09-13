"use client"
import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function Contact() {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

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
    <div className="bg-gray-50 py-6 px-10 overflow-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="sm:hidden block mt-10"
      />
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 flex flex-col items-center py-6 bg sm:px-2 xs:px-2"
      >
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 w-full"
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-[#00ADB5] sm:text-3xl xs:text-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-[#8C96A7] leading-7 sm:text-base xs:text-sm"
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
            className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex-1 order-1 sm:p-8 xs:p-2"
            ref={sectionRef}
            initial={{ opacity: -1, x: -40 }}
            animate={{ opacity: isInView ? 1 : -1, x: isInView ? 0 : -40 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <motion.h3
              className="text-xl font-bold mb-8 text-[#00ADB5] sm:text-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
              Contact Details
              <hr />
            </motion.h3>
            <motion.ul
              className="list-none pl-2 text-[#8C96A7] sm:hidden flex flex-col items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <li className="font-bold text-lg list-none flex flex-col items-center justify-center ">
                <Image src="/telephone-call.png" width={30} height={30} alt="Call Icon" className="mr-1" />
                <ul className="ml-2">
                  <li className="text-[#8C96A7] text-lg text-center">
                    <a href="tel:+916387061065" className="text-[#00ADB5] hover:underline">
                      +91-6387061065
                    </a>
                  </li>
                  <li className="text-[#8C96A7] text-lg text-center">
                    <a href="tel:+918795256721" className="text-[#00ADB5] hover:underline">
                      +91-8795256721
                    </a>
                  </li>
                </ul>
              </li>

              <li className="text-[#8C96A7] md:text-lg flex  flex-col items-center justify-center text-sm mt-6">
                <Image src="/social.png" alt="Email Icon" width={30} height={30} className="mr-1" />
                <a
                  href="mailto:sunhomehealthcare820@gmail.com"
                  className="text-[#00ADB5] hover:underline font-bold text-center"
                >
                  sunhomehealthcare<br className='sm:hidden'/>820@gmail.com
                </a>
              </li>

              <li className="text-[#8C96A7] text-sm flex flex-1 flex-col items-center justify-center mt-6">
                <Image src="/instagram.png" alt="Instagram Icon" width={30} height={30} className="mr-1" />
                <a
                  href="https://www.instagram.com/sun_health_care?igsh=YXkzOHY1ajljcTJt"
                  className="text-[#00ADB5] hover:underline font-bold text-center text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @sun_health_care
                </a>
              </li>

              <li className="text-[#8C96A7] flex flex-col items-center text-sm mt-6">
                <Image src="/location.png" alt="Location Icon" width={30} height={30} className="mr-1 items-center" />
                <p className="font-bold text-[#00ADB5] text-center">
                  Sushil Yadav - Loharmau, Fazullaganj, Lucknow, Uttar Pradesh 226020
                </p>
              </li>
            </motion.ul>

            <table className="table-fixed w-full sm:block hidden">
              <tbody>
                {/* Row for Call Us */}
                <tr className="sm:flex mt-6">
                  <td className="flex items-center justify-end pr-12 w-1/2 sm:w-44">
                    <Image src="/telephone-call.png" width={20} height={20} alt="Call Icon" className="mr-2" />
                    <span>Call Us:</span>
                  </td>
                  <td className="flex flex-col w-1/2 sm:w-36 text-right sm:text-left text-[18px] font-bold">
                    <a href="tel:+916387061065" className="text-[#00ADB5] hover:underline truncate">
                      +91-6387061065
                    </a>
                    <a href="tel:+918795256721" className="text-[#00ADB5] hover:underline truncate">
                      +91-8795256721
                    </a>
                  </td>
                </tr>
                {/* Row for Email */}
                <tr className="sm:flex mt-6">
                  <td className="flex items-center justify-end w-1/2 sm:w-44 pr-12">
                    <Image src="/social.png" alt="Email Icon" width={20} height={20} className="mr-2" />
                    <h5>Email:</h5>
                  </td>
                  <td className="w-1/2 sm:w-44 text-right sm:text-left text-[18px]">
                    <a href="mailto:sunhomehealthcare820@gmail.com" className="text-[#00ADB5] hover:underline font-bold truncate">
                      sunhomehealthcare820@gmail.com
                    </a>
                  </td>
                </tr>
                {/* Row for instagram */}
                <tr className="sm:flex mt-6">
                  <td className="flex items-center justify-end w-1/2 sm:w-44 pr-12">
                    <Image src="/instagram.png" alt="Instagram Icon" width={20} height={20} className="mr-1" />
                    <h5>Instagam:</h5>
                  </td>
                  <td className="text-right sm:text-left">
                    <a
                      href="https://www.instagram.com/sun_health_care?igsh=YXkzOHY1ajljcTJt"
                      className="text-[#00ADB5] hover:underline font-bold text-center text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @sun_health_care
                    </a>
                  </td>
                </tr>
                <tr className="sm:flex mt-6">
                  <td className="flex items-center justify-end pr-12 w-1/2">
                    <Image src="/location.png" alt="Location Icon" width={30} height={30} className="mr-1 items-center" />
                    <h5>Address:</h5>
                  </td>
                  <td className="sm:w-48 text-left sm:text-left text-lg">
                    <p className="font-bold text-[#00ADB5] text-center">
                    Sushil Yadav - Loharmau, Fazullaganj, Lucknow, Uttar Pradesh 226020
                  </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Image/Gradient Section */}
          <motion.div
            className="rounded-lg shadow-lg flex-1 sm:order-2"
            ref={sectionRef}
            initial={{ opacity: -1, x: 20 }}
            animate={{ opacity: isInView ? 1 : -1, x: isInView ? 0 : 20 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <Image
              src="/Contact-us.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full "
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
