import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray-100 py-12 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>Contact Us</h2>
        <p className='text-gray-600 mb-8'>
          OBJECT91 is ready to transform your business with AI. Contact us to discuss how we can help you achieve your
          business objectives with our comprehensive AI solutions.
        </p>

        <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Email</h3>
            <p className='text-gray-600'>info@object91.com</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Phone</h3>
            <p className='text-gray-600'>+1 (800) 555-0191</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Address</h3>
            <p className='text-gray-600'>123 Innovation Drive, Tech City, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
