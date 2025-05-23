import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='flex space-x-180'>
        <Link href="/" className='text-2xl font-bold'>
          University of Ruhuna
        </Link>
        <ul className='flex space-x-15'>
          <li>
            <Link href="/about" className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className='hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar