import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [tbuser, setTbUser] = useState(null)
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
    let a = getCookie('tbuser')
    setTbUser(a)
  }, [])
  return (
    <nav className='flex justify-between items-center px-10 py-5 text-slate-500 dark:text-white'>
      <Link href={'/'}><h1 className='text-3xl font-bold text-[#FF2400] dark:text-yellow-400 dark:text-shadow-sm'>Taste Bazaar</h1></Link>
      <ul className='flex space-x-1 font-semibold'>
        <li><Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/menu'}>Menu</Link></li>
        <li><Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/cart'}>Cart</Link></li>
        <li><Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/about'}>About</Link></li>
        <li>
          {
            tbuser ?
              (
                <>
                  <Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/profile'}>Hi, {tbuser}</Link>
                  <Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/logout'}>Logout</Link>
                </>
              )
              :
              (<Link className='px-4 py-2 rounded hover:bg-yellow-400 hover:text-black' href={'/login'}>Sign In</Link>)
          }
        </li>
      </ul>
    </nav>
  )
}

export default NavBar