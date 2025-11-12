import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white h-[60vh] md:h-[80vh] flex items-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide">Building Tomorrow's Landmarks</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Crafting exceptional spaces with integrity, innovation, and a commitment to quality.</p>
        <button 
          onClick={onContactClick}
          className="bg-[#6b0000] hover:bg-[#861212] text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;