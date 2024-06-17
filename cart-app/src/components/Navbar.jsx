import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/images/whyhy.png';
export default function Navbar() {
  const cartLength = useSelector((state) => state.addToCartreducer.Cart?.length);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 mt-4" >
          <Link to="/">
            <img src={logo} alt="nino" className='w-16' />
          </Link>
          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 relative">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Link to={'/cart'}>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.344 1.722M7.28 14H16.72L17.66 7H5.34l1.94 7zM10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">{cartLength}</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
