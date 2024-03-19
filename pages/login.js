import Link from 'next/link'
import React, { useEffect } from 'react'
import NavBar from './Components/NavBar';

const login = () => {
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
        const tbuser = getCookie('tbuser');
        if (tbuser) {
            alert('You already logged in !')
            window.location.href = '/'
        }
        else {
            const form = document.querySelector('form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = document.querySelector('input#id').value
                const password = document.querySelector('input#password').value
                fetch('/api/login?id=' + id + '&password=' + password).then(res => res.json()).then(data => {
                    if (data.msg === 'login success') {
                        alert('Successfully Logged In')
                        document.cookie = "tbuser=" + id + "; expires=7; path=/; secure";
                        window.location.href = '/'
                    }
                })
            })
        }
    })

    return (
        <div >
            <NavBar />
            <div className='p-10'>
                <form className='flex flex-col items-center w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-[#FF2400] dark:bg-yellow-400 gap-5 p-10 py-20 '>
                    <input id='id' type="text" name='id' placeholder='Enter User Id' className='dark:text-black shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <input id='password' type="password" name='password' placeholder='Enter Password' className='dark:text-black shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <Link href={'/signup'} className='text-white text-shadow'>Dont have an Account?</Link>
                    <button type="submit" className='text-white shadow shadow-black text-shadow text-lg bg-yellow-400 dark:bg-[#FF2400] px-4 py-1.5 rounded-md font-bold'>Login</button>
                </form>
            </div>
        </div >
    )
}

export default login