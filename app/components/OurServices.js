import React from 'react';
import Image from 'next/image';

// Import your service icons or images here
import aiIntegrationIcon from './../../public/icons/ai-integration.svg';
import businessOptimizationIcon from './../../public/icons/business-optimization.svg';
import aiDevelopmentIcon from './../../public/icons/ai-development.svg';
import strategyConsultingIcon from './../../public/icons/strategy-consulting.svg';

const services = [
  {
    id: 1,
    icon: aiIntegrationIcon,
    title: 'AI Integration',
    description:
      'Seamlessly integrate AI into your existing systems to enhance efficiency, improve decision-making processes, and automate operations.',
  },
  {
    id: 2,
    icon: businessOptimizationIcon,
    title: 'Business Optimization',
    description:
      'Utilize advanced AI analytics and machine learning to optimize business operations, reduce costs, and increase productivity.',
  },
  {
    id: 3,
    icon: aiDevelopmentIcon,
    title: 'AI Development',
    description:
      'Custom AI solution development, from conceptualization to deployment, ensuring solutions that are innovative, scalable, and secure.',
  },
  {
    id: 4,
    icon: strategyConsultingIcon,
    title: 'AI Strategy Consulting',
    description:
      'Expert guidance on AI strategy, from identifying opportunities for AI implementation to developing a comprehensive roadmap for digital transformation.',
  },
];

const OurServices = () => {
  return (
    <div className='py-12 px-4'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Our Services</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {services.map(service => (
          <div
            key={service.id}
            className='flex flex-col items-center p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <Image
              src={service.icon}
              alt={service.title}
              className='w-16 h-16 mb-4'
              width={50}
              height={50}
              style={{ height: 'auto', width: 'auto' }}
            />
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{service.title}</h3>
            <p className='text-gray-600 text-center'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
