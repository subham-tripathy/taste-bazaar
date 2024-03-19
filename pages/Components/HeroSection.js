import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ArrowRightCircleIcon from '@heroicons/react/24/outline/ArrowRightCircleIcon'
import RandomHeroImage from './RandomHeroImage'

const HeroSection = () => { 
    return (
        <div className='flex justify-between items-center px-14 dark:text-shadow-sm shadow-lg shadow-black my-10 w-[95%] mx-auto rounded-xl p-10 bg-slate-200 dark:bg-slate-400'>
            <div className='ml-10 w-max'>
                <h1 className='font-bold text-4xl flex flex-col gap-2'>
                    <span>A Symphony of Flavors</span>
                    <span>in Every Byte,</span>
                    <span>
                        <span className='text-[#FF2400] dark:text-yellow-400 dark:text-shadow-sm'>Taste Bazaar</span> Delights.
                    </span>
                </h1>
                <p className='text-slate-600 font-semibold my-7 dark:text-white'>From spicy chaats to aromatic biryanis, discover India's finest on Taste Bazaar.</p>
                <Link className='rounded-md px-3 py-2 flex items-center bg-[#FF2400] w-max text-white font-semibold dark:shadow dark:shadow-black' href={'/menu'}>
                    Order Now
                    <ArrowRightCircleIcon className='h-7 ml-3'/>
                </Link>
            </div>
            <div>
                <RandomHeroImage/>
            </div>
        </div>
    )
}

export default HeroSection