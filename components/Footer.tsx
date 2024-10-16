import React from 'react'
const Footer = () => {
  return (
    
  <div className="flex min-h-80 bg-gray-200 justify-center items-center gap-52 text-black">
    <div className="courses">
        <h1 className='text-xl font-bold ml-10'>Core Courses</h1>
        <ul>
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
        </ul>
    </div>
    <div className="advance-courses ">
        <h1 className='text-xl font-bold ml-16'>Advanced Courses</h1>
        <ul>
        <li>Web 3 and Metaverse</li>
        <li>Cloud-Native Computing</li>
        <li>Artificial Intelligence (AI) and Deep Learning</li>
        <li>Ambient Computing and IoT</li>
        <li>Genomics and Bioinformatics</li>
        <li>Network Programmability and Automation</li>
        </ul>
    </div>
    <div className="items-center">
        <h1 className='text-xl font-bold'>Social Links</h1>
        <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkdin</li>
        </ul>
    </div>
  </div>
  )
}

export default Footer