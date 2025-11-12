
import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  // Fix for: Cannot find namespace 'JSX'.
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Real Estate Development',
    description: 'Comprehensive development services from land acquisition and planning to construction and project completion.',
    icon: <svg className="w-12 h-12 text-[#6b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
  },
  {
    id: 2,
    title: 'Construction Management',
    description: 'Expert oversight of all construction phases to ensure projects are delivered on time, within budget, and to the highest quality standards.',
    icon: <svg className="w-12 h-12 text-[#6b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
  },
  {
    id: 3,
    title: 'Property Management',
    description: 'Professional management services to maintain and enhance the value of your properties, ensuring optimal performance and tenant satisfaction.',
    icon: <svg className="w-12 h-12 text-[#6b0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="w-24 h-1 bg-[#6b0000] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;