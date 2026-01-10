"use client"
import {  SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Authenticated, Unauthenticated } from 'convex/react'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from '@/hooks/use-store-user'

const Header = () => {

  const { isLoading } = useStoreUser()

  return (
    <>
    <nav className='fixed top-0 left-0 right-0 bg-black z-20 border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between'>
            {/* Logo or Brand Name */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="flex items-center justify-center h-16 w-auto">
                <Image
                  src="/quotient.svg"
                  alt="Quotient Logo"
                  width={157}
                  height={48}
                  className="object-contain"
                  priority
                />
              </span>

              {/* Pro Badge */}
            </Link>

            {/* Search & Location- Desktop Only */}
            

            {/* Right Side Actions */}
            <div className='flex items-center'>
            <Authenticated>
              {/* Create Event Button */}
              <UserButton/>
            </Authenticated>

              <Unauthenticated>
              <SignInButton mode='modal'>
                <Button size='sm'>Sign In</Button>
              </SignInButton>       
            </Unauthenticated>
            </div>
        </div>

        {/* Mobile Search & Location- Below Header */}

        {/* Loader */}
        {isLoading && (
        <div className='absolute bottom-0 left-0 w-full'>
          <BarLoader width={"100%"} color='#a855f7'/>
        </div>
        )}

    </nav>

    {/* Modals */}
    </>
  )
}

export default Header