import React from 'react'

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Discover amazing things here</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">Get Started</button>
      </div>
    </div>
  )
}

export default Home