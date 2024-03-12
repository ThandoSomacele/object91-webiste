import React from 'react';
import Image from 'next/image';

const OurVision = () => {
  return (
    <div className='bg-white py-12 px-4'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center'>
        <Image
          src={'/images/our-vision.webp'}
          alt='Our Vision'
          className='w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8'
          width={100}
          height={100}
          style={{ height: 'auto', width: 'auto' }}
        />
        <div>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Vision</h2>
          <p className='text-gray-600'>
            To be the global leader in AI solutions, empowering businesses across various industries to achieve
            unparalleled success through innovative technology. Our commitment to innovation, customization, and
            excellence drives us to explore new horizons, redefine technological boundaries, and create sustainable
            value for our clients and society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
