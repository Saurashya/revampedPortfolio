import Card from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import MyImage from '@/public/assets/images/saurashya.png'
import { cn } from '@/lib/utils'

const Me = () => {
  return (
    <Card className='2xl:h-full p-0 overflow-hidden'>
      <div className="relative w-full h-[420px] sm:h-[500px]">
        <Image
          src={MyImage}
          alt='Saurashya Singh Rayamajhi'
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
          className='object-cover object-top'
        />
        {/* readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-2">
          <Tag text="Hello, World 👋" />
          <Tag text="I am Saurashya Singh Rayamajhi" />
          <Tag text="CTO / Co-founder / Full-stack Developer 💪" />
          <Tag text="MERN Instructor 💻" />
        </div>
      </div>
    </Card>
  )
}

export default Me

const Tag = ({ text, className }: { text: String; className?: String }) => {
  return (
    <div
      className={cn(
        'max-w-full rounded-full rounded-bl-lg bg-green-benzol/80 px-3 py-1.5 backdrop-blur-sm',
        className
      )}
    >
      <p className='text-sm font-semibold leading-tight text-primary-foreground sm:text-base'>
        {text}
      </p>
    </div>
  )
}
