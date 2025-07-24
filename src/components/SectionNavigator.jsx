import React from 'react';

const SectionNavigator = ({ currentSectionId, nextSectionId, className = "", variant = "light" }) => {
  const scrollToNext = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Don't render if there's no next section
  if (!nextSectionId) {
    return null;
  }

  const styles = {
    light: {
      button: "bg-white/10 border-white/20 group-hover:bg-white/20",
      icon: "text-white/80 group-hover:text-white"
    },
    dark: {
      button: "bg-black/10 border-black/20 group-hover:bg-black/20",
      icon: "text-black/80 group-hover:text-black"
    }
  };

  const currentStyle = styles[variant] || styles.light;

  return (
    <button 
      onClick={scrollToNext}
      className={`flex flex-col items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer group ${className}`}
      aria-label="Scroll to next section"
    >
      <div className={`p-3 rounded-full backdrop-blur-sm border transition-colors duration-300 ${currentStyle.button}`}>
        <svg 
          className={`w-6 h-6 transition-colors duration-300 ${currentStyle.icon}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </button>
  );
};

export default SectionNavigator;