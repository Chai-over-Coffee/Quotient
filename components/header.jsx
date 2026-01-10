"use client"
import {  SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Authenticated, Unauthenticated } from 'convex/react'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from '@/hooks/use-store-user'
import { Building, Plus, Ticket } from 'lucide-react'

const Header = () => {

  const { isLoading } = useStoreUser()

  const [showUpgradeModal, setShowUpgradeModal] = useState();

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
            
              <Button variant={"ghost"} size='sm' onClick={setShowUpgradeModal}>
                Pricing
              </Button>

              <Button variant='ghost' size='sm' asChild className={"mr-2"}>
                <Link href="explore">Explore</Link>
              </Button>

            <Authenticated>
              <Button size='sm' asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className='w-4 h-4' />
                  <span className='hidden sm:inline'>Create Event</span>
                </Link>
              </Button>

              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link 
                  label='My Tickets'
                  labelIcon= {<Ticket size={16} />}
                  href='/my-tickets'
                  />

                  <UserButton.Link 
                  label='My Events'
                  labelIcon = {<Building size={16} />}
                  href='/my-events'
                  />
                  
                  <UserButton.Action label='manageAccount'/>
                </UserButton.MenuItems>
              </UserButton>
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