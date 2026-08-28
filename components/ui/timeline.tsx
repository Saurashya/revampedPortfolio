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
        <div className={isCourse ? "relative" : "grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4"}>
            {!isCourse && (
              <p className='text-sm text-secondary-foreground'>{date}</p>
            )}

            <div className="min-w-0">
                <div className="flex flex-col gap-0.5">
                    {/* TITLE  */}
                <div>
                    <p className='text-wrap text-sm font-medium leading-6'>{title}</p>
                </div>

            {/* Sub Title  */}
                <div className="flex max-w-full items-center gap-2">
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
        <div className='flex min-w-0 flex-wrap items-center text-secondary-foreground'>
            <p className='mt-1 text-sm font-normal leading-6'>{subTitle}</p>
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
