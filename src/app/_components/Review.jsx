"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Corrected import for Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

function Review() {
  const reviews = [
        {
          text: "The level of care provided by Sun Health Care Service is unmatched. The team was professional, compassionate, and attentive. I highly recommend their services!",
          name: "Shashank Rajput"
        },
        {
          text: "Exceptional service from start to finish. The staff was knowledgeable and supportive throughout the entire process. Truly grateful for their help.",
          name: "Rajeev Singh"
        },
        {
          text: "I had a great experience with Sun Health Care Service. The attention to detail and genuine care were evident in every interaction. Highly recommended!",
          name: "Priyanka Tripathi"
        },
        {
          text: "Their service was a life-saver. The professionalism and care were beyond our expectations. Thank you!",
          name: "Ankit Verma"
        },
        {
          text: "Sun Health Care Service provided us with unparalleled care and attention. The staff truly cares about their clients.",
          name: "Ravi Sharma"
        }
      ];
  return (
    <div className="bg-gray-100 py-12 relative">
      <section className="mt-12 grid gap-10 py-2">
        {/* Section Title */}
        <div className='absolute ml-10'>
          <Image src="/shape-7.svg" alt="" width={300} height={200} className='w-auto h-auto'/>
        </div>
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
        <div className="px-4 mt-6 w-full">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}  // Default: 1 slide
            slidesPerGroup={1}
            centeredSlides={true}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,  // 2 slides for small devices
              },
              768: {
                slidesPerView: 3,  // 3 slides for medium devices
              },
            }}
            className="w-[90vw]"
          >
          {reviews.map((review, index) => (
             <SwiperSlide key={index}>
                <motion.div
                  key={index}
                  className="bg-[#f8f9fa] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                >
                  <p className="text-[#333] text-lg font-normal mb-4 ">
                    "{review.text}"
                  </p>
                  <span className="text-right text-[#00ADB5] font-semibold">
                    - {review.name}
                  </span>
                </motion.div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Review;

