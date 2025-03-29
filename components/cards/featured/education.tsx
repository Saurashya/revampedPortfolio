import Card from '@/components/ui/card'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import React from 'react'

const Education = () => {
  return (
    <Card title='My Education'>
        <Timeline>
            <TimelineItem date="2020 - 2024" title="Bachelor of Science in Computer Science and Information Technology" subtitle="Himalaya College of Engineering" tag="BSc.CSIT"/>
        </Timeline>
    </Card>
  )
}

export default Education