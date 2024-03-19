import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Image from 'next/image'


function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";").map(cookie => cookie.trim());
    for (const cookie of cookies) {
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

const puri = () => {
    useEffect(() => {
        const btns = document.querySelectorAll('button')
        btns.forEach((e) => {
            e.addEventListener('click', () => {
                const itemDetails = e.id.split(',')
                fetch('/api/addToCart?item=' + itemDetails[0] + '&uid=' + getCookie('tbuser') + '&img=' + itemDetails[1] + '&price=' + itemDetails[2]).then(res => res.json()).then((data) => {
                    if (data.msg === 'not logged in') {
                        alert('Please Login !')
                    }
                    else if (data.msg === 'success add to cart') {
                        alert('Added to cart')
                    }
                })
            })
        })
    })
    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-4'>



                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Maharaja Puri Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Maharaja Puri Delight, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Rajwadi Puri Fusion</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Rajwadi Puri Fusion, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Desi Tadka Puri Platter</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Desi Tadka Puri Platter, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Puri Rajbhog Bonanza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Puri Rajbhog Bonanza, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Gulab Jamun Puri Surprise</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Gulab Jamun Puri Surprise, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Mughlai Puri Fiesta</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Mughlai Puri Fiesta, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Nawabi Puri Extravaganza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Nawabi Puri Extravaganza, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chaat Masala Puri Magic</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chaat Masala Puri Magic, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Achari Puri Temptation</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Achari Puri Temptation, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Malai Kofta Puri Fusion</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Malai Kofta Puri Fusion, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Paneer Tikka Puri Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Paneer Tikka Puri Delight, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Palak Paneer Puri Bliss</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Palak Paneer Puri Bliss, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dal Makhani Puri Indulgence</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dal Makhani Puri Indulgence, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Puri Feast</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Puri Feast, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Butter Chicken Puri Special</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Butter Chicken Puri Special, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Tandoori Puri Supreme</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Tandoori Puri Supreme, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Hyderabadi Biryani Puri Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Hyderabadi Biryani Puri Delight, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Punjabi Kadhi Puri Treat</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Punjabi Kadhi Puri Treat, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>South Indian Puri Platter</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='South Indian Puri Platter, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/puri.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Bengali Fish Puri Surprise</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Bengali Fish Puri Surprise, /pics/menu/puri.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


            </div>
        </div>
    )
}

export default puri