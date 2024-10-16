import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../app/public/logo.9ff76f62.png';
const Header = () => {
  return (
    <header>
      <nav>
      <ul className='flex justify-evenly bg-sky-800 h-16 text-center items-center'>
        <Image 
        src={logo} 
        alt='error' 
        width={100}
        className='mt-20'/>
        <h1 className='text-2xl text-center text-sky-200  font-bold'>Tuition Free Education Program on Latest Technologies</h1>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/Apply">Apply</Link></li>
       <li><Link href="/Jobs">Jobs</Link></li>
       <li><Link href="/Result">Result</Link></li>
       <li><Link href="/Course">Course</Link></li>
      </ul>
      </nav>
      </header>
  )
}

export default Header