import Card from '@/components/ui/card'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import React from 'react'

const Experience = () => {
  return (
    <Card title='My Experience'>
        <Timeline>
            <TimelineItem date="2023 - Present" title="Web Developer" subtitle="Panacea Solution Pvt. Ltd." tag="Full stack" link=''/>
            <TimelineItem date="2024 - Present" title="MERN Instructor" subtitle="Panacea Solution Pvt. Ltd." tag="MERN" link=''/>
        </Timeline>
    </Card>
  )
}

export default Experience