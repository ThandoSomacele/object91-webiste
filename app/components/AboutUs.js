import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center py-12 px-4'>
      <Image
        src={'/images/about-us.webp'}
        alt='About Us'
        className='w-full md:w-1/2 h-auto rounded-lg shadow-md'
        width={100}
        height={100}
        style={{ height: 'auto', width: 'auto' }}
      />
      <div className='md:ml-8 mt-4 md:mt-0'>
        <h2 className='text-3xl font-bold text-gray-800'>About Us</h2>
        <p className='mt-4 text-gray-600'>
          OBJECT91 is at the forefront of revolutionizing businesses through cutting-edge AI integration, optimization,
          and development solutions...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
