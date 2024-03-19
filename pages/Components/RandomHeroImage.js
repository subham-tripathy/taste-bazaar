import React, { useEffect } from 'react'

const a = '/pics/heroPics/chicken-gravy.png'
const b = '/pics/heroPics/fried-rice.png'
const c = '/pics/heroPics/spicy-chicken-biryani.png'



const RandomHeroImage = () => {
    const foodList = [
        {
            id: 0,
            img: a,
        },
        {
            id: 1,
            img: b,
        },
        {
            id: 2,
            img: c,
        },
        {
            id: 3,
            img: b,
        },
        {
            id: 4,
            img: b,
        },
        {
            id: 5,
            img: b,
        },
        {
            id: 6,
            img: b,
        },
        {
            id: 7,
            img: b,
        },
        {
            id: 8,
            img: b,
        },
        {
            id: 9,
            img: b,
        },
    ]

    useEffect(() => {
        const randomID = (parseInt(Math.random() * 10));
        document.getElementById('IMG').src = foodList.at(randomID).img;
    })
    return (
        <div>
            <img id='IMG' className='ml-auto h-[40vh]'/>
        </div>
    )
}

export default RandomHeroImage