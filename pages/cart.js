import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'
import Image from 'next/image'

const cart = () => {
    useEffect(() => {
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
        let total = 0
        fetch('/api/cart?uid=' + getCookie('tbuser')).then(res => res.json()).then((data) => {
            data.forEach(e => {
                const img = document.createElement('img')
                img.src = e.img
                img.style.width = '100px'
                img.style.margin = 'auto'

                const td = document.createElement('td')
                td.appendChild(img)

                const name = document.createElement('td')
                name.textContent = e.product
                name.style.textAlign = 'center'


                const price = document.createElement('td')
                price.textContent = '₹ ' + e.price
                price.style.textAlign = 'center'

                const tr = document.createElement('tr')
                tr.appendChild(td)
                tr.appendChild(name)
                tr.appendChild(price)

                document.querySelector('tbody').appendChild(tr)





                const itemName = document.createElement('td')
                itemName.textContent = e.product

                const itemPrice = document.createElement('td')
                itemPrice.style.textAlign = 'right'
                itemPrice.textContent = '₹ ' + e.price

                total += e.price

                itemName.style.width = '250px'
                const totalitem = document.createElement('tr')
                totalitem.appendChild(itemName)
                totalitem.appendChild(itemPrice)
                document.querySelector('#totalitems').appendChild(totalitem)
            })

            const temp = document.createElement('td')
            const totalamt = document.createElement('td')
            totalamt.textContent = 'TOTAL: ₹ ' + total
            totalamt.style.paddingTop = '25px'
            totalamt.style.fontWeight = 'bold'
            const totalPrice = document.createElement('tr')
            totalPrice.appendChild(temp)
            totalPrice.appendChild(totalamt)
            document.querySelector('#totalitems').appendChild(totalPrice)








            const checkoutBTN = document.querySelector('#checkout')
            checkoutBTN.addEventListener('click', () => {
                fetch('/api/checkout?uid=' + getCookie('tbuser')).then(res => res.json()).then((data) => {
                    if (data.msg === 'checked out') {
                        alert('Successfully Placed Your Order')
                        window.location.href = '/'
                    }
                    else if (data.msg === 'not logged in') {
                        window.location.href = '/'
                    }
                })
            })
        })
    })


    return (
        <div>
            <NavBar />
            <div className='mt-10 flex justify-between pl-24 pr-40'>
                <table>
                    <tbody>
                        <tr>
                            <th className='w-52'>Item</th>
                            <th className='w-52'>Name</th>
                            <th className='w-52'>Price</th>
                        </tr>
                    </tbody>
                </table>

                <div id="total">
                    <h1 className='font-bold text-center text-4xl mb-10 text-yellow-400 text-shadow'>Cart Total</h1>
                    <div className='border-2 rounded-md border-yellow-400 p-5' id="totalitems"></div>
                    <button id='checkout' className='relative w-full mt-10 rounded-md shadow-md shadow-black bg-yellow-400 text-xl text-shadow p-2'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default cart