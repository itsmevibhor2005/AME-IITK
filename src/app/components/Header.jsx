"use client";

import React from 'react'
import Image from 'next/image'
import Navbar from './Home/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Menu, MenuItem } from '@/components/ui/navbar-menu';
const Header = () => {
    
  return (
    <div className='w-full'>
      <Image src="/logo.png" alt="logo" width={250} height={160} />
      
      <Navbar/>
    </div>
  )
}

export default Header
