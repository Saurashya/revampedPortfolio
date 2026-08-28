import Card from '@/components/ui/card'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import React from 'react'

const Experience = () => {
  return (
    <Card title='My Experience'>
        <Timeline>
            <TimelineItem date="May - Aug 2026" title="Contract Full-stack Developer" subtitle="Himalaya College of Engineering" tag="End to end" link='https://hcoe.edu.np'/>
            <TimelineItem date="Apr 2024 - Mar 2026" title="CTO / Co-founder / Full-stack Developer" subtitle="Panacea Solution Pvt. Ltd." tag="Leadership" link=''/>
            <TimelineItem date="2024 - Present" title="MERN Instructor" subtitle="Panacea Solution Pvt. Ltd." tag="MERN" link=''/>
        </Timeline>
    </Card>
  )
}

export default Experience
