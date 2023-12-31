import Image from 'next/image'
import Link from 'next/link'
import { Input } from 'postcss'
import React from 'react'

export default function Page() {
  return (
    <div className='' >
        <div className='  w-screen h-full flex justify-between items-center p-8  bg-primary '>
            <p className=' px-4 text-[60px] font-montez '><span>S</span>emo<span className='text-white'>nun</span></p>
            <div >
                <ul className='hidden md:flex m-10 '>
                <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    <li className=''>Home</li>
                    </Link>
                    <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    
                    <Link href='/'>Events</Link>
                    </Link>
                    <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    <Link href='/signup'>Signup</Link>
                    </Link>
                    <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    
                    <Link href='/login'>Login</Link>
                    </Link>
                    
                </ul>
            </div>
        </div>
      
    </div>
  )
}
