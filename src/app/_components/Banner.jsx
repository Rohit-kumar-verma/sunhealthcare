"use client";
import { useState, useEffect } from 'react';
import 'animate.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'slider-1.jpg',
      title: 'Complete Healthcare Solution',
      description: 'Providing exceptional care and support, Sun Healthcare Services is dedicated to enhancing your well-being with personalized solutions. Our commitment to your health ensures you receive the highest quality care tailored to your unique needs',
      link: '#about',
      linkText: 'Learn More'
    },
    {
      image: 'slider-2.jpg',
      title: 'Best Doctors and Equipments in Town',
      description: 'At Sun Healthcare Services, we pride ourselves on offering the best medical professionals and cutting-edge equipment in town, ensuring you receive the highest standard of care for all your healthcare needs.      ',
      link: '#contact',
      linkText: 'Make Appointment'
    },
    {
      image: 'slider-3.jpg',
      title: 'Your Well-Being is Our Utmost Concern',
      description: 'At Sun Healthcare Services, we are deeply committed to prioritizing your health and ensuring you receive compassionate, top-quality care every step of the way',
      link: '#services',
      linkText: 'Our Services'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div className="slider-wrapper relative text-white w-full">
      <section className="slider-section overflow-hidden relative w-full">
        <div className="slider-active flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="single-slider w-full h-[50vh] flex-shrink-0 relative">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#00ADB5]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="slider-content w-full md:w-[50%]">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-8 animate__animated animate__fadeInDown animate__delay-1.5s">
                    {slide.title}
                  </h1>
                  <p className="text-white mb-8 text-lg sm:text-xl md:text-2xl leading-6 md:leading-8 animate__animated animate__fadeInLeft animate__delay-1.5s">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-100' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
