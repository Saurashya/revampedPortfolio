import Link from 'next/link';
import React, {FC, ReactNode } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';

interface TimelineProps{
    children:ReactNode;
}

const Timeline:FC<TimelineProps> = ({children}) => {
  return (
    <div className='flex flex-col gap-y-6'>{children}</div>
  )
}

export default Timeline

// Timeline Item 

interface TimelineItemProps {
    date:string;
    title:string;
    subtitle:string;
    link?:string;
    tag?:string;
    isCourse?:boolean;
}

export const TimelineItem:FC<TimelineItemProps> = ({date,title,subtitle,link,tag,isCourse}) => {
    return (
        <div className="flex flex-wrap gap-12 min-h justify-start relative">
            <div className="h-auto flex-none break-words whitespace-pre" style={{width:`${isCourse ? "0" : "" }`}}>
            <p className='text-secondary-foreground'>{date}</p>
            </div>

            <div className="flex gap-x-2" style={{transform:`${isCourse ? "translateX(-45px)" : "" }`}}>
                <div className="flex flex-col gap-0.5">
                    {/* TITLE  */}
                <div className="h-auto flex-none break-words whitespace-pre">
                    <p className='leading-6 font-medium text-sm text-wrap'>{title}</p>
                </div>

            {/* Sub Title  */}
                <div className="flex items-center gap-2 w-max">
                    {
                        link?<Link href={link} className='font-extralight text-sm'><Body link={link} tag={tag} subTitle={subtitle}/></Link>:(
                            <Body tag={tag} subTitle={subtitle}/>
                        )
                    }
                </div>
                </div>
            </div>
     </div>
    )
}

interface BodyProps{
    subTitle:string;
    tag?:string;
    link?:string;
}

const Body:FC<BodyProps>=({link,tag,subTitle})=>{
    return(
        <div className='text-secondary-foreground flex items-center'>
            <p className='text-sm font-normal leading-6 mt-1'>{subTitle}</p>
            {
                link?<FiArrowUpRight/>:null
            }
            {
                tag?<div className='ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5'>
                    <p className='text-[10px] font-normal text-secondary-foreground'>
                        {tag}
                    </p>
                </div>:null
            }
        </div>
    )
}