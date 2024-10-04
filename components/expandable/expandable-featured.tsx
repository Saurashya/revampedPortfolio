import React, { useState } from 'react'
import { featuredData } from '@/data'
import FeaturedCard from '../cards/featured/featured-card'
import { cn } from '@/lib/utils'

const ExpandableFeatured = () => {
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

  return (
    <div className='w-full grid lg:flex lg:justify-between lg:gap-x-4'>
        {featuredData.slice(1).map((featured,i)=>{
            return(
                <div key={i} className={cn('relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out' ,i===hoveredIndex?"lg:w-[40%]":"lg:w-[33%]")} onMouseEnter={()=>handleMouseEnter(i)} onMouseLeave={() => setHoveredIndex(null)}>
                    <FeaturedCard active={i===hoveredIndex} title={featured.title} tag={featured.tag} video={featured.video} logo={featured.logo}/>
                </div>
            )
        })}
    </div>
  )
}

export default ExpandableFeatured