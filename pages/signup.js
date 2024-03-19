import Link from 'next/link'
import React, { useEffect } from 'react'
import NavBar from './Components/NavBar';

const signup = () => {
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
                const name = document.querySelector('input#name').value
                const id = document.querySelector('input#id').value
                const password = document.querySelector('input#password').value
                const cpassword = document.querySelector('input#cpassword').value
                if (password === cpassword) {
                    fetch('/api/signup?name=' + name + '&id=' + id + '&password=' + password,{method:'POST'}).then(res => res.json()).then(data => {
                        if (data.msg === 'user exists') {
                            alert('User Already Exists, Please Log In')
                            window.location.href = '/login'
                        }
                        else if (data.msg === 'signup success') {
                            document.cookie = "tbuser=" + id + "; expires=7; path=/; secure";
                            alert('Successfully Signed Up')
                            window.location.href = '/'
                        }
                        else {
                            window.location.href = '/'
                        }
                    })
                }
                else {
                    alert('password and confirm password must be same');
                }
            })
        }
    })

    return (
        <div>
            <NavBar/>
            <div className='px-10'>
                <form className='flex flex-col items-center w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-[#FF2400] dark:bg-yellow-400 gap-5 p-10 py-20 '>
                    <input id='name' type="text" name='name' placeholder='Enter Name' className='shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <input id='id' type="text" name='id' placeholder='Enter User Id' className='shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <input id='password' type="password" name='password' placeholder='Enter Password' className='shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <input id='cpassword' type="password" name='cpassword' placeholder='Confirm Password' className='shadow-md shadow-black border-2 w-80 p-2 pl-3' />
                    <Link href={'/login'} className='text-shadow'>Have an Account?</Link>
                    <button type="submit" className='shadow shadow-black text-shadow text-lg bg-yellow-400 dark:bg-[#FF2400] px-4 py-1.5 rounded-md font-bold'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default signup