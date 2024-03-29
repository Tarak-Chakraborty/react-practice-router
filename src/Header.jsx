import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex mb-10'>
      <div className='text-3xl text-start pl-3 text-indigo-600'>MOMOS</div>
      <ul className='flex items-center gap-6 m-auto'>
        <li className='hover:text-indigo-600'>
         <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/about'>About</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/contact us'>Contact Us</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/affiliate'>Affiliate</Link>
        </li>
      </ul>
      <button className='w-auto bg-indigo-500 rounded-lg p-2 text-sm text-white'>SignUp</button>
    </div>
  )
}

export default Header