import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex mt-10'>
      <div className='text-3xl text-start pl-3 text-indigo-600'>MOMOS</div>
      <ul className='flex items-center gap-6 ml-auto pr-44'>
        <li className='hover:text-indigo-600'>Home</li>
        <li className='hover:text-indigo-600'>About</li>
        <li className='hover:text-indigo-600'>Contact Us</li>
        <li className='hover:text-indigo-600'>Affiliate</li>
      </ul>
      
    </div>
    <hr className='mt-6'/>
    <h3 className='mt-3'>---- © 2024 MOMOS Pvt.Ltd ----</h3>
    </>
  )
}

export default Footer