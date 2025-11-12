import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Altaland was a seamless experience. Their attention to detail and commitment to quality are evident in every corner of our new corporate headquarters. They delivered beyond our expectations.",
    author: 'DR./ BGEN. ANTONIO L. TAMAYO',
    title: 'Chairman of the Board and CEO, DALTA Group'
  },
  {
   id: 2,
    quote: "The Altaland team transformed our vision into a stunning reality. Their professionalism and innovative approach to sustainable design have set a new benchmark in the industry. We couldn't be happier.",
    author: 'AR. Anna Guia B. Delos Reyes',
    title: 'President, Altaland Developers Inc.'
  },
  {
    id: 3,
    quote: ".",
    author: 'M',
    title: ''
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-[#6b0000]">
    <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c0-2.947-1.76-5.52-4.213-6.613l-1.12-1.387zM25.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333c0-2.947-1.76-5.52-4.213-6.613l-1.12-1.387z"></path>
    </svg>
    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
    <p className="text-sm text-gray-500">{testimonial.title}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Partners Say</h2>
          <div className="w-24 h-1 bg-[#6b0000] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;