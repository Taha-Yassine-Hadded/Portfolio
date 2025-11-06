import React from 'react'
import { HoverEffect } from './Card-hover-effect';
const awardsCertificates = [
    {
        title: "Attendance Hashgraph Developer",
        link: "https://certs.hashgraphdev.com/f5da5d45-9395-40f5-aa69-4045a5088595.pdf",
    },
    {
        title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
        link: "https://www.credly.com/badges/3feb201f-8573-4653-b4f4-ce2be5fce188/linked_in_profile",
    },
    {
        title: "Graph Developer - Professional",
        link: "https://www.apollographql.com/tutorials/certifications/faf5b411-8dfc-4bb1-963a-aa5fa9a0aa6b",
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        link: "https://www.credly.com/badges/83cba17a-90d2-4daf-b4d6-631618f173a4/linked_in_profile",
    },
];
const Certifications = () => {
    return (
        <div className='py-20' id='certifications'>
            <h1 className=' heading text-neutral-200'>
                Awards and{' '}
                <span className='text-purple'> Certifications</span>
            </h1>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={awardsCertificates} />
            </div>
        </div>
    )
}

export default Certifications