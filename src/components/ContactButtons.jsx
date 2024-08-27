import React from 'react';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-4 z-50">
      {/* Call Button */}
      <a href="tel:+91875256721" target="_blank" rel="noopener noreferrer">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transform transition duration-300">
          <iframe
            src="https://lottie.host/embed/0051ea18-237a-403c-bd1e-0101eb265290/7bK0ADF2DY.json"
            width={80}
            height={80}
            style={{ pointerEvents: 'none' }} // Prevent iframe from blocking clicks
          />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/8795256721" target="_blank" rel="noopener noreferrer">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-105 transform transition duration-300">
          <iframe
            src="https://lottie.host/embed/a2475ea0-9687-4a49-9e6c-117fa0620449/mQXIsaIEeA.json"
            width={80}
            height={80}
            style={{ pointerEvents: 'none' }} // Prevent iframe from blocking clicks
          />
        </div>
      </a>
    </div>
  );
};

export default ContactButtons;
