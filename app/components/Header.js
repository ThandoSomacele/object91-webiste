'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-gray-900 text-white body-font shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a href='/' className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          <Image
            src={'/logo.svg'}
            alt='OBJECT91 Logo'
            className='w-10 h-10 mr-2'
            width={50}
            height={50}
            style={{ height: 'auto', width: 'auto' }}
          />
          <span className='ml-3 text-xl'>OBJECT91</span>
        </a>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <a href='#about' className='mr-5 hover:text-gray-400'>
            About Us
          </a>
          <a href='#services' className='mr-5 hover:text-gray-400'>
            Services
          </a>
          <a href='#industries' className='mr-5 hover:text-gray-400'>
            Industries
          </a>
          <a href='#why-choose-us' className='mr-5 hover:text-gray-400'>
            Why Choose Us
          </a>
          <a href='#contact' className='mr-5 hover:text-gray-400'>
            Contact
          </a>
        </nav>
        <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          Get Started
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'>
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
        {/* Mobile menu button */}
        <button
          className='text-white inline-flex p-3 hover:bg-gray-800 rounded lg:hidden ml-auto hover:text-white outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-6 h-6'
            viewBox='0 0 24 24'>
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:hidden flex-col absolute top-0 left-0 w-full bg-gray-900 p-5`}>
          <a href='#about' className='hover:text-gray-400 p-2'>
            About Us
          </a>
          <a href='#services' className='hover:text-gray-400 p-2'>
            Services
          </a>
          <a href='#industries' className='hover:text-gray-400 p-2'>
            Industries
          </a>
          <a href='#why-choose-us' className='hover:text-gray-400 p-2'>
            Why Choose Us
          </a>
          <a href='#contact' className='hover:text-gray-400 p-2'>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
