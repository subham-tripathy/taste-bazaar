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

const burger = () => {
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
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Masala Mutton Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Masala Mutton Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Paneer Tikka Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Paneer Tikka Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Tandoori Chicken Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Tandoori Chicken Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Aloo Tikki Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Aloo Tikki Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Butter Chicken Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Butter Chicken Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Spicy Vada Pav Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Spicy Vada Pav Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Pav Bhaji Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Pav Bhaji Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Fish Amritsari Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Fish Amritsari Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Keema Pav Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Keema Pav Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Kathi Roll Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Kathi Roll Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Bhurji Pav Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Bhurji Pav Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Malai Kebab Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Malai Kebab Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chaat Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chaat Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Samosa Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Samosa Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Rajma Galouti Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Rajma Galouti Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chettinad Chicken Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chettinad Chicken Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Goan Fish Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Goan Fish Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Baida Roti Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Baida Roti Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/burger.webp'} height={150} width={150} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Kebab Paratha Burger</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Kebab Paratha Burger, /pics/menu/burger.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


            </div>
        </div>
    )
}

export default burger