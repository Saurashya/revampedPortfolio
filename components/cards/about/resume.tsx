import Card from '@/components/ui/card'
import React from 'react'
import Signature from "@/public/assets/images/signature.png"
import Image from 'next/image'
import Button from '@/components/ui/button'
import { FaDownload } from 'react-icons/fa'
import Socials from '@/components/ui/socials'

const Resume = () => {
  return (
    <Card>
        <p className='text-lg xl:text-xl font-medium text-primary-foreground'>
        Passionate Full-Stack Developer and MERN Stack Instructor, specializing in MongoDB, Express.js, React.js, and Node.js. As CTO at Panacea Solution, I build high-performance applications and mentor aspiring developers. With expertise in backend optimization, frontend state management, and API development, I focus on crafting clean, scalable solutions. Let’s connect and create something impactful! 🚀
        </p>
        {/*signature image*/}
        <div>
            <Image src={Signature} alt="Saurashya Signature"/>
        </div>
        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
            {/* Socials */}
            <Socials/>
            {/* <Button>
                <FaDownload/>
                Resume
            </Button> */}
        </div>
    </Card>
  )
}

export default Resume