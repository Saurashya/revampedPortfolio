import Card from '@/components/ui/card';
import React from 'react';

const Background = () => {
  return (
    <Card title='My Background'>
      <p className='text-lg text-gray-300'>
        I am a BSc.CSIT graduate and full-stack developer with 2+ years of experience building scalable web applications and enterprise systems. My work spans React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and Prisma.
      </p>
      <p className='mt-4 text-lg text-gray-300'>
        At Panacea Solution, I serve as CTO, co-founder, and full-stack developer, leading products from architecture through deployment. I also teach the MERN stack and mentor developers in debugging, Git workflows, code quality, and real-world engineering practices.
      </p>
    </Card>
  );
};

export default Background;
