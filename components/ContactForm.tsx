import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you would handle form submission here (e.g., send data to an API).
    // For this demo, we'll just simulate a successful submission.
    const isSuccess = true; // Change this to false to test error state

    setIsSubmitting(false);
    if (isSuccess) {
      setSubmitted(true);
    } else {
      setError('Something went wrong. Please try again later.');
    }
  };
  
  const FormContent = () => (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#6b0000] focus:ring focus:ring-[#6b0000] focus:ring-opacity-50" required disabled={isSubmitting} />
          </div>
          <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#6b0000] focus:ring focus:ring-[#6b0000] focus:ring-opacity-50" required disabled={isSubmitting} />
          </div>
      </div>
      <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#6b0000] focus:ring focus:ring-[#6b0000] focus:ring-opacity-50" required disabled={isSubmitting} />
      </div>
      <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#6b0000] focus:ring focus:ring-[#6b0000] focus:ring-opacity-50" required disabled={isSubmitting}></textarea>
      </div>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="text-center">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="bg-[#6b0000] hover:bg-[#861212] text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:scale-100"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
      </div>
    </form>
  );

  const SuccessMessage = () => (
    <div className="text-center p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
      <p className="text-gray-600">Your message has been sent successfully. We will get back to you shortly.</p>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">Have a project in mind or want to learn more about our services? Let's talk.</p>
          <div className="w-24 h-1 bg-[#6b0000] mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-xl p-8">
                {submitted ? <SuccessMessage /> : <FormContent />}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;