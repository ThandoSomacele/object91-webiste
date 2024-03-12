import React from 'react';
import Image from 'next/image';

// Import your industry-specific icons or images here
import healthcareIcon from './../../public/icons/healthcare.svg';
import financeIcon from './../../public/icons/finance.svg';
import retailIcon from './../../public/icons/retail.svg';
import manufacturingIcon from './../../public/icons/manufacturing.svg';
import corporateIcon from './../../public/icons/corporate.svg';

const industries = [
  {
    id: 1,
    icon: healthcareIcon,
    name: 'Healthcare',
    description:
      'Improving patient care, streamlining operations, and advancing medical research with AI-driven solutions.',
  },
  {
    id: 2,
    icon: financeIcon,
    name: 'Finance',
    description:
      'Enhancing accuracy in risk assessment, fraud detection, and personalized banking services through AI.',
  },
  {
    id: 3,
    icon: retailIcon,
    name: 'Retail',
    description:
      'Transforming customer experiences, optimizing inventory management, and personalizing marketing efforts with AI.',
  },
  {
    id: 4,
    icon: manufacturingIcon,
    name: 'Manufacturing',
    description:
      'Increasing efficiency, reducing downtime, and predicting maintenance needs with AI and IoT integrations.',
  },
  {
    id: 5,
    icon: corporateIcon,
    name: 'Corporate Industry',
    description:
      'Streamlining operations, enhancing decision-making, and driving innovation in corporate environments.',
  },
];

const IndustriesWeServe = () => {
  return (
    <div className='bg-gray-100 py-12 px-4'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Industries We Serve</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {industries.map(industry => (
          <div key={industry.id} className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
            <Image
              src={industry.icon}
              alt={industry.name}
              className='w-16 h-16 mb-4'
              width={50}
              height={50}
              style={{ height: 'auto', width: 'auto' }}
            />
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{industry.name}</h3>
            <p className='text-gray-600'>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
