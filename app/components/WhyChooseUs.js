import React from 'react';
import Image from 'next/image';

// Optionally, import icons or images that correspond to each reason
import expertTeamIcon from './../../public/icons/expert-team.svg';
import customSolutionsIcon from './../../public/icons/custom-solutions.svg';
import cuttingEdgeTechIcon from './../../public/icons/cutting-edge-tech.svg';
import clientCentricIcon from './../../public/icons/client-centric.svg';

const reasons = [
  {
    id: 1,
    icon: expertTeamIcon,
    title: 'Expert Team',
    description:
      'Our team comprises AI specialists with extensive experience in developing and integrating AI solutions across various industries.',
  },
  {
    id: 2,
    icon: customSolutionsIcon,
    title: 'Custom Solutions',
    description:
      'We believe in the power of customization and work closely with our clients to develop solutions that perfectly fit their needs.',
  },
  {
    id: 3,
    icon: cuttingEdgeTechIcon,
    title: 'Cutting-Edge Technology',
    description:
      'We stay at the forefront of AI technology, ensuring our clients benefit from the latest advancements.',
  },
  {
    id: 4,
    icon: clientCentricIcon,
    title: 'Client-Centric Approach',
    description:
      'Our success is measured by your success. We prioritize your goals and work tirelessly to achieve them.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className='py-12 px-4'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Why Choose Us</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {reasons.map(reason => (
          <div key={reason.id} className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg'>
            <Image
              src={reason.icon}
              alt={reason.title}
              className='w-16 h-16 mb-4'
              width={50}
              height={50}
              style={{ height: 'auto', width: 'auto' }}
            />
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{reason.title}</h3>
            <p className='text-gray-600'>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
