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

const dosa = () => {
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
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Temptation</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Temptation, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Bonanza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Bonanza, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Celebration</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Celebration, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Masala Dosa Magic</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Masala Dosa Magic, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Euphoria</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Euphoria, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Fusion Fantasia</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Fusion Fantasia, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Delight, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Medley</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Medley, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Fiesta</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Fiesta, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Royale</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Royale, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Crispy Dosa Creations</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Crispy Dosa Creations, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Symphony</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Symphony, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Classic Dosa Elegance</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Classic Dosa Elegance, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Extravaganza</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Extravaganza, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Heavenly Dosa Bliss</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Heavenly Dosa Bliss, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>South Indian Dosa Feast</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='South Indian Dosa Feast, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Delicacy</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Delicacy, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Golden Dosa Treat</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Golden Dosa Treat, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Spectacle</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Spectacle, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/dosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Dosa Carnival</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Dosa Carnival, /pics/menu/dosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


            </div>
        </div>
    )
}

export default dosa