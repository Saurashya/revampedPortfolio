import Card from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import MyImage from '@/public/assets/images/saurashya.png'
import { cn } from '@/lib/utils'

const Me = () => {
  return (
    <Card className='2xl:h-full'>
        <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
            <Image src={MyImage} alt='saurashya image' className='absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover'/>
        </div>
        <div className="absolute top-[65%] space-y-2">
            <Tag text="Hello, World 👋" className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-lg"/>
            <Tag text="I am Saurashya Singh Rayamajhi" className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-lg"/>
            <Tag text="Full Stack Developer 💪" className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-lg"/>
            <Tag text="MERN Instructor 💻" className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-lg"/>
        </div>

    </Card>
  )
}

export default Me

const Tag = ({text,className}:{text:String,className:String})=>{
    return(
      <div className={cn('bg-green-500/[0.8] w-fit py-1.5 px-3 rounded-full',className)}>
        <p className='text-primary-foreground leading-[110%] fonr-bold'>{text}</p>
      </div>
  )
}