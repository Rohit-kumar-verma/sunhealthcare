import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true, // Only trigger animation once when it comes into view
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  return (
    <div className="bg-gray-50 py-12">
      <section className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
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
            Reach out to us using the contact details below or fill out the form to get in touch.
          </motion.p>
        </motion.div>
        
        {/* Contact Details */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 w-full"
          ref={sectionRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.h3
            className="text-2xl font-semibold mb-4 text-[#00ADB5]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            Contact Details
          </motion.h3>
          <motion.ul
            className="list-disc pl-5 text-[#8C96A7] text-sm md:text-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <li>Email: <a href="mailto:sunhomehealthcare820@gmail.com" className="text-[#00ADB5] hover:underline">sunhomehealthcare820@gmail.com</a></li>
            <li>Phone: <a href="tel:+916387061065" className="text-[#00ADB5] hover:underline">+91-6387061065</a>, <a href="tel:+918795256721" className="text-[#00ADB5] hover:underline">+91-8795256721</a></li>
            <li>Instagram: <a href="https://www.instagram.com/sun_health_care?igsh=YXkzOHY1ajljcTJt" className="text-[#00ADB5] hover:underline" target="_blank" rel="noopener noreferrer">sun_health_care</a></li>
          </motion.ul>
        </motion.div>

          <div className='mt-4 w-full md:hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.070207381763!2d80.9097952032933!3d26.899631763129847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957005a2becbd%3A0x5c5a5d465205ef05!2sSun%20Hom%20Health%20Services!5e0!3m2!1sen!2sin!4v1724725285420!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
      </section>
    </div>
  );
}

export default Contact;
