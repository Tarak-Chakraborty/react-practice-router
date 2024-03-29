import React from 'react'

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-gray-600">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs