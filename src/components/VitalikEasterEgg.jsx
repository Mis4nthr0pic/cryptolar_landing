import React from 'react';

const VitalikEasterEgg = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close on background click
    >
      <div 
        className="relative p-4 bg-gray-900 rounded-lg shadow-lg max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white text-2xl font-bold leading-none hover:text-gray-400"
        >
          &times;
        </button>
        <img 
          src="/images/vitalik.jpg" 
          alt="Vitalik Buterin Easter Egg" 
          className="max-w-full h-auto rounded-md"
        />
        <p className="text-white text-center mt-4">Surprise! You found Vitalik!</p>
      </div>
    </div>
  );
};

export default VitalikEasterEgg;