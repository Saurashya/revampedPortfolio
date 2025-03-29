import Card from '@/components/ui/card'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import React from 'react'

const Instructor = () => {
  return (
    <Card title='My Courses'>
        <span className='text-secondary-foreground font-semibold'>Trusted by over <b>50+</b> students</span>
        <Timeline>
            <TimelineItem date="" title="Web Development" subtitle="" tag="Full stack" link='' isCourse/>
            <TimelineItem date="" title="MERN Stack" subtitle="" tag="MERN" link='' isCourse/>
        </Timeline>
    </Card>
  )
}

export default Instructor