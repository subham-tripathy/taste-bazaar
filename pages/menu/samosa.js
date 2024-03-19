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

const samosa = () => {
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
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Punjabi Patakha Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Punjabi Patakha Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chaatpata Samosa Surprise</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chaatpata Samosa Surprise, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Mughlai Malai Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Mughlai Malai Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Kashmiri Kebab Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Kashmiri Kebab Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Chettinadu Chilli Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Chettinadu Chilli Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Bengali Bhaja Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Bengali Bhaja Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Marathi Misal Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Marathi Misal Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Tandoori Twist Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Tandoori Twist Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Hyderabadi Haleem Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Hyderabadi Haleem Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Bihari Baingan Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Bihari Baingan Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Royal Rajasthani Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Royal Rajasthani Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Andhra Aloo Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Andhra Aloo Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Gujarati Garam Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Gujarati Garam Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Sindhi Sev Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Sindhi Sev Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Mangalorean Masala Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Mangalorean Masala Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Assamese Aloo Pitika Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Assamese Aloo Pitika Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Spicy Crunchy Samosa Delight</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Spicy Crunchy Samosa Delight, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Goan Ghee Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Goan Ghee Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Keralite Coconut Samosa</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Keralite Coconut Samosa, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


                <div className='border-4 border-yellow-400 rounded-md shadow-md shadow-black px-5 text-center m-10  w-68'>
                    <Image src={'/pics/menu/samosa.webp'} height={200} width={200} className='m-auto' />
                    <div>
                        <h1 className='dark:bg-yellow-400 dark:text-shadow px-2 py-1 rounded w-max m-auto mb-2 font-semibold'>Masaledar Samosa Blast</h1>
                        <span className='flex justify-between px-7'>
                            <span className="font-bold">4⭐</span>
                            <span>₹299</span>
                        </span>
                    </div>
                    <button id='Masaledar Samosa Blast, /pics/menu/samosa.webp, 299' className='my-3 bg-[#FF2400] px-1.5 py-1 rounded text-sm text-white'>Add to Cart</button>
                </div>


            </div>
        </div>
    )
}

export default samosa