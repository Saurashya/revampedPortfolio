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
        Full-stack developer with 2+ years of experience independently delivering products end to end. As CTO and co-founder at Panacea Solution, I build maintainable, high-performance applications while mentoring developers as a MERN instructor. My focus is clean architecture, reliable systems, and user experiences that make complex work feel simple.
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
