import React from 'react';

function Review() {
  return (
    <div>
      <section className='mt-32 grid gap-10'>
        {/* <div className='flex justify-start absolute items-start'>
          <img 
            src='shape-3.svg' 
            alt='shape' 
            className='w-1/2 sm:w-1/4 md:w-1/6 transform transition-transform duration-500 ease-in-out hover:scale-110'
          />
        </div> */}
        <div className='flex flex-col justify-center items-center px-4'>
          <div 
            className='flex flex-col items-center justify-center px-4 gap-6 animate-fade-in-up'
          >
            <span className='text-[#00ADB5] text-3xl font-semibold'>
              Reviews
            </span>
            <h1 className='text-5xl md:text-5xl font-semibold text-center animate-slide-in'>
              What Our Clients Say
            </h1>
          </div>
          <p 
            className='text-center text-[#8C96A7] text-base md:text-lg font-normal leading-6 px-4 md:px-20 lg:px-40 mt-6 animate-fade-in-up'
          >
            At 'Sun Health Care Service', we pride ourselves on delivering exceptional care. Our clients’ feedback speaks volumes about our commitment and quality. Here’s what some of them have to say:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4'>
            <div className='bg-[#f8f9fa] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105 animate-card-hover'>
              <p className='text-[#333] text-lg font-normal mb-4'>
                "The level of care provided by Sun Health Care Service is unmatched. The team was professional, compassionate, and attentive. I highly recommend their services!"
              </p>
              <span className='text-right text-[#00ADB5] font-semibold'>
                - John Doe
              </span>
            </div>
            <div className='bg-[#f8f9fa] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105 animate-card-hover'>
              <p className='text-[#333] text-lg font-normal mb-4'>
                "Exceptional service from start to finish. The staff was knowledgeable and supportive throughout the entire process. Truly grateful for their help."
              </p>
              <span className='text-right text-[#00ADB5] font-semibold'>
                - Jane Smith
              </span>
            </div>
            <div className='bg-[#f8f9fa] p-4 rounded-lg shadow-md flex flex-col transform transition-transform duration-500 hover:scale-105 animate-card-hover'>
              <p className='text-[#333] text-lg font-normal mb-4'>
                "I had a great experience with Sun Health Care Service. The attention to detail and genuine care were evident in every interaction. Highly recommended!"
              </p>
              <span className='text-right text-[#00ADB5] font-semibold'>
                - Alice Johnson
              </span>
            </div>
          </div>
          <a 
            href='#' 
            className='bg-[#00ADB5] text-white text-lg font-semibold py-2 px-4 rounded-md hover:shadow-lg hover:shadow-cyan-500/50 mt-6 bg-blend-overlay transition-transform transform duration-500 hover:scale-105 animate-button-hover'
          >
            Read More Reviews
          </a>
        </div>
        {/* <div className='flex justify-center'>
          <img 
            src="review-image.png" 
            alt="reviews" 
            className='w-full px-4 opacity-0 animate-fade-in'
          />
        </div> */}
      </section>
    </div>
  );
}

export default Review;
