import React from 'react';
import { motion } from 'framer-motion';

function Review() {
  return (
    <div className="bg-gray-100 py-12">
      <section className="mt-32 grid gap-10">
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center px-4">
          <motion.div
            className="flex flex-col items-center justify-center px-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <span className="text-[#00ADB5] text-3xl font-semibold">
              Reviews
            </span>
            <motion.h1
              className="text-5xl md:text-5xl font-semibold text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              What Our Clients Say
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-center text-[#8C96A7] text-base md:text-lg font-normal leading-6 px-4 md:px-20 lg:px-40 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            At 'Sun Health Care Service', we pride ourselves on delivering exceptional care. Our clients’ feedback speaks volumes about our commitment and quality. Here’s what some of them have to say:
          </motion.p>
        </div>
        
        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
          {[
            {
              text: "The level of care provided by Sun Health Care Service is unmatched. The team was professional, compassionate, and attentive. I highly recommend their services!",
              name: "John Doe"
            },
            {
              text: "Exceptional service from start to finish. The staff was knowledgeable and supportive throughout the entire process. Truly grateful for their help.",
              name: "Jane Smith"
            },
            {
              text: "I had a great experience with Sun Health Care Service. The attention to detail and genuine care were evident in every interaction. Highly recommended!",
              name: "Alice Johnson"
            }
          ].map((review, index) => (
            <motion.div
              key={index}
              className="bg-[#f8f9fa] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
            >
              <p className="text-[#333] text-lg font-normal mb-4">
                "{review.text}"
              </p>
              <span className="text-right text-[#00ADB5] font-semibold">
                - {review.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Read More Button */}
        <div className="flex justify-center mt-6">
          <motion.a
            href="#"
            className="bg-[#00ADB5] text-white text-md font-semibold py-2 px-6 rounded-md hover:shadow-lg hover:shadow-cyan-500/50 transition-transform transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            Read More Reviews
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default Review;
