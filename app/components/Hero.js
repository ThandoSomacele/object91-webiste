import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative bg-gray-900 text-white'>
      {/* Optional: Background image */}
      <div className='absolute inset-0 z-0 opacity-50'>
        <Image
          src={'/images/hero.webp'}
          alt='Hero Background'
          className='w-full h-full object-cover'
          width={100}
          height={100}
          style={{ height: 'auto', width: 'auto' }}
        />
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center text-4xl font-extrabold sm:text-5xl md:text-6xl'>Transforming Businesses with AI</h1>
        <p className='mt-4 max-w-md text-center text-xl sm:mt-5 sm:text-2xl'>
          Leveraging cutting-edge AI to drive innovation and efficiency.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
          <a
            href='#contact-us'
            className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 sm:px-10'>
            Get In Touch
          </a>
          <a
            href='#our-services'
            className='px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 sm:px-10'>
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
