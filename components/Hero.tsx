import React from 'react'
import Image from 'next/image';
import cover1 from '@/app/public/cover1.1d863e39.png'
const Hero = () => {
  return (
   <div className="flex  bg-slate-50">
      <div className="flex flex-col justify-center items-center text-center w-2/4 mb-20 mt-20">
        <h1 className='text-6xl font-black text-sky-800 '>Governor Sindh</h1>
        <h2 className='text-5xl  text-sky-800 mr-8 mt-3 mb-8' >Kamran Khan Tessori</h2>
        <h2 className='text-4xl  font-black text-sky-500 mr-52'>Certified Cloud </h2>
        <h2 className='text-4xl  font-black text-sky-500 mr-20'>Applied Generative AI</h2>
        <h2 className='text-4xl  font-black text-sky-500 mr-36'>Engineer (GenEng)</h2>
        <p className='font-black text-xl text-sky-800 mr-60 mt-4'>Earn up to $5,000 / month</p>
        <p  className='font-black text-xl text-sky-800 mr-56 mt-2'>Now admissions are open in Hyderabad</p>
        <div className="flex " >
            <button  className='font-black text-xl text-white p-2 mr-60 mt-8 ml-4 bg-sky-800 rounded'>Apply Now</button>
            <p  className='font-black text-2xl text-sky-800 mt-12 '>562,143</p>
        </div>
      </div>
    <div className='ml-60 w-2/5 mt-28'>
   <Image
    src={cover1}
    alt='cover'
    width={1000}
   />
   </div>
   </div>
  )
}

export default Hero