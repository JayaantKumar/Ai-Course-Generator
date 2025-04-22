import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const headerDashboard = () => {
  return (
    <div className=' flex justify-between items-center p-5 shadow-sm'>
            <Image  src={'/favicon.svg'} width={50} height={50} alt='sidebar-logo' />
            <UserButton />

    </div>
  )
}

export default headerDashboard

