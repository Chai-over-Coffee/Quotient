import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo or Brand Name */}
            <Link href="/" className="flex items-center">
              <span className="bg-black rounded-full p-2 flex items-center justify-center w-12 h-12">
                <Image
                  src="/quotient.svg"
                  alt="Quotient Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </span>

              {/* Pro Badge */}
            </Link>

            {/* Search & Location- Desktop Only */}

            {/* Right Side Actions */}
        </div>

        {/* Mobile Search & Location- Below Header */}
    </nav>

    {/* Modals */}
    </>
  )
}

export default Header