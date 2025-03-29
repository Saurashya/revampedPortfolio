import Card from '@/components/ui/card';
import React from 'react';

const Background = () => {
  return (
    <Card className='md:h-full p-6' title='My Background'>
      <p className='text-lg text-gray-300'>
        A graduate from a BSc.CSIT background and a full-stack developer specializing in the MERN stack. With a strong foundation in software development, I am passionate about building scalable and efficient IT-based solutions for clients.
      </p>
      <p className='mt-4 text-lg text-gray-300'>
        Currently, I serve as the CTO at Panacea Solution, where I lead the development of cutting-edge software solutions and mentor aspiring developers. I take great interest in spreading my knowledge through teaching, helping developers bridge the gap between learning and real-world applications.
      </p>
    </Card>
  );
};

export default Background;
