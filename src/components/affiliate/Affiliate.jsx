import React from 'react'

function Affiliate() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Become an Affiliate</h2>
        <p className="text-lg text-gray-600 mb-8">Join our affiliate program and start earning commissions.</p>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Affiliate