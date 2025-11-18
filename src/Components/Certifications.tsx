import React from 'react'
import { HoverEffect } from './Card-hover-effect';
const awardsCertificates = [
    {
        title: "AWS Cloud Foundations",
        link: "https://www.credly.com/badges/3feb201f-8573-4653-b4f4-ce2be5fce188/linked_in_profile",
    },
    {
        title: "Agile Project Management Professional - Atlassian",
        link: "https://www.linkedin.com/learning/certificates/abe6bf2c362295bfa09e1b32092a6a03b9dde71cf055d3d01d98cd0e5a1b5a5e",
    },
    {
        title: "Spring Boot 3 Essential Training",
        link: "https://www.linkedin.com/learning/certificates/2a2fd4552367351448d97fd546bddcbbec77cfd7a202739498bfc6c4d5733ac9",
    },
    {
        title: "Graph Developer - Professional",
        link: "https://www.apollographql.com/tutorials/certifications/faf5b411-8dfc-4bb1-963a-aa5fa9a0aa6b",
    },
    {
        title: "Hashgraph Developer",
        link: "https://certs.hashgraphdev.com/f5da5d45-9395-40f5-aa69-4045a5088595.pdf",
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