import React from 'react'
import Link from 'next/link'

const biriyaniIMG = '/pics/whatsOnYourMind/biriyani.png'
const burgerIMG = '/pics/whatsOnYourMind/burger.png'
const cakesIMG = '/pics/whatsOnYourMind/cakes.png'
const choleBhatureIMG = '/pics/whatsOnYourMind/chole bhature.png'
const dosaIMG = '/pics/whatsOnYourMind/dosa.png'
const idliIMG = '/pics/whatsOnYourMind/idli.png'
const momosIMG = '/pics/whatsOnYourMind/momos.png'
const upmaIMG = '/pics/whatsOnYourMind/upma.png'
const parathaIMG = '/pics/whatsOnYourMind/paratha.png'
const pohaIMG = '/pics/whatsOnYourMind/poha.png'
const puriIMG = '/pics/whatsOnYourMind/puri.png'
const samosaIMG = '/pics/whatsOnYourMind/samosa.png'
const sandwichIMG = '/pics/whatsOnYourMind/sandwich.png'


const WhatsOnYouMind = () => {
    return (
        <div className='p-20'>
            <h1 className='font-semibold text-2xl'>Whats On Your Mind?</h1>
            <section className='grid grid-cols-5 gap-y-10'>

                <Link href={'/menu/biriyani'} className='text-center w-max'>
                    <img src={biriyaniIMG} alt='biriyani' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Biriyani</h1>
                </Link>

                <Link href={'/menu/burger'} className='text-center w-max'>
                    <img src={burgerIMG} alt='burger' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Burger</h1>
                </Link>

                <Link href={'/menu/cakes'} className='text-center w-max'>
                    <img src={cakesIMG} alt='cakes' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Cakes</h1>
                </Link>

                <Link href={'/menu/chole'} className='text-center w-max'>
                    <img src={choleBhatureIMG} alt='chole bhature' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Chole Bhature</h1>
                </Link>

                <Link href={'/menu/dosa'} className='text-center w-max'>
                    <img src={dosaIMG} alt='dosa' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Dosa</h1>
                </Link>

                <Link href={'/menu/idli'} className='text-center w-max'>
                    <img src={idliIMG} alt='idli' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Idli</h1>
                </Link>

                <Link href={'/menu/momo'} className='text-center w-max'>
                    <img src={momosIMG} alt='momo' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Momo</h1>
                </Link>

                <Link href={'/menu/upma'} className='text-center w-max'>
                    <img src={upmaIMG} alt='upma' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Upma</h1>
                </Link>

                <Link href={'/menu/puri'} className='text-center w-max'>
                    <img src={puriIMG} alt='puri' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Puri</h1>
                </Link>

                <Link href={'/menu/samosa'} className='text-center w-max'>
                    <img src={samosaIMG} alt='samosa' className='h-40' loading='lazy'/>
                    <h1 className='text-lg font-semibold'>Samosa</h1>
                </Link>


            </section>
        </div>
    )
}

export default WhatsOnYouMind