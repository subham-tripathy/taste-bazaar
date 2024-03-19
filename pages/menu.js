import React from 'react'
import NavBar from './Components/NavBar'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <NavBar />
      <div id="biriyani" className='px-10 mb-20'>
        <span className='flex items-center'>
          <h1 className='font-bold text-2xl mr-16'>Tasty Biriyani Feast</h1>
          <Link className='text-sm bg-[#FF2400] p-1 px-2 font-bold text-white rounded' href={'/menu/biriyani'}>View All</Link>
        </span>
        <div className='grid grid-cols-4'>
          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Nawabi Zafrani Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Nawabi Zafrani Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Desi Tadka Dum Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Desi Tadka Dum Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Hyderabadi Nizami Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Hyderabadi Nizami Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Malabar Kaima Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Malabar Kaima Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>
        </div>
      </div>










      <div id="biriyani" className='px-10 mb-20'>
        <span className='flex items-center'>
          <h1 className='font-bold text-2xl mr-16'>Tasty Biriyani Feast</h1>
          <Link className='text-sm bg-[#FF2400] p-1 px-2 font-bold text-white rounded' href={'/menu/biriyani'}>View All</Link>
        </span>
        <div className='grid grid-cols-4'>
          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Nawabi Zafrani Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Nawabi Zafrani Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Desi Tadka Dum Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Desi Tadka Dum Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Hyderabadi Nizami Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Hyderabadi Nizami Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>


          <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
            <Image src={'/pics/menu/biriyani.webp'} height={150} width={150} className='m-auto' />
            <div>
              <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Malabar Kaima Biryani</h1>
              <span className='flex justify-between px-7'>
                <span className="font-bold">4⭐</span>
                <span>₹299</span>
              </span>
            </div>
            <button id='Malabar Kaima Biryani, /pics/menu/biriyani.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
          </div>
        </div>
      </div>









      
    </div>
  )
}

export default index