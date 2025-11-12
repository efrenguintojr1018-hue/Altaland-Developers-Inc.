import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Altaland Developers Inc.</h2>
          <div className="w-24 h-1 bg-[#6b0000] mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Our Team" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-600 leading-relaxed">
            <p className="mb-4">
              Altaland Developers Inc.is the construction and real estate arm of the DALTA Group of Companies. The company is duly registered with the Securities & Exchange Commission (SEC) and with Philippine Contractors Accreditation Board (PCAB).
            </p>
            <p className="mb-4">
              Our mission is to build not just structures, but communities. We focus on sustainable practices, innovative design, and creating spaces that enhance the quality of life for our clients and stakeholders.
            </p>
            <p>
              With a team of experienced professionals, we strive to exceed expectations and set new standards in the real estate industry. Trust, integrity, and passion are the cornerstones of our business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;