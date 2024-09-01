"use client"
import React from 'react';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-2 z-50">
      {/* Call Button */}
      <a href="tel:+918795256721" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transform transition duration-300">
          <iframe
            src="https://lottie.host/embed/0051ea18-237a-403c-bd1e-0101eb265290/7bK0ADF2DY.json"
            width={70}
            height={70}
            style={{ pointerEvents: 'none' }} // Prevent iframe from blocking clicks
          />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/918795256721" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transform transition duration-300">
          <iframe
            src="https://lottie.host/embed/a2475ea0-9687-4a49-9e6c-117fa0620449/mQXIsaIEeA.json"
            width={70}
            height={70}
            style={{ pointerEvents: 'none' }} // Prevent iframe from blocking clicks
          />
        </div>
      </a>

      <a href="https://www.instagram.com/sun_health_care?igsh=YXkzOHY1ajljcTJt" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transform transition duration-300">
          <iframe src="https://lottie.host/embed/e7906045-ff2e-4a59-8a46-087e97e9fab5/K2N5FI7lLo.json"
          width={60}
          height={60}
          style={{ pointerEvents: 'none' }}
          />
        </div>
      </a>
      
    </div>
  );
};

export default ContactButtons;
