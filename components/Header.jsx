import React from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 py-4">
   <div className="container mx-auto flex justify-between items-center px-4">
   <div className="flex items-center space-x-4">
          <Link href="/" className="text-white px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600">
            Register Organisation
          </Link>
          <Link href="/StakeHolders" className="text-white px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600"
          >
            Add StakeHolders
          </Link>
          <Link href="/WhiteList" className="text-white px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600" >
            WhiteList StakeHolders
          </Link>
          <Link href="/Mint" className="text-white px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600">
            Mint Tokens
          </Link>
        </div>
        <div className='text-white' >
          <ConnectButton />
        </div>

      </div>
    </nav>
  )
}

export default Header