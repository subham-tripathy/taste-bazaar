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

const chole = () => {
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
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Delight, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Spicy Chole Bhature</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Spicy Chole Bhature, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Punjabi Bhature Chole</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Punjabi Bhature Chole, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Amritsari Chole Bhature</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Amritsari Chole Bhature, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Fusion</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Fusion, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Royale</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Royale, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Bonanza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Bonanza, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Feast</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Feast, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Explosion</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Explosion, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Extravaganza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Extravaganza, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Temptation</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Temptation, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Delicacy</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Delicacy, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Carnival</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Carnival, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Fiesta</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Fiesta, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Spectacle</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Spectacle, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Medley</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Medley, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Symphony</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Symphony, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Bliss</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Bliss, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Euphoria</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Euphoria, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/chole.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chole Bhature Celebration</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chole Bhature Celebration, /pics/menu/chole.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


            </div>
        </div>
    )
}

export default chole