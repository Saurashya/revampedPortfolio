import Background from '@/components/cards/about/background'
import Me from '@/components/cards/about/me'
import Resume from '@/components/cards/about/resume'
import Heading from '@/components/Heading/heading'
import Card from '@/components/ui/card'
import React from 'react'

const About = () => {
  return (
    <div className='pt-24 px-3 lg:px-8'>
        <Heading number="02" title_1={"About"} title_2={"Me"}/>
        <div className="space-y-4 py-8">
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                <Me/>
                <Resume/>
                <Background/>
                <Card title="Gallery" className='2xl:hidden'>Gallery</Card>
            </div>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                <div className="space-y-4">
                <Card title="Instructor">Instructor</Card>
                <Card title="Certifications">Cerifications</Card>
                </div>
                <div className="space-y-4">
                <Card title="Stack">Stack</Card>
                <Card title="Experience">Experience</Card>
                <Card title="Education">Education</Card>
                </div>
                <div className="hidden 2xl:flex">
                <Card title="Gallery">Gallery</Card>
                </div>
            </div>
        </div>
        </div>
  )
}

export default About