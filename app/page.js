import AboutUs from '@/app/components/AboutUs';
import OurVision from '@/app/components/OurVision';
import OurServices from '@/app/components/OurServices';
import IndustriesWeServe from '@/app/components/IndustriesWeServe';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import ContactUs from '@/app/components/ContactUs';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero />
      <AboutUs />
      <OurVision />
      <OurServices />
      <IndustriesWeServe />
      <WhyChooseUs />
      <ContactUs />
    </main>
  );
}
