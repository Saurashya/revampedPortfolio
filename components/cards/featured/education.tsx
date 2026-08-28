import Card from '@/components/ui/card'
import Timeline, { TimelineItem } from '@/components/ui/timeline'
import React from 'react'

const Education = () => {
  return (
    <Card title='Education & Certification'>
        <Timeline>
            <TimelineItem date="2025" title="Bachelor of Science in Computer Science and Information Technology" subtitle="Himalaya College of Engineering · 75.62%" tag="BSc.CSIT"/>
            <TimelineItem date="2026" title="International English Language Testing System" subtitle="IDP Education · Overall band 8" tag="IELTS"/>
        </Timeline>
    </Card>
  )
}

export default Education
